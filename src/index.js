
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ItineraryProvider } from "./context/ItineraryContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ItineraryProvider>
      <App />
    </ItineraryProvider>
  </BrowserRouter>
);