"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

export function SearchComponent() {
  const [searchMode, setSearchMode] = useState("text")
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [budget, setBudget] = useState([1000])

  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border">
        <Tabs defaultValue="text" onValueChange={setSearchMode}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Plan Your Journey</h2>
            <TabsList>
              <TabsTrigger value="text">Text Prompt</TabsTrigger>
              <TabsTrigger value="options">Options</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="text" className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Describe your ideal trip in a few sentences</p>
              <Input
                placeholder="E.g., I want a 7-day cultural trip to Japan in April with a medium budget..."
                className="h-12"
              />
            </div>
            <Button className="w-full">Generate Itinerary</Button>
          </TabsContent>

          <TabsContent value="options" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Travel Style</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adventure">Adventure</SelectItem>
                    <SelectItem value="relaxation">Relaxation</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                    <SelectItem value="foodie">Foodie</SelectItem>
                    <SelectItem value="budget">Budget</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Destination</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                    <SelectItem value="north-america">North America</SelectItem>
                    <SelectItem value="south-america">South America</SelectItem>
                    <SelectItem value="africa">Africa</SelectItem>
                    <SelectItem value="oceania">Oceania</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Start Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !startDate && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">End Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !endDate && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Budget (USD)</label>
                <span className="text-sm">${budget[0]}</span>
              </div>
              <Slider defaultValue={[1000]} max={10000} step={100} onValueChange={setBudget} />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>$500</span>
                <span>$10,000</span>
              </div>
            </div>

            <Button className="w-full">Generate Itinerary</Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

