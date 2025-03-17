"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Globe2,
  Sparkles,
  Clock,
  Wallet,
  Map,
  Smartphone,
  Calendar,
  Compass,
  Briefcase,
  Zap,
  Shield,
  Users,
} from "lucide-react"
import { motion } from "framer-motion"

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: <Sparkles className="h-12 w-12 text-pink-500" />,
      title: "AI-Powered Recommendations",
      description:
        "Our advanced AI analyzes thousands of travel options to create personalized itineraries just for you, considering your preferences, past trips, and travel style.",
    },
    {
      icon: <Clock className="h-12 w-12 text-blue-500" />,
      title: "Save Time Planning",
      description:
        "Create complete travel plans in seconds instead of spending hours researching and organizing. Our AI handles the heavy lifting so you can focus on enjoying your trip.",
    },
    {
      icon: <Wallet className="h-12 w-12 text-green-500" />,
      title: "Budget Optimization",
      description:
        "Set your budget and let our AI find the best experiences without breaking the bank. Get the most value from your travel budget with smart recommendations.",
    },
    {
      icon: <Globe2 className="h-12 w-12 text-purple-500" />,
      title: "Global Destinations",
      description:
        "Explore itineraries for any destination worldwide with local insights and hidden gems. Our database covers over 10,000 destinations across 195 countries.",
    },
    {
      icon: <Map className="h-12 w-12 text-orange-500" />,
      title: "Interactive Maps",
      description:
        "View your entire itinerary on interactive maps with optimized routes between attractions. Save time with efficient navigation and location-based recommendations.",
    },
    {
      icon: <Smartphone className="h-12 w-12 text-teal-500" />,
      title: "Mobile Access",
      description:
        "Access your travel plans on any device, even offline during your journey. Sync across all your devices and get real-time updates and notifications.",
    },
  ]

  const additionalFeatures = [
    {
      icon: <Calendar className="h-8 w-8 text-indigo-500" />,
      title: "Smart Scheduling",
      description: "Optimizes your daily activities based on opening hours, travel time, and weather forecasts.",
    },
    {
      icon: <Compass className="h-8 w-8 text-amber-500" />,
      title: "Local Experiences",
      description: "Discover authentic local experiences that most tourists miss, curated by our AI and local experts.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-rose-500" />,
      title: "Business Travel Mode",
      description: "Special features for business travelers to balance work commitments with leisure activities.",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Real-time Updates",
      description: "Get instant notifications about flight changes, weather alerts, or attraction closures.",
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-500" />,
      title: "Safety Information",
      description: "Access up-to-date safety information and travel advisories for your destination.",
    },
    {
      icon: <Users className="h-8 w-8 text-cyan-500" />,
      title: "Group Planning",
      description: "Collaborate with friends and family to plan trips together with shared itineraries.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center py-24"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="container relative z-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h1>
            <p className="text-xl max-w-2xl">
              Discover how TravelAI transforms your travel planning experience with cutting-edge AI technology
            </p>
          </div>
        </div>

        {/* Main Features */}
        <div className="container py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform makes travel planning effortless, personalized, and fun with these innovative
              features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg border hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feature Showcase */}
        <div className="bg-gradient-to-r from-violet-100 to-blue-100 dark:from-violet-950 dark:to-blue-950 py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">AI-Powered Itinerary Creation</h2>
                <p className="text-lg mb-6">
                  Our advanced AI engine analyzes millions of data points to create the perfect travel plan tailored to
                  your preferences, budget, and travel style.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Natural language processing understands your travel preferences</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Machine learning algorithms improve recommendations over time</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Real-time optimization based on weather, events, and local conditions</span>
                  </li>
                </ul>
                <Button size="lg" className="mt-8">
                  Try It Now
                </Button>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/placeholder.svg?height=800&width=1000"
                    alt="AI Itinerary Creation"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg border">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span className="font-medium">AI-powered suggestions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">More Powerful Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the additional capabilities that make TravelAI the ultimate travel planning companion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg border"
              >
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Travel Experience?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of travelers who are already using TravelAI to create unforgettable journeys.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Learn More
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Get Started Free
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

