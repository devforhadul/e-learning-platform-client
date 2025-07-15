import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../ui/button";
import banner from "../../assets/undraw_youtube-tutorial_xgp1.svg";
import { Link } from "react-router";

const BannerSection = ({ user }) => {
  return (
    <div className="h-[calc(100vh-73px)] flex flex-col md:flex-row items-center py-10 gap-6 md:gap-10">
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Continue your learning journey
        </h3>
        <p className="text-gray-600 mb-6">
          Access your courses, track your progress, and achieve your educational
          goals with our comprehensive learning platform.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          {user && (
            <Link to={"/dashboard"}>
              <Button>My Course</Button>
            </Link>
          )}
          <Link to={"/all-classes"}>
            <Button variant="outline">Explore Course</Button>
          </Link>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="flex-1 flex justify-center">
        <img
          src={banner}
          alt="Learning Banner"
          className="w-full max-w-[400px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default BannerSection;
