import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../ui/card";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router";

const PopularClassSection = ({ mostEnrollClass }) => {
  return (
    <div className="py-10">
      <h3 className="text-2xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Out Top Courses</h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2, 
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3, 
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3, 
            spaceBetween: 40,
          },
        }}
      >
        {mostEnrollClass?.map((cls) => (
          <SwiperSlide key={cls?._id}>
            <Link to={`/class/${cls?._id}`}>
              <Card className={"px-5"}>
                <img
                  src={cls?.image}
                  alt={cls?.title}
                  className="w-full h-48 object-cover rounded-md sm:h-40 xs:h-32"
                />
                <p className="mt-2 text-lg font-semibold ">{cls?.title}</p>
                <h4 className="font-bold text-green-600">৳ {cls?.price}</h4>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularClassSection;
