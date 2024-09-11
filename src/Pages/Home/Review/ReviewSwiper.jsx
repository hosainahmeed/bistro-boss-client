import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

import "@smastrom/react-rating/style.css";
function ReviewSwiper() {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="my-12">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {review.map((data) => (
          <SwiperSlide key={data._id}>
            <div className="px-12 md:p-28 flex items-center justify-center flex-col gap-4 text-center">
              <Rating style={{ maxWidth: 150 }} value={data.rating} readOnly />
              <FaQuoteLeft className="text-3xl" />
              <h2 className="text-xl">{data.details}</h2>
              <h2 className="text-2xl text-[#CD9003]">{data.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ReviewSwiper;
