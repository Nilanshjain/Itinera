import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, User } from "lucide-react"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Hidden Gems in Southeast Asia You Need to Visit",
      excerpt: "Discover the lesser-known but breathtaking destinations across Southeast Asia that most tourists miss.",
      image: "/placeholder.svg?height=600&width=800",
      date: "March 15, 2025",
      readTime: "8 min read",
      author: "Emma Rodriguez",
      category: "Destinations",
      location: "Southeast Asia",
    },
    {
      id: 2,
      title: "How AI is Revolutionizing the Way We Travel",
      excerpt:
        "From personalized itineraries to real-time translations, artificial intelligence is changing travel planning forever.",
      image: "/placeholder.svg?height=600&width=800",
      date: "March 10, 2025",
      readTime: "6 min read",
      author: "Michael Chen",
      category: "Technology",
      location: "Global",
    },
    {
      id: 3,
      title: "Budget-Friendly European Capitals: A Complete Guide",
      excerpt: "Experience the charm and culture of Europe's most beautiful capitals without breaking the bank.",
      image: "/placeholder.svg?height=600&width=800",
      date: "March 5, 2025",
      readTime: "10 min read",
      author: "Sophie Martin",
      category: "Budget Travel",
      location: "Europe",
    },
    {
      id: 4,
      title: "Sustainable Travel: Reducing Your Carbon Footprint",
      excerpt: "Practical tips and destinations for the environmentally conscious traveler.",
      image: "/placeholder.svg?height=600&width=800",
      date: "February 28, 2025",
      readTime: "7 min read",
      author: "David Johnson",
      category: "Sustainable Travel",
      location: "Global",
    },
    {
      id: 5,
      title: "The Ultimate Food Tour Through Japan",
      excerpt: "A culinary journey from Tokyo to Osaka, exploring Japan's diverse and delicious food scene.",
      image: "/placeholder.svg?height=600&width=800",
      date: "February 20, 2025",
      readTime: "9 min read",
      author: "Yuki Tanaka",
      category: "Food & Culture",
      location: "Japan",
    },
    {
      id: 6,
      title: "Solo Female Travel: Safety Tips and Top Destinations",
      excerpt: "Essential advice and recommended destinations for women traveling alone.",
      image: "/placeholder.svg?height=600&width=800",
      date: "February 15, 2025",
      readTime: "8 min read",
      author: "Alicia Garcia",
      category: "Solo Travel",
      location: "Global",
    },
  ]

  const categories = [
    "All Categories",
    "Destinations",
    "Technology",
    "Budget Travel",
    "Sustainable Travel",
    "Food & Culture",
    "Solo Travel",
    "Adventure",
    "Luxury",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">TravelAI Blog</h1>
            <p className="text-xl max-w-2xl">Travel insights, tips, and inspiration to fuel your wanderlust</p>
          </div>
        </div>

        {/* Categories */}
        <div className="container py-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Button key={index} variant={index === 0 ? "default" : "outline"} size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link to ={`/blog/${post.id}`} key={post.id} className="group">
                <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden border hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-2 py-1 rounded">
                      {post.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded">
                      {post.location}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <div className="flex items-center mr-4">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center mr-4">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button size="lg">Load More Articles</Button>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-primary/10 py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground mb-6">
                Get the latest travel tips, destination guides, and exclusive offers delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Enter your email" className="sm:flex-1" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

