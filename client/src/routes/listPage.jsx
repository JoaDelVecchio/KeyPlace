import { listData } from "../lib/dummydata";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Map from "../components/Map";

function ListPage() {
  const data = listData;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* List Container */}
      <div className="flex-1 p-6 space-y-6 bg-gray-50">
        <Filter />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 h-[600px] lg:h-auto lg:sticky top-0">
        <Map items={data} />
      </div>
    </div>
  );
}

export default ListPage;
