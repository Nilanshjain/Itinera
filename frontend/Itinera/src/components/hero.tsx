import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-violet-100 to-white dark:from-violet-950 dark:to-background py-20 md:py-32">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
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
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pink-400/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl" />
    </div>
  )
}

