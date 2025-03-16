import { Globe2, Sparkles, Clock, Wallet, Map, Smartphone } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Sparkles className="h-10 w-10 text-pink-500" />,
      title: "AI-Powered Recommendations",
      description:
        "Our advanced AI analyzes thousands of travel options to create personalized itineraries just for you.",
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-500" />,
      title: "Save Time Planning",
      description: "Create complete travel plans in seconds instead of spending hours researching and organizing.",
    },
    {
      icon: <Wallet className="h-10 w-10 text-green-500" />,
      title: "Budget Optimization",
      description: "Set your budget and let our AI find the best experiences without breaking the bank.",
    },
    {
      icon: <Globe2 className="h-10 w-10 text-purple-500" />,
      title: "Global Destinations",
      description: "Explore itineraries for any destination worldwide with local insights and hidden gems.",
    },
    {
      icon: <Map className="h-10 w-10 text-orange-500" />,
      title: "Interactive Maps",
      description: "View your entire itinerary on interactive maps with optimized routes between attractions.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-teal-500" />,
      title: "Mobile Access",
      description: "Access your travel plans on any device, even offline during your journey.",
    },
  ]

  return (
    <div className="container py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TravelAI?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our AI-powered platform makes travel planning effortless, personalized, and fun.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg border hover:shadow-md transition-shadow"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

