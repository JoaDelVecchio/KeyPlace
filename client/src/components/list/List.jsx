import Card from "../card/Card";
import { listData } from "../../lib/dummydata";

function List() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6 bg-gray-50">
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
