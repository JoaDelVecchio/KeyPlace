import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "./Pin";

function Map({ items }) {
  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[52.4797, -1.90269]}
        zoom={7}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map((item) => (
          <Pin item={item} key={item.id} />
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
