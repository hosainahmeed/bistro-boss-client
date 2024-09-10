import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../../../assets/home/01.jpg";
import image2 from "../../../assets/home/02.jpg";
import image3 from "../../../assets/home/03.png";
import image4 from "../../../assets/home/04.jpg";
import image5 from "../../../assets/home/05.png";
import image6 from "../../../assets/home/06.png";

function Banner() {
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop interval={3000} centerMode={true}>
        <div>
          <img src={image1} alt="Banner 1" />
        </div>
        <div>
          <img src={image2} alt="Banner 2" />
        </div>
        <div>
          <img src={image3} alt="Banner 3" />
        </div>
        <div>
          <img src={image4} alt="Banner 4" />
        </div>
        <div>
          <img src={image5} alt="Banner 5" />
        </div>
        <div>
          <img src={image6} alt="Banner 6" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
