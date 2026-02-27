
import React, { useState, useContext } from "react";
import SearchBar from "./components/SearchBar";
import DestinationCard from "./components/DestinationCard";
import FlightCard from "./components/FlightCard";
import HotelCard from "./components/HotelCard";
import Itinerary from "./components/Itinerary";
import { ItineraryContext } from "./context/ItineraryContext";

function App() {
  const { items, addItem } = useContext(ItineraryContext);

  const [query, setQuery] = useState("");

  // Dummy data for testing
  const destinations = [
    {
      id: 1,
      name: "Paris",
      price: 1200,
      description: "City of love and stunning architecture",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
      id: 2,
      name: "Dubai",
      price: 1500,
      description: "Luxury, skyscrapers, and desert adventures await",
      image: "https://images.unsplash.com/photo-1498496294664-d9372eb521f3",
    },
  ];

  const flights = [
    {
      id: 1,
      airline: "Ethiopian Airlines",
      departure: "ADD",
      arrival: "DXB",
      duration: "4h 30m",
      price: 420,
    },
    {
      id: 2,
      airline: "Qatar Airways",
      departure: "ADD",
      arrival: "CDG",
      duration: "7h 50m",
      price: 890,
    },
  ];

  const hotels = [
    {
      id: 1,
      name: "Hilton Dubai",
      location: "Dubai Marina",
      rating: 4.8,
      price: 220,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    {
      id: 2,
      name: "Paris Luxury Stay",
      location: "Central Paris",
      rating: 4.6,
      price: 310,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    },
  ];

  // Search filter (just by name for demo)
  const filteredDestinations = destinations.filter((d) =>
    d.name.toLowerCase().includes(query.toLowerCase())
  );

  const filteredFlights = flights.filter((f) =>
    f.airline.toLowerCase().includes(query.toLowerCase())
  );

  const filteredHotels = hotels.filter((h) =>
    h.name.toLowerCase().includes(query.toLowerCase())
  );

  // Total cost from itinerary items
  const totalCost = (items || []).reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-8 shadow-lg">
        <h1 className="text-center text-4xl font-bold">Travel Planner ✈️</h1>
      </header>

      <main className="container mx-auto px-6 py-10 space-y-12">
        {/* Search Bar */}
        <SearchBar onSearch={(q) => setQuery(q)} />

        {/* Destinations */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Destinations
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDestinations.map((d) => (
              <DestinationCard
                key={d.id}
                destination={d}
                onSelect={() => addItem(d)}
              />
            ))}
          </div>
        </section>

        {/* Flights */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Flights</h2>
          <div className="space-y-6">
            {filteredFlights.map((f) => (
              <FlightCard
                key={f.id}
                flight={f}
                onSelect={() => addItem(f)}
              />
            ))}
          </div>
        </section>

        {/* Hotels */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Hotels</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredHotels.map((h) => (
              <HotelCard key={h.id} hotel={h} onSelect={() => addItem(h)} />
            ))}
          </div>
        </section>

        {/* Itinerary Summary */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Itinerary Summary
          </h2>
          <Itinerary />
          <p className="mt-4 text-lg font-semibold">
            Total Cost: <span className="text-blue-600">${totalCost}</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;