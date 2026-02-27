import React from "react";
import { useNavigate } from "react-router-dom";
function DestinationDetails() {
   
    const navigate = useNavigate();
  return (
    <div className="p-10">
     <button onClick={() => navigate(-1)}
        className="mb-6 bg-gray-300 px-4 p-2 rounded">
Go Back
     </button>
     <h1 className="text-3x1 font-bold">
        Destination Detail </h1>
    </div>
  );
}
export default DestinationDetails;
