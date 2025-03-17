"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { ArrowLeft, Download, Share2 } from "lucide-react"

interface ItineraryDay {
  day: number;
  activities: string[];
}

interface Itinerary {
  raw: string;
  parsed: ItineraryDay[];
}

export default function ItineraryView() {
  const [itinerary, setItinerary] = useState<Itinerary | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const storedItinerary = localStorage.getItem("currentItinerary")
    if (!storedItinerary) {
      navigate("/")
      return
    }
    setItinerary(JSON.parse(storedItinerary))
  }, [navigate])

  if (!itinerary) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-8">
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <div className="flex gap-2">
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6"
        >
          <h1 className="text-3xl font-bold mb-6">Your Travel Itinerary</h1>
          
          <div className="space-y-8">
            {itinerary.parsed.map((day) => (
              <div key={day.day} className="border-b pb-6 last:border-b-0">
                <h2 className="text-xl font-semibold mb-4">Day {day.day}</h2>
                <ul className="space-y-2">
                  {day.activities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Raw Itinerary</h3>
            <pre className="whitespace-pre-wrap text-sm text-muted-foreground">
              {itinerary.raw}
            </pre>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
} 