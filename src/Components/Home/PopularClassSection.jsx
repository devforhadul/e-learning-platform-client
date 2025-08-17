import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../ui/card";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router";

const PopularClassSection = ({ mostEnrollClass }) => {
  return (
    <div className="py-10 md:py-16 lg:py-20">
      <h3 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-4 md:mb-8">
        Top Enrolled Courses
      </h3>
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
            <Link to={`/course/${cls?._id}`}>
              <Card className={"px-5 hover:border  hover:border-green-500"}>
              <div>
                  <img
                    src={cls?.image}
                    alt={cls?.title}
                    className="w-full h-48 object-cover rounded-md sm:h-40 xs:h-32"
                  />
                  <p className="mt-2 text-lg font-semibold mb-2">
                    {cls?.title}
                  </p>
                  <h4 className="font-bold text-green-600">৳ {cls?.price}</h4>
                </div>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularClassSection;
