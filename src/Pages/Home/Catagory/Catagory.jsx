import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import silder1 from "../../../assets/home/slide1.jpg";
import silder2 from "../../../assets/home/slide2.jpg";
import silder3 from "../../../assets/home/slide3.jpg";
import silder4 from "../../../assets/home/slide4.jpg";
import silder5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const shopTiming = {
  open: "8:00 AM",
  close: "10:00 PM",
};

const slidesData = [
  { image: silder1, title: "Salad" },
  { image: silder2, title: "Pasta" },
  { image: silder3, title: "Pizza" },
  { image: silder4, title: "Burger" },
  { image: silder5, title: "Salad" },
];

function Catagory() {
  return (
    <section className="max-w-screen-xl mx-auto my-4">
      <SectionTitle
        subheading={`From ${shopTiming.open} to ${shopTiming.close}`}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative p-2 h-72">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover brightness-90"
              />
              <h2 className="absolute inset-x-0 bottom-4 text-3xl md:text-3xl lg:text-4xl text-white font-cinzel uppercase text-center">
                {slide.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Catagory;
