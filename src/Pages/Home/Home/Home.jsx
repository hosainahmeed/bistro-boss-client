import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import Featured from "../Featured/Featured";
import MenuCard from "../MenuCardHolder/MenuCard";
import PopulorMenu from "../Popurlor_Menu/PopulorMenu";
import Testimonials from "../Review/Testimonials";
import ItemShocase from "./Shared/Chef-Show/ItemShocase";

function Home() {
  return (
    <div>
      <Banner />
      <Catagory />
      <ItemShocase />
      <PopulorMenu />
      <MenuCard />
      <Featured />
      <Testimonials />
    </div>
  );
}

export default Home;
