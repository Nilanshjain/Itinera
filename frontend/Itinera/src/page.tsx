import { SearchComponent } from "@/components/search-component"
import { Features } from "@/components/features"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SearchComponent />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

