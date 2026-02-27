import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ItineraryProvider } from "./context/ItineraryContext";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ItineraryProvider>
    <App />
  </ItineraryProvider>
);