import React from "react";
 function  HotelCard({ hotel, onAdd }) {
    return (
        <div className="bg-white p-6 round-x1 shadow">
<h3 className="text-x1 font-bold">{hotel.name}</h3>
<p className="mt-2">${hotel.price}/night</p>
<button 
onClick={onAdd}
className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
>
    Add
</button>
        </div>
    );
 }
 export default HotelCard;