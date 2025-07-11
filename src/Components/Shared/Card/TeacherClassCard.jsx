import TeachClassUpdate from "@/Components/Modal/TeachClassUpdate";
import React, { useState } from "react";

const TeacherClassCard = ({ cls, onDelete, onView }) => {
  const { title, instructor, image, price, description, status } = cls;

  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  // const [updateData, setUpdateData] = useState({});

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row gap-4 p-4 border">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full md:w-48 h-40 object-cover rounded"
      />

      {/* Details */}
      <div className="flex-1 space-y-2">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>

        <div className="text-sm text-gray-600">
          <p>
            <span className="font-medium">Instructor:</span> {instructor?.name}
          </p>
          <p>
            <span className="font-medium">Email:</span> {instructor?.email}
          </p>
        </div>

        <p className="text-gray-700 text-sm">{description}</p>

        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-semibold">৳ {price}</span>
          <span
            className={`px-2 py-1 text-xs rounded-full capitalize font-semibold ${
              status === "approved"
                ? "bg-green-100 text-green-700"
                : status === "rejected"
                ? "bg-red-100 text-red-600"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {status}
          </span>
        </div>

        {/* Buttons */}
        <div className="pt-2 flex flex-wrap gap-2">
          <button
            onClick={() => setUpdateModalOpen(true)}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            Update
          </button>
          <TeachClassUpdate open={updateModalOpen} onOpenChange={setUpdateModalOpen} cls={cls} />
          <button
            onClick={() => onDelete(cls._id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
          <button
            disabled={status !== "accepted"}
            onClick={() => onView(cls)}
            className={`${status === "accepted" && "bg-green-500"} bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400 ${status == "accepted" || "cursor-not-allowed"}`}
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherClassCard;
