"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-violet-100 to-white dark:from-violet-950 dark:to-background py-20 md:py-32">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            AI-Powered Travel Itineraries <span className="text-primary">Just For You</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create personalized travel plans in seconds. Our AI understands your preferences and builds the perfect
            itinerary for your next adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-medium">
              Plan Your Trip
            </Button>
            <Button size="lg" variant="outline" className="font-medium">
              See Examples
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Background images */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <img
          src="/placeholder.svg?height=600&width=800"
          alt="Santorini, Greece"
          className="absolute top-[10%] left-[5%] w-64 h-48 object-cover rounded-lg"
        />
        <img
          src="/placeholder.svg?height=600&width=800"
          alt="Kyoto, Japan"
          className="absolute top-[20%] right-[10%] w-72 h-48 object-cover rounded-lg"
        />
        <img
          src="/placeholder.svg?height=600&width=800"
          alt="New York, USA"
          className="absolute bottom-[15%] left-[15%] w-64 h-40 object-cover rounded-lg"
        />
        <img
          src="/placeholder.svg?height=600&width=800"
          alt="Bali, Indonesia"
          className="absolute bottom-[10%] right-[5%] w-56 h-40 object-cover rounded-lg"
        />
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pink-400/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl"
      />
    </div>
  )
}

