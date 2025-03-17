
import { Route, Routes } from "react-router-dom"
import Blog from "./pages/blog"
import PricingPage from "./pages/pricing"
import FeaturesPage from "./pages/features"
import GetStarted from "./pages/get-started"
import SignIn from "./pages/sign-in"
import Dashboard from "./pages/dashboard"
import HomePage from "./pages/home"
import ItineraryView from "./pages/itinerary-view"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/itinerary/view" element={<ItineraryView />} />
      </Routes>
    </div>
  )
}

