import Slider from "../components/Slider";
import Map from "../components/Map";
import { singlePostData, userData } from "../lib/dummydata";

function SinglePage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Details Section */}
      <div className="flex-1 p-8 space-y-6">
        <div className="space-y-6">
          {/* Slider */}
          <Slider images={singlePostData.images} />
          {/* Post Information */}
          <div className="space-y-4 text-gray-700">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-gray-800">
                  {singlePostData.title}
                </h1>
                <div className="flex items-center gap-2 text-gray-600">
                  <img src="/pin.png" alt="Location" className="w-5 h-5" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="text-xl font-semibold text-green-600">
                  $ {singlePostData.price}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={userData.img}
                  alt="User"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <span className="font-medium text-gray-800">
                  {userData.name}
                </span>
              </div>
            </div>
            <p className="text-gray-600">{singlePostData.description}</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex-1 p-8 bg-white shadow-lg">
        <div className="space-y-6">
          {/* General Features */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-gray-800">General</p>
            <div className="space-y-4">
              {[
                {
                  img: "/utility.png",
                  label: "Utilities",
                  text: "Renter is responsible",
                },
                { img: "/pet.png", label: "Pet Policy", text: "Pets Allowed" },
                {
                  img: "/fee.png",
                  label: "Property Fees",
                  text: "Must have 3x the rent in total household income",
                },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <img
                    src={feature.img}
                    alt={feature.label}
                    className="w-8 h-8"
                  />
                  <div>
                    <span className="font-semibold">{feature.label}</span>
                    <p className="text-sm text-gray-600">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-gray-800">Sizes</p>
            <div className="flex gap-4">
              {[
                { img: "/size.png", label: "80 sqft" },
                { img: "/bed.png", label: "2 beds" },
                { img: "/bath.png", label: "1 bathroom" },
              ].map((size, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-3 border rounded-lg shadow-sm"
                >
                  <img src={size.img} alt={size.label} className="w-6 h-6" />
                  <span>{size.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby Places */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-gray-800">Nearby Places</p>
            <div className="flex flex-wrap gap-4">
              {[
                { img: "/school.png", label: "School", text: "250m away" },
                { img: "/pet.png", label: "Bus Stop", text: "100m away" },
                { img: "/fee.png", label: "Restaurant", text: "200m away" },
              ].map((place, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-3 border rounded-lg shadow-sm"
                >
                  <img src={place.img} alt={place.label} className="w-6 h-6" />
                  <div>
                    <span className="font-semibold">{place.label}</span>
                    <p className="text-sm text-gray-600">{place.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="space-y-4">
            <p className="text-lg font-semibold text-gray-800">Location</p>
            <div className="rounded-lg overflow-hidden shadow">
              <Map items={[singlePostData]} />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              <img src="/chat.png" alt="Message" className="w-5 h-5" />
              Send a Message
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">
              <img src="/save.png" alt="Save" className="w-5 h-5" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
