
import React, { createContext, useState } from "react";

export const ItineraryContext = createContext();

export const ItineraryProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prev) => [...prev, item]);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.uniqueId !== id));
  };

  return (
    <ItineraryContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </ItineraryContext.Provider>
  );
};