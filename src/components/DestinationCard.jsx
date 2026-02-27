

import React from "react";
import { Link } from "react-router-dom";

function DestinationCard({ destination, onAdd }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold">{destination.name}</h3>
      <p>{destination.description}</p>
      <p className="font-semibold mt-2">${destination.price}</p>

      <div className="flex gap-4 mt-4">
        <button
          onClick={onAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>

        <Link
          to={`/destination/${destination.id}`}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default DestinationCard;