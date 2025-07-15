import React from "react";
import Container from "../Shared/Container";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";

const BannerSection = () => {
  return (
    <div>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/Jj4RKhNJ/IMG-5821.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/Jj4RKhNJ/IMG-5821.webp" alt="" /></SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide> */}
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default BannerSection;
