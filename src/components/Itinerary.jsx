import React, { useContext } from "react";
import { ItineraryContext } from "../context/ItineraryContext";

function Itinerary() {
  const { itinerary } = useContext(ItineraryContext);

  const total =
    (itinerary.flight?.price || 0) +
    (itinerary.hotel?.price || 0) +
    (itinerary.destination?.price || 0);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Your Itinerary
      </h2>

      {/* Destination */}
      {itinerary.destination && (
        <div className="border-b pb-4">
          <h3 className="font-semibold text-gray-800">
            🌍 Destination
          </h3>
          <p className="text-gray-600">
            {itinerary.destination.name}
          </p>
        </div>
      )}

      {/* Flight */}
      {itinerary.flight && (
        <div className="border-b pb-4">
          <h3 className="font-semibold text-gray-800">
            ✈️ Flight
          </h3>
          <p className="text-gray-600">
            {itinerary.flight.airline} ({itinerary.flight.departure} → {itinerary.flight.arrival})
          </p>
          <p className="text-blue-600 font-medium">
            ${itinerary.flight.price}
          </p>
        </div>
      )}

      {/* Hotel */}
      {itinerary.hotel && (
        <div className="border-b pb-4">
          <h3 className="font-semibold text-gray-800">
            🏨 Hotel
          </h3>
          <p className="text-gray-600">
            {itinerary.hotel.name}
          </p>
          <p className="text-blue-600 font-medium">
            ${itinerary.hotel.price}
          </p>
        </div>
      )}

      {/* Total */}
      <div className="flex justify-between items-center pt-4">
        <span className="text-xl font-bold text-gray-900">
          Total
        </span>
        <span className="text-2xl font-bold text-blue-600">
          ${total}
        </span>
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition shadow-md">
        Confirm Booking
      </button>

    </div>
  );
}

export default Itinerary;