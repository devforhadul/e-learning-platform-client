import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../ui/button";
//import banner from "../../assets/undraw_youtube-tutorial_xgp1.svg";
import { Link } from "react-router";
import { CheckCircle, Play } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const BannerSection = ({ user }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <div className="py-10 md:py-16 lg:py-20 flex flex-col md:flex-row items-center  gap-6 md:gap-10">
      {/* Left Section - Content */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Unlock Your Potential with <br />
          <span className=" text-sky-500">
            <Typewriter
              words={["EduPro", "New Skills", "Expert Teachers", "AI Learning"]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
              cursorColor="red"
            />
          </span>
          {/* <span className="text-primary">[Your Platform]</span> */}
        </h3>
        <p className="text-gray-600 mb-6">
          Master new skills with expert-led courses, interactive lessons, and
          personalized learning paths. Learn anytime, anywhere.
        </p>
        {/* Hero section CTA Button */}
        <div className="flex justify-center md:justify-start gap-4">
          {user ? (
            <Link to="/dashboard">
              <div>
                <Button className={'bg-Primary hover:bg-Primary/90 py-5 cursor-pointer'}>Continue Learning</Button>{" "}
              </div>
              {/* More action-driven for logged-in users */}
            </Link>
          ) : (
            <Link to="/signup">
              <Button className={'bg-Primary hover:bg-Primary/90 py-5 cursor-pointer'}>Browse All Courses</Button>
            </Link>
          )}
          {/* <Link to="/courses">
            <Button variant="outline" className={'border-Primary py-5 cursor-pointer'}></Button>{" "}
          
          </Link> */}
        </div>
        {/* Optional Trust Badges (uncomment if needed) */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          <span className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-4 h-4 text-green-500" /> 50+ courses
          </span>
          <span className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-4 h-4 text-green-500" /> Certified
            instructors
          </span>
        </div>
      </div>

      {/* Right Section - Video Thumbnail */}
      <div className="flex-1 flex justify-center relative group">
        <div
          className="w-full max-w-[500px] h-80 cursor-pointer relative rounded-md overflow-hidden shadow-xl border-4 border-blue-500 "
          onClick={() => setIsVideoOpen(true)}
        >
          {/* Video Thumbnail Image (fallback if video not loaded) */}
          <img
            src="https://img.youtube.com/vi/Nxw2j1-srVc/0.jpg"
            alt="Course preview video thumbnail"
            className="w-full h-full object-cover"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all group-hover:bg-black/40">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center border-4 border-blue-500">
              <Play className="w-6 h-6 text-white fill-white ml-1" />
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <div
              className="w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white cursor-pointer z-10"
                onClick={() => setIsVideoOpen(false)}
              >
                ✕
              </button>

              {/* Embedded Video Player */}
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  src="https://www.youtube.com/embed/Nxw2j1-srVc?autoplay=1"
                  className="w-full h-[300px] md:h-[500px] rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Platform Introduction Video"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BannerSection;
