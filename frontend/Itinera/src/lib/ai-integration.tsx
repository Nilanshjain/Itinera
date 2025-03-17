/* "use client"

import { useState } from "react"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

interface GenerateItineraryProps {
  prompt: string
  destination?: string
  startDate?: string
  endDate?: string
  budget?: number
  travelStyle?: string
  onComplete?: (itinerary: string) => void
  onError?: (error: Error) => void
}

export async function generateItinerary({
  prompt,
  destination,
  startDate,
  endDate,
  budget,
  travelStyle,
  onComplete,
  onError,
}: GenerateItineraryProps) {
  try {
    // Construct a detailed prompt for the AI
    let detailedPrompt = prompt

    // If using structured data instead of free text prompt
    if (!prompt && (destination || startDate || budget || travelStyle)) {
      detailedPrompt = `Create a detailed travel itinerary for a trip`

      if (destination) {
        detailedPrompt += ` to ${destination}`
      }

      if (startDate && endDate) {
        detailedPrompt += ` from ${startDate} to ${endDate}`
      }

      if (budget) {
        detailedPrompt += ` with a budget of $${budget}`
      }

      if (travelStyle) {
        detailedPrompt += ` focusing on a ${travelStyle} experience`
      }
    }

    // System prompt to guide the AI
    const systemPrompt = `You are an expert travel planner with knowledge of destinations worldwide.
    Create a detailed day-by-day travel itinerary based on the user's preferences.
    Include:
    - A catchy title for the trip
    - Daily activities with approximate times
    - Recommended accommodations
    - Transportation options
    - Estimated costs for activities
    - Local cuisine recommendations
    - Cultural insights and tips
    - Weather considerations
    Format the response in a clear, organized manner with day headers and sections.`

    // Generate the itinerary using the AI SDK
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: detailedPrompt,
      system: systemPrompt,
    })

    // Call the completion callback if provided
    if (onComplete) {
      onComplete(text)
    }

    return text
  } catch (error) {
    // Handle any errors
    if (onError) {
      onError(error as Error)
    }
    throw error
  }
}

// React hook for generating itineraries
export function useItineraryGenerator() {
  const [itinerary, setItinerary] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const generate = async (options: GenerateItineraryProps) => {
    setIsLoading(true)
    setError(null)

    try {
      const result = await generateItinerary({
        ...options,
        onComplete: (text) => {
          setItinerary(text)
          if (options.onComplete) {
            options.onComplete(text)
          }
        },
        onError: (err) => {
          setError(err)
          if (options.onError) {
            options.onError(err)
          }
        },
      })

      setIsLoading(false)
      return result
    } catch (err) {
      setIsLoading(false)
      setError(err as Error)
      throw err
    }
  }

  return {
    generate,
    itinerary,
    isLoading,
    error,
  }
}*/
