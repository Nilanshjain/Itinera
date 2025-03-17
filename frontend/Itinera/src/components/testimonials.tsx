"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      text: "TravelAI created the perfect itinerary for my trip to Japan. It understood exactly what I was looking for and suggested places I never would have found on my own. Saved me hours of planning!",
    },
    {
      name: "Michael Chen",
      location: "Toronto, Canada",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      text: "I was skeptical about AI planning my vacation, but I'm completely impressed. The recommendations were spot-on and the day-by-day schedule was perfectly balanced between activities and relaxation.",
    },
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4,
      text: "As a frequent traveler, I've tried many planning tools, but TravelAI is by far the most intuitive. It adapts to my preferences and creates unique experiences every time.",
    },
    {
      name: "David Kim",
      location: "Seoul, South Korea",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      text: "The budget optimization feature is incredible! I was able to experience so much more on my trip to Europe without exceeding my spending limit. Highly recommended!",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <div className="bg-gradient-to-r from-violet-100 to-blue-100 dark:from-violet-950 dark:to-blue-950 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thousands of travelers have transformed their journeys with TravelAI
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="mr-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="italic">"{testimonial.text}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-background"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-background"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 mx-1 rounded-full ${index === currentIndex ? "bg-primary" : "bg-gray-300"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

