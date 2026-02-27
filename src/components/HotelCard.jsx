
import React, { useContext } from "react";
import { ItineraryContext } from "../context/ItineraryContext";

function HotelCard({ hotel }) {
  const { addHotel } = useContext(ItineraryContext);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h3 className="font-bold">{hotel.name}</h3>
      <p>${hotel.price} /night</p>

      <button
        onClick={() => addHotel(hotel)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl"
      >
        Book Hotel
      </button>

    </div>
  );
}

export default HotelCard;