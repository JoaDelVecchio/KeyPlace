import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
          {/* Image Section */}
          <img
            src={item.img}
            alt={item.title}
            className="w-16 h-12 rounded-lg object-cover"
          />

          {/* Text Section */}
          <div className="flex flex-col gap-1">
            <Link
              to={`/${item.id}`}
              className="text-sm font-semibold text-blue-500 hover:underline"
            >
              {item.title}
            </Link>
            <span className="text-sm text-gray-600">
              {item.bedroom} bedroom
            </span>
            <b className="text-md font-medium text-gray-800">${item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
