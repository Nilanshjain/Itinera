"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const images = [
  "/bg-1.avif",
  "/bg-2.jpeg",
  "/bg-3.jpg",
] // Add more images if needed

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000) // Changes every 5 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-violet-100 to-white dark:from-violet-950 dark:to-background py-20 md:py-32">
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === index ? 0.3 : 0 }} // Reduced opacity for readability
            transition={{ duration: 1 }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-black dark:text-white">
            AI-Powered Travel Itineraries <span className="text-primary">Just For You</span>
          </h1>
          <p className="text-lg md:text-xl text-black dark:text-white mb-8 max-w-2xl mx-auto">
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
