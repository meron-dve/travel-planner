import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-2xl p-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4"
      >
        <input
          type="text"
          placeholder="Search destinations, flights, hotels..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition shadow-md"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;