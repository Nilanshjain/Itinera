"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PricingPage() {
  const features = {
    free: [
      "3 AI-generated itineraries per month",
      "Basic destination information",
      "Standard recommendations",
      "Email support",
    ],
    pro: [
      "Unlimited AI-generated itineraries",
      "Advanced destination insights",
      "Personalized recommendations",
      "Interactive maps",
      "Offline access",
      "Priority email support",
    ],
    business: [
      "Everything in Pro plan",
      "Team collaboration features",
      "Business travel optimization",
      "Expense tracking",
      "Custom branding",
      "Dedicated account manager",
      "24/7 priority support",
    ],
  }

  const faqs = [
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to your plan until the end of your billing period.",
    },
    {
      question: "How does the AI generate travel itineraries?",
      answer:
        "Our AI analyzes millions of data points including your preferences, travel trends, local attractions, reviews, and more to create personalized itineraries tailored to your specific needs.",
    },
    {
      question: "Is there a limit to how many trips I can plan?",
      answer:
        "Free users can create up to 3 itineraries per month. Pro and Business users have unlimited itinerary creation.",
    },
    {
      question: "Can I share my itineraries with friends and family?",
      answer:
        "Yes, all plans allow you to share your itineraries via a link. Pro and Business plans have additional collaboration features.",
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 14-day money-back guarantee if you're not satisfied with your subscription.",
    },
    {
      question: "How do I upgrade or downgrade my plan?",
      answer:
        "You can change your plan at any time from your account settings. Changes will take effect at the start of your next billing cycle.",
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
          <div className="container relative z-10 text-white text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl max-w-2xl mx-auto">Choose the perfect plan for your travel needs</p>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="container py-16">
          <div className="text-center mb-12">
            <Tabs defaultValue="monthly" className="w-full max-w-xs mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annual">Annual (Save 20%)</TabsTrigger>
              </TabsList>

              <TabsContent value="monthly" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  {/* Free Plan */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-900 rounded-xl border p-8 flex flex-col"
                  >
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-2">Free</h3>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">$0</span>
                        <span className="text-muted-foreground ml-1">/month</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">Perfect for occasional travelers</p>
                    </div>

                    <Button variant="outline" className="mb-6">
                      Get Started
                    </Button>

                    <div className="space-y-3 flex-grow">
                      {features.free.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Pro Plan */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white dark:bg-gray-900 rounded-xl border border-primary shadow-lg p-8 flex flex-col relative"
                  >
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                      POPULAR
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-2">Pro</h3>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">$9.99</span>
                        <span className="text-muted-foreground ml-1">/month</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">For frequent travelers and enthusiasts</p>
                    </div>

                    <Button className="mb-6">Get Started</Button>

                    <div className="space-y-3 flex-grow">
                      {features.pro.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Business Plan */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white dark:bg-gray-900 rounded-xl border p-8 flex flex-col"
                  >
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-2">Business</h3>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">$29.99</span>
                        <span className="text-muted-foreground ml-1">/month</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">For teams and business travelers</p>
                    </div>

                    <Button variant="outline" className="mb-6">
                      Contact Sales
                    </Button>

                    <div className="space-y-3 flex-grow">
                      {features.business.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="annual" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  {/* Free Plan */}
                  <div className="bg-white dark:bg-gray-900 rounded-xl border p-8 flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-2">Free</h3>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">$0</span>
                        <span className="text-muted-foreground ml-1">/year</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">Perfect for occasional travelers</p>
                    </div>

                    <Button variant="outline" className="mb-6">
                      Get Started
                    </Button>

                    <div className="space-y-3 flex-grow">
                      {features.free.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pro Plan */}
                  <div className="bg-white dark:bg-gray-900 rounded-xl border border-primary shadow-lg p-8 flex flex-col relative">
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                      POPULAR
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-2">Pro</h3>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">$95.88</span>
                        <span className="text-muted-foreground ml-1">/year</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">Save $23.88 compared to monthly</p>
                    </div>

                    <Button className="mb-6">Get Started</Button>

                    <div className="space-y-3 flex-grow">
                      {features.pro.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Business Plan */}
                  <div className="bg-white dark:bg-gray-900 rounded-xl border p-8 flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-2">Business</h3>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">$287.88</span>
                        <span className="text-muted-foreground ml-1">/year</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">Save $71.88 compared to monthly</p>
                    </div>

                    <Button variant="outline" className="mb-6">
                      Contact Sales
                    </Button>

                    <div className="space-y-3 flex-grow">
                      {features.business.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="container py-12">
          <h2 className="text-3xl font-bold text-center mb-12">Compare Plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center">Free</th>
                  <th className="py-4 px-6 text-center">Pro</th>
                  <th className="py-4 px-6 text-center">Business</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">AI-generated itineraries</td>
                  <td className="py-4 px-6 text-center">3/month</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Destination information</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center">Advanced</td>
                  <td className="py-4 px-6 text-center">Advanced</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Interactive maps</td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-5 w-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Offline access</td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-5 w-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Team collaboration</td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-5 w-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-5 w-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Support</td>
                  <td className="py-4 px-6 text-center">Email</td>
                  <td className="py-4 px-6 text-center">Priority email</td>
                  <td className="py-4 px-6 text-center">24/7 priority</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-muted/30 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg border"
                >
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="container py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Travel Experience?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who are already using TravelAI to create unforgettable journeys.
          </p>
          <Button size="lg">Get Started Free</Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

