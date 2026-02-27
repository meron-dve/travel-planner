import React from "react";

function DestinationCard({ destination }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">

      {/* Image Section */}
      <div className="relative">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white text-blue-600 font-semibold px-4 py-1 rounded-full shadow-md">
          ${destination.price}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {destination.name}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {destination.description}
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition">
          View Details
        </button>
      </div>
    </div>
  );
}

export default DestinationCard;