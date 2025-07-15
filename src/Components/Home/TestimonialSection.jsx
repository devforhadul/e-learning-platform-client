import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../ui/card";

const TestimonialSection = ({ review }) => {
  

  return (
    <div className="py-10 md:py-16 lg:py-20">
      <h3 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Out Student Feedback
      </h3>
      <Swiper
        slidesPerView={1}
        //    breakpoints={{
        //       640: {
        //         slidesPerView: 2,
        //         spaceBetween: 20,
        //       },
        //       768: {
        //         slidesPerView: 3,
        //         spaceBetween: 30,
        //       },
        //       1024: {
        //         slidesPerView: 3,
        //         spaceBetween: 40,
        //       },
        //     }}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
      >
        {review?.map((r) => (
          <SwiperSlide key={r}>
            <Card className={"px-5"}>
              <div className="flex flex-col rounded-xl bg-transparent text-gray-700 shadow-none">
                <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 rounded-xl">
                  <img
                    src={
                      r?.userImage ||
                      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    }
                    alt="Tania Andrew"
                    className="relative inline-block h-[58px] w-[58px] rounded-full object-cover object-center"
                  />
                  <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                      <h5 className="text-xl font-semibold leading-snug text-blue-gray-900">
                        {r?.userName}
                      </h5>
                      <div className="flex items-center gap-0.5">
                        {[...Array(r?.rating)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-yellow-700"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-base font-light text-blue-gray-900">
                      Course: {r?.title}
                    </p>
                  </div>
                </div>
                <div className="p-0 mb-6">
                  <p className="text-base font-light leading-relaxed text-inherit">
                    "{r?.description}"
                  </p>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSection;
