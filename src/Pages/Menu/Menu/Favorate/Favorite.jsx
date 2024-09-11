import MenuItem from "../../../Home/Home/Shared/MenuItem/MenuItem";
import AddToCart from "../../../../Components/Buttons/AddtoCart/AddToCart";
import ItemShocase from "../../../Home/Home/Shared/Chef-Show/ItemShocase";
import { Link } from "react-router-dom";

function Favorite({ items, title, bgImage }) {
  return (
    <div className="max-w-screen-xl mx-auto my-12 px-2 flex flex-col items-center gap-12">
      {title && <ItemShocase bgImage={bgImage} title={title}></ItemShocase>}
      <div className="space-y-8 grid md:grid-cols-2 gap-4">
        {items.map((items) => (
          <MenuItem key={items._id} items={items}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <AddToCart
          bgColor="white"
          textColor="black"
          btntext="ORDER YOUR FAVOURITE FOOD"
          borderBottom="black"
        ></AddToCart>
      </Link>
    </div>
  );
}

export default Favorite;
