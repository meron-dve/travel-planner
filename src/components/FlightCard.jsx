
import React, { useContext } from "react";
import { ItineraryContext } from "../context/ItineraryContext";

function FlightCard({ flight }) {
  const { addFlight } = useContext(ItineraryContext);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h3 className="font-semibold">{flight.airline}</h3>
      <p>{flight.departure} → {flight.arrival}</p>
      <p className="text-blue-600 font-bold">${flight.price}</p>

      <button
        onClick={() => addFlight(flight)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl"
      >
        Book Flight
      </button>

    </div>
  );
}

export default FlightCard;