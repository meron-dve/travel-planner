
import React, { useContext } from "react";
import { ItineraryContext } from "../context/ItineraryContext";

function Itinerary() {
  const { items, removeItem } = useContext(ItineraryContext);

  const total = items.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      {items.length === 0 && <p>No items selected.</p>}

      {items.map((item) => (
        <div
          key={item.uniqueId}
          className="flex justify-between border-b py-2"
        >
          <p>{item.name || item.airline}</p>
          <div className="flex gap-4">
            <p>${item.price}</p>
            <button
              onClick={() => removeItem(item.uniqueId)}
              className="text-red-500"
            >
              ✕
            </button>
          </div>
        </div>
      ))}

      {items.length > 0 && (
        <div className="mt-4 font-bold">Total: ${total}</div>
      )}
    </div>
  );
}

export default Itinerary;