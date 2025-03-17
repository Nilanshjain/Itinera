import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

interface ItineraryRequest {
  prompt?: string;
  travelStyle?: string;
  destination?: string;
  startDate?: string;
  endDate?: string;
  budget?: number;
}

function parseItinerary(rawItinerary: string): { day: number; activities: string[] }[] {
  const days: { day: number; activities: string[] }[] = [];
  const lines = rawItinerary.split("\n");
  let currentDay = 0;
  let currentActivities: string[] = [];

  for (const line of lines) {
    const dayMatch = line.match(/^Day\s+(\d+)/i);
    if (dayMatch) {
      if (currentDay > 0) {
        days.push({ day: currentDay, activities: currentActivities });
        currentActivities = [];
      }
      currentDay = parseInt(dayMatch[1]);
    } else if (line.trim() && currentDay > 0) {
      currentActivities.push(line.trim());
    }
  }

  if (currentDay > 0) {
    days.push({ day: currentDay, activities: currentActivities });
  }

  return days;
}

export const generateItinerary = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("Received request body:", req.body);
    const { prompt, travelStyle, destination, startDate, endDate, budget } = req.body as ItineraryRequest;

    if (!prompt && (!travelStyle || !destination || !startDate || !endDate)) {
      res.status(400).json({ 
        error: "Please provide either a prompt or all required fields (travel style, destination, dates)" 
      });
      return;
    }

    // Construct the prompt based on the input method
    let systemPrompt = "You are a professional travel planner. Create a detailed day-by-day itinerary that includes activities, accommodations, and estimated costs. Make it practical and enjoyable.";
    
    let userPrompt = prompt || `Create a ${travelStyle} trip to ${destination} from ${startDate} to ${endDate} with a budget of $${budget}. Include specific activities, accommodations, and estimated costs.`;

    console.log("Sending to Together.ai with prompt:", userPrompt);

    const response = await axios.post(
      "https://api.together.xyz/inference",
      {
        model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
        prompt: `${systemPrompt}\n\n${userPrompt}`,
        max_tokens: 2000,
        temperature: 0.7,
        top_p: 0.7,
        top_k: 50,
        repetition_penalty: 1,
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.TOGETHER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Received Together.ai response");

    const itinerary = (response.data as any).output.choices[0].text;

    // Parse the AI response into a structured format
    const structuredItinerary = {
      raw: itinerary || '',
      parsed: parseItinerary(itinerary || ''),
    };

    console.log("Sending structured itinerary response");
    res.json(structuredItinerary);
  } catch (error: any) {
    console.error("Error generating itinerary:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      response: error.response?.data
    });

    // Handle specific Together.ai errors
    if (error.response?.status === 429) {
      res.status(503).json({ 
        error: "Service temporarily unavailable",
        details: "We're experiencing high demand. Please try again later or contact support."
      });
      return;
    }

    res.status(500).json({ 
      error: "Failed to generate itinerary",
      details: error.message
    });
  }
}; 