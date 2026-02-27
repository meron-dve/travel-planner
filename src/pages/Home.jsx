
import React, { useState, useContext } from "react";
import SearchBar from "../components/SearchBar";
import DestinationCard from "../components/DestinationCard";
import FlightCard from "../components/FlightCard";
import HotelCard from "../components/HotelCard";
import Itinerary from "../components/Itinerary";
import { ItineraryContext } from "../context/ItineraryContext";

function Home() {
  const { addItem } = useContext(ItineraryContext);
  const [query, setQuery] = useState("");

  const destinations = [
    { id: 1, name: "Paris", description: "City of love", price: 1200 },
    { id: 2, name: "Dubai", description: "Luxury city", price: 1500 },
  ];

  const flights = [
    { id: 1, airline: "Ethiopian Airlines", price: 420 },
    { id: 2, airline: "Qatar Airways", price: 890 },
  ];

  const hotels = [
    { id: 1, name: "Hilton Dubai", price: 220 },
    { id: 2, name: "Paris Luxury Stay", price: 310 },
  ];

 const filteredDestinations = destinations.filter((d) =>
  (d.name || "").toLowerCase().includes((query || "").toLowerCase())
);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Travel Planner ✈️
      </h1>

      <SearchBar onSearch={setQuery} />

      <h2 className="text-2xl font-bold mt-8 mb-4">Destinations</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {filteredDestinations.map((d) => (
          <DestinationCard
            key={d.id}
            destination={d}
            onAdd={() =>
              addItem({ ...d, uniqueId: Date.now() + Math.random() })
            }
          />
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Flights</h2>
      {flights.map((f) => (
        <FlightCard
          key={f.id}
          flight={f}
          onAdd={() =>
            addItem({ ...f, uniqueId: Date.now() + Math.random() })
          }
        />
      ))}

      <h2 className="text-2xl font-bold mt-10 mb-4">Hotels</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {hotels.map((h) => (
          <HotelCard
            key={h.id}
            hotel={h}
            onAdd={() =>
              addItem({ ...h, uniqueId: Date.now() + Math.random() })
            }
          />
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4">Itinerary</h2>
      <Itinerary />
    </div>
  );
}

export default Home;