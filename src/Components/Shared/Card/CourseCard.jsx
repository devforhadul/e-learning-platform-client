import React from "react";
import { Link } from "react-router";

const ClassCard = ({ singleClass }) => {
  const { _id, title, price, description, image, instructor, totalEnroll } =
    singleClass || {};

  return (
    <div className="bg-white rounded-md border-1 overflow-hidden transition delay-150">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover relative" />

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

        {/* Instructor */}
        <p className="text-sm text-gray-500">
          Posted by:{" "}
          <span className="font-medium text-gray-700">{instructor?.name}</span>
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        {/* Enrollment and Price */}
        <div className="flex justify-between items-center text-sm mt-2">
          <span className="text-blue-600 font-semibold">৳ {price}</span>
          <span className="text-gray-500"> Enrolled: {totalEnroll}</span>
        </div>

        {/* Enroll Button */}
        <Link to={`/course/${_id}`}>
          <button className="w-full mt-3 bg-Primary hover:bg-Primary/90 text-white py-2 rounded-md  transition cursor-pointer">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClassCard;
