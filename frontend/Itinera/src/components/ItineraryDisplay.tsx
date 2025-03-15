import React, { useEffect, useState } from "react";

interface Activity {
  name: string;
  image: string;
  priceRange: string;
}

interface ItineraryDisplayProps {
  location: string | null;
  dateRange: [string | null, string | null];
  budget: number;
  interests: string[];
  travelStyle: string;
}

const ItineraryDisplay: React.FC<ItineraryDisplayProps> = ({
  location,
  dateRange,
  budget,
  interests,
  travelStyle,
}) => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [backgroundImage, setBackgroundImage] = useState<string>("");

  useEffect(() => {
    if (location) {
      // Fetch location-based image (Placeholder API - replace with actual API)
      setBackgroundImage(`https://source.unsplash.com/1600x900/?${location}`);
      
      // Fetch suggested activities based on location and interests (Mock data for now)
      setActivities([
        {
          name: "City Tour",
          image: "https://source.unsplash.com/400x300/?city",
          priceRange: "₹500 - ₹1500",
        },
        {
          name: "Local Cuisine Tasting",
          image: "https://source.unsplash.com/400x300/?food",
          priceRange: "₹1000 - ₹3000",
        },
        {
          name: "Adventure Sports",
          image: "https://source.unsplash.com/400x300/?adventure",
          priceRange: "₹2000 - ₹5000",
        },
      ]);
    }
  }, [location]);

  if (!location) return null;

  return (
    <div
      className="mt-6 p-6 shadow-lg rounded-lg text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})`, minHeight: "50vh" }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Your Itinerary</h2>
        <p className="text-lg font-semibold">📍 Destination: {location}</p>
        <p className="text-lg">📅 Date Range: {dateRange[0]} - {dateRange[1]}</p>
        <p className="text-lg">💰 Budget: ₹{budget.toLocaleString()}</p>
        <p className="text-lg">🎭 Travel Style: {travelStyle || "Not specified"}</p>
        <p className="text-lg">🎯 Interests: {interests.length > 0 ? interests.join(", ") : "None specified"}</p>
      </div>

      {/* Suggested Activities */}
      <div className="mt-6 bg-white bg-opacity-90 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800">Suggested Activities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {activities.map((activity, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-white">
              <img src={activity.image} alt={activity.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold">{activity.name}</h4>
                <p className="text-gray-700">💰 {activity.priceRange}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItineraryDisplay;
