"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function PopularDestinations() {
  const destinations = [
    {
      name: "Santorini",
      country: "Greece",
      image: "/placeholder.svg?height=600&width=800",
      description: "Iconic white buildings with blue domes overlooking the Aegean Sea.",
    },
    {
      name: "Kyoto",
      country: "Japan",
      image: "/placeholder.svg?height=600&width=800",
      description: "Ancient temples, traditional gardens, and cherry blossoms.",
    },
    {
      name: "Bali",
      country: "Indonesia",
      image: "/placeholder.svg?height=600&width=800",
      description: "Tropical paradise with lush rice terraces and vibrant culture.",
    },
    {
      name: "Paris",
      country: "France",
      image: "/placeholder.svg?height=600&width=800",
      description: "The city of lights, romance, and iconic architecture.",
    },
    {
      name: "New York",
      country: "USA",
      image: "/placeholder.svg?height=600&width=800",
      description: "The Big Apple with its towering skyscrapers and diverse neighborhoods.",
    },
    {
      name: "Machu Picchu",
      country: "Peru",
      image: "/placeholder.svg?height=600&width=800",
      description: "Ancient Incan citadel set high in the Andes Mountains.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleDestinations = 3

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= destinations.length - visibleDestinations + 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? destinations.length - visibleDestinations : prevIndex - 1))
  }

  return (
    <div className="container py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Popular Destinations</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" onClick={prevSlide}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleDestinations)}%)` }}
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full md:w-1/3 flex-shrink-0 px-4"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={`${destination.name}, ${destination.country}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{destination.name}</h3>
                    <p className="text-sm">{destination.country}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground mb-4">{destination.description}</p>
                  <Button variant="outline" className="w-full">
                    Explore
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

