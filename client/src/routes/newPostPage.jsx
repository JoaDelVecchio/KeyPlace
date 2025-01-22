function NewPostPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Form Section */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Add New Post
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <form className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Price */}
            <div className="space-y-2">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                id="price"
                name="price"
                type="number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label
                htmlFor="desc"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="desc"
                name="desc"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="bedroom"
                  className="block text-sm font-medium text-gray-700"
                >
                  Bedroom Number
                </label>
                <input
                  id="bedroom"
                  name="bedroom"
                  type="number"
                  min={1}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="rent">Rent</option>
                  <option value="buy">Buy</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="property"
                  className="block text-sm font-medium text-gray-700"
                >
                  Property
                </label>
                <select
                  id="property"
                  name="property"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                </select>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
            >
              Add
            </button>
          </form>
        </div>
      </div>

      {/* Side Container */}
      <div className="hidden lg:block lg:flex-1 bg-blue-100"></div>
    </div>
  );
}

export default NewPostPage;
