# 🌍 Travel Planner App

A responsive **Travel Planner** application built with **React**, **Tailwind CSS**, and **Context API**.

The app allows users to:

- Search for **destinations, flights, and hotels**
- Add items to a **travel itinerary**
- Calculate the **total cost** of the trip
- View a **summary of selected items** in a user-friendly interface

This project is perfect for learning **React state management**, **Context API**, **component-based architecture**, and **Tailwind CSS for responsive UI**.

---

## 🚀 Features

- **Search Functionality**: Quickly filter destinations, flights, and hotels
- **Add to Itinerary**: Click on items to add them to your personal travel plan
- **Total Cost Calculation**: Dynamic calculation of total trip cost
- **Responsive Design**: Works on mobile, tablet, and desktop using Tailwind CSS
- **Context API**: Global state management for itinerary items

---

## 🛠️ Technologies Used

- **React** (Functional Components & Hooks)
- **Tailwind CSS** for styling
- **React Context API** for global state
- **JavaScript (ES6+)**
- **Optional**: Amadeus API integration for real travel data

---

## 📂 Project Structure

src/
├── components/
│ ├── SearchBar.jsx
│ ├── DestinationCard.jsx
│ ├── FlightCard.jsx
│ ├── HotelCard.jsx
│ ├── Itinerary.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── DestinationDetails.jsx
│
├── services/
│ └── amadeusApi.js
│
├── context/
│ └── ItineraryContext.jsx
│
├── App.js
└── index.js

---

## ⚡ Installation

1. **Clone the repository**:

```bash
git clone https://github.com/yourusername/travel-planner.git
cd travel-planner
Install dependencies:

npm install

Install Tailwind CSS:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Configure Tailwind by editing tailwind.config.js:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};

Import Tailwind in index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

Run the app:

npm start
🔗 Usage

Enter a query in the search bar to filter destinations, flights, or hotels

Click Add to Itinerary to add any item

View the Itinerary Summary at the bottom with total cost

Remove items by clicking the ✕ button

📈 Future Improvements

Integrate Amadeus API for real-time flight and hotel data

Add user authentication

Store itinerary in localStorage or database

Add multi-day trip planning and itinerary timeline

Add filters by price, rating, and location



📌 Author

Name: Meron Tsegaye

GitHub: https://github.com/meron-dve

LinkedIn: https://www.linkedin.com/in/meron-tsegaye-313690354?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app

📜 License

This project is licensed under the MIT License.
```
