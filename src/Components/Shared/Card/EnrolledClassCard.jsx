import { Button } from "@/Components/ui/button";
import React from "react";
import { Link } from "react-router";

const EnrolledClassCard = ({ course }) => {
  const { _id, image, classTitle, instructor, paymentStatus } = course;



  return (
    <div className="flex items-center gap-4 p-4 rounded-lg border shadow-sm bg-white">
      {/* Course Image */}
      <img
        src={image}
        alt={classTitle}
        className="w-32 h-20 object-cover rounded-md"
      />

      {/* Info & Actions */}
      <div className="flex-1">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800">{classTitle}</h3>

        {/* Instructor Name */}
        <p className="text-sm text-gray-600 mt-1">By: {instructor?.name}</p>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
          <Link to={`/dashboard/my-classes/${_id}`}>
            <Button variant="outline">Continiue</Button>
          </Link>
          <Link to={"/"}>
            <Button variant="outline">Go Home</Button>
          </Link>
          {paymentStatus === "pending" && (
            <Link to={"/"}>
              <Button variant="outline" onClick={()=>alert("Coming Soon...")}>Pay Now</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrolledClassCard;
