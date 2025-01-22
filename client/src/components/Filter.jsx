function Filter() {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md space-y-6">
      {/* Title */}
      <h1 className="text-xl font-semibold text-gray-800">
        Search results for <b className="text-gray-900">London</b>
      </h1>

      {/* Top Section */}
      <div className="space-y-4">
        <div className="flex flex-col">
          <label
            htmlFor="city"
            className="text-sm font-medium text-gray-600 mb-1"
          >
            Location
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Type Filter */}
        <div className="flex flex-col">
          <label
            htmlFor="type"
            className="text-sm font-medium text-gray-600 mb-1"
          >
            Type
          </label>
          <select
            name="type"
            id="type"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none"
          >
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        {/* Property Filter */}
        <div className="flex flex-col">
          <label
            htmlFor="property"
            className="text-sm font-medium text-gray-600 mb-1"
          >
            Property
          </label>
          <select
            name="property"
            id="property"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none"
          >
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>

        {/* Min Price Filter */}
        <div className="flex flex-col">
          <label
            htmlFor="minPrice"
            className="text-sm font-medium text-gray-600 mb-1"
          >
            Min Price
          </label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="Any"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none"
          />
        </div>

        {/* Max Price Filter */}
        <div className="flex flex-col">
          <label
            htmlFor="maxPrice"
            className="text-sm font-medium text-gray-600 mb-1"
          >
            Max Price
          </label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="Any"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none"
          />
        </div>

        {/* Bedroom Filter */}
        <div className="flex flex-col">
          <label
            htmlFor="bedroom"
            className="text-sm font-medium text-gray-600 mb-1"
          >
            Bedroom
          </label>
          <input
            type="number"
            id="bedroom"
            name="bedroom"
            placeholder="Any"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none"
          />
        </div>
      </div>

      {/* Search Button */}
      <div className="flex justify-center">
        <button className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition">
          <img src="/search.png" alt="Search Icon" className="w-5 h-5" />
          Search
        </button>
      </div>
    </div>
  );
}

export default Filter;
