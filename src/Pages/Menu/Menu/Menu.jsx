import { Helmet } from "react-helmet-async";
import MenuBanner from "./MenuBanner/MenuBanner";
import useMenu from "../../../hooks/useMenu";
import Favorite from "./Favorate/Favorite";
import dessertImage from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImage from "../../../assets/menu/pizza-bg.jpg"
import saladImage from "../../../assets/menu/salad-bg.jpg"
import soupImage from "../../../assets/menu/soup-bg.jpg"
function Menu() {
  const [menu] = useMenu();
  const dessert = menu.filter(item=>item.category === "dessert")
  const pizza = menu.filter(item=>item.category === "pizza")
  const salad = menu.filter(item=>item.category === "salad")
  const soup = menu.filter(item=>item.category === "soup")
  const offered = menu.filter(item=>item.category === "offered")
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <MenuBanner />
      {/* offered */}
      <Favorite items={offered}></Favorite>
      {/* dessert */}
      <Favorite bgImage={dessertImage} title="dessert" items={dessert}></Favorite>
      {/* pizza */}
      <Favorite bgImage={pizzaImage} title="pizza" items={pizza}></Favorite>
      {/* salad */}
      <Favorite bgImage={saladImage} title="salad" items={salad}></Favorite>
      {/* soup */}
      <Favorite bgImage={soupImage} title="soup" items={soup}></Favorite>
    </div>
  );
}

export default Menu;
