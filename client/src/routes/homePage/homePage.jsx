import SearchBar from "../../components/searchBar/SearchBar";

function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-6 bg-gray-50">
      {/* Text Section */}
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl font-bold text-gray-800 leading-tight">
          Find Real Estate & Get Your Dream Place
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo
          suscipit cum eius, iure est nulla animi consequatur facilis id
          pariatur fugit quos laudantium temporibus dolor ea repellat provident
          impedit!
        </p>
        <SearchBar />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800">16+</h1>
            <h2 className="text-sm text-gray-600">Years of Experience</h2>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800">200</h1>
            <h2 className="text-sm text-gray-600">Award Gained</h2>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800">2000+</h1>
            <h2 className="text-sm text-gray-600">Property Ready</h2>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <img
          src="/bg.png"
          alt="Real Estate Background"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
}

export default HomePage;
