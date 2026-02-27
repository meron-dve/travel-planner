
import React from "react";

function FlightCard({ flight, onAdd }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4 flex justify-between">
      <div>
        <p className="font-bold">{flight.airline}</p>
        <p>${flight.price}</p>
      </div>
      <button
        onClick={onAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
}

export default FlightCard;