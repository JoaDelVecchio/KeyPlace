import { useState } from "react";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg space-y-4">
      {/* Type Toggle */}
      <div className="flex space-x-4">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
              query.type === type
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Search Form */}
      <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Location Input */}
        <input
          type="text"
          name="location"
          placeholder="City Location"
          className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
        />

        {/* Min Price Input */}
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
        />

        {/* Max Price Input */}
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
        >
          <img src="/search.png" alt="Search Icon" className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
