import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <Link to={`/${item.id}`} className="block overflow-hidden rounded-lg">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>

      {/* Text Content */}
      <div className="flex flex-col gap-2">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 hover:text-black transition-colors duration-300">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>

        {/* Address */}
        <p className="flex items-center gap-2 text-gray-500">
          <img src="/pin.png" alt="Location" className="w-4 h-4" />
          <span>{item.address}</span>
        </p>

        {/* Price */}
        <p className="text-lg font-medium text-gray-700">${item.price}</p>

        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-4">
          {/* Features */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <img src="/bed.png" alt="Bedroom" className="w-5 h-5" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <img src="/bath.png" alt="Bathroom" className="w-5 h-5" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex gap-4">
            <div className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
              <img src="/save.png" alt="Save" className="w-5 h-5" />
            </div>
            <div className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
              <img src="/chat.png" alt="Chat" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
