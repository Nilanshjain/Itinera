"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, MapPin, Clock, Plus, Trash2 } from "lucide-react"
import { motion } from "framer-motion"
import { useAuthStore } from "@/store/useAuthstore"

interface Itinerary {
  id: string
  title: string
  destination: string
  dates: string
  duration: string
  image: string
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { authUser, checkAuth } = useAuthStore();

  // Sample itineraries data
  const [savedItineraries, setSavedItineraries] = useState<Itinerary[]>([
    {
      id: "1",
      title: "Tokyo Adventure",
      destination: "Tokyo, Japan",
      dates: "Apr 10 - Apr 17, 2025",
      duration: "7 days",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "2",
      title: "Paris Getaway",
      destination: "Paris, France",
      dates: "May 5 - May 12, 2025",
      duration: "7 days",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "3",
      title: "New York City Trip",
      destination: "New York, USA",
      dates: "Jun 15 - Jun 20, 2025",
      duration: "5 days",
      image: "/placeholder.svg?height=600&width=800",
    },
  ])

  useEffect(() => {
    const verifyAuth = async () => {
      await checkAuth();
      if (!authUser) {
        navigate("/sign-in");
      }
    };
    verifyAuth();
  }, [authUser, checkAuth, navigate]);

  const deleteItinerary = (id: string) => {
    setSavedItineraries(savedItineraries.filter((itinerary) => itinerary.id !== id))
  }

  if (!authUser) {
    return null // Will redirect to sign-in
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-violet-100 to-blue-100 dark:from-violet-950 dark:to-blue-950 py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back, {authUser.name}!</h1>
                <p className="text-muted-foreground">Manage your travel plans and create new adventures</p>
              </div>
              <Button className="mt-4 md:mt-0" onClick={() => navigate("/")}>
                <Plus className="mr-2 h-4 w-4" />
                Create New Itinerary
              </Button>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="container py-12">
          <Tabs defaultValue="saved">
            <TabsList className="mb-8">
              <TabsTrigger value="saved">Saved Itineraries</TabsTrigger>
              <TabsTrigger value="recent">Recent Searches</TabsTrigger>
              <TabsTrigger value="favorites">Favorite Destinations</TabsTrigger>
            </TabsList>

            <TabsContent value="saved">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedItineraries.map((itinerary, index) => (
                  <motion.div
                    key={itinerary.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-900 rounded-lg border overflow-hidden group"
                  >
                    <div className="relative h-48">
                      <img
                        src={itinerary.image || "/placeholder.svg"}
                        alt={itinerary.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">{itinerary.title}</h3>
                        <div className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{itinerary.destination}</span>
                        </div>
                      </div>
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => deleteItinerary(itinerary.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <div className="flex items-center mr-4">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {itinerary.dates}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {itinerary.duration}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" className="flex-1">
                          Edit
                        </Button>
                        <Button className="flex-1">View</Button>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Create new itinerary card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: savedItineraries.length * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-lg border border-dashed flex flex-col items-center justify-center p-8 h-full min-h-[300px]"
                >
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Plus className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Create New Itinerary</h3>
                  <p className="text-muted-foreground text-center mb-4">Start planning your next adventure</p>
                  <Button onClick={() => navigate("/")}>Get Started</Button>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="recent">
              <div className="bg-white dark:bg-gray-900 rounded-lg border p-6">
                <p className="text-muted-foreground">Your recent searches will appear here.</p>
              </div>
            </TabsContent>

            <TabsContent value="favorites">
              <div className="bg-white dark:bg-gray-900 rounded-lg border p-6">
                <p className="text-muted-foreground">Your favorite destinations will appear here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

