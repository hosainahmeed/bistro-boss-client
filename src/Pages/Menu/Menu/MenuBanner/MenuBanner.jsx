import PageBanner from "../../../Home/Home/Shared/Chef-Show/PageBanner";
import bannerImage from "../../../../assets/menu/banner3.jpg";
import { Parallax } from "react-parallax";
function MenuBanner() {
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={bannerImage}
        bgImageAlt="the menu"
        strength={-200}
      >
        <PageBanner
          heading="OUR MENU"
          sub_heading="would you like to try dish?"
        ></PageBanner>
      </Parallax>
    </div>
  );
}

export default MenuBanner;
