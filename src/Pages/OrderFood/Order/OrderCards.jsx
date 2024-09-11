import Card from "../../../Components/Card/Card";

function OrderCards({items}) {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12 my-12 px-4">
        {items.map((item) => (
          <Card key={item._id} items={item}></Card>
        ))}
      </div>
    </div>
  );
}

export default OrderCards;
