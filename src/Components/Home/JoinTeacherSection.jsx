import React from "react";
import { Link } from "react-router";
import teach from "../../assets/undraw_math_ldpv.svg";

const JoinTeacherSection = () => {
  return (
    <div className="grid grid-cols-1 justify-center items-center md:grid-cols-2 gap-3 py-10 md:py-16 lg:py-20">
      <div className="flex justify-center py-10">
        <img src={teach} alt="" className="h-60" />
      </div>
      <div className="flex flex-col justify-center space-y-2">
        <h2 className="text-4xl font-semibold">Come teach with us</h2>
        <p className="text-base">
          Become an instructor and change lives — including your own
        </p>
        <Link to={"/teachon"}>
          <button className="px-4 py-2 bg-purple-700 text-white cursor-pointer">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JoinTeacherSection;
