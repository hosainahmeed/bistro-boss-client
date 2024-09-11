import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import Featured from "../Featured/Featured";
import MenuCard from "../MenuCardHolder/MenuCard";
import PopulorMenu from "../Popurlor_Menu/PopulorMenu";
import Testimonials from "../Review/Testimonials";
import ItemShocase from "./Shared/Chef-Show/ItemShocase";
import chefService from "../../../assets/home/chef-service.jpg";
function Home() {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Catagory />
      <ItemShocase
        title="Pizza"
        chefsubHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        bgImage={chefService}
        centerbgColor="white"
      ></ItemShocase>
      <PopulorMenu />
      <MenuCard />
      <Featured />
      <Testimonials />
    </div>
  );
}

export default Home;
