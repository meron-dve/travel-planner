import React, { createContext, useState } from "react";

export const ItineraryContext = createContext({
items:[],
addItem: () => {},
removeItem: () => {},
});
export const ItineraryProvider = ({ children }) => {
  const [itinerary, setItinerary] = useState({
    destination: null,
    flight: null,
    hotel: null,
  });

  const addDestination = (destination) => {
    setItinerary((prev) => ({ ...prev, destination }));
  };

  const addFlight = (flight) => {
    setItinerary((prev) => ({ ...prev, flight }));
  };

  const addHotel = (hotel) => {
    setItinerary((prev) => ({ ...prev, hotel }));
  };

  return (
    <ItineraryContext.Provider
      value={{
        itinerary,
        addDestination,
        addFlight,
        addHotel,
      }}
    >
      {children}
    </ItineraryContext.Provider>
  );
};