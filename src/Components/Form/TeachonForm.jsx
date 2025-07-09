import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";

const TeachonForm = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("📝 Submitted Form:", data);
    // Submit data to backend / Firestore here
    reset();
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Apply as a Teacher
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1 text-sm font-medium">Full Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full border rounded px-3 py-2 focus:outline-none"
            placeholder="Enter your full name"
            defaultValue={user?.displayName || ""}
          />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>

        {/* Email (read-only) */}
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            readOnly
            value={user?.email || ""}
            className="w-full border rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
            {...register("email")}
          />
        </div>

        {/* Profile Image (read-only) */}
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Profile Image</label>
          <img
            src={user?.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover border"
          />
        </div>

        {/* Experience Dropdown */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Experience Level
          </label>
          <select
            {...register("experience", {
              required: "Experience level is required",
            })}
            className="w-full border rounded px-3 py-2"
            defaultValue=""
          >
            <option value="" disabled>
              Select your experience
            </option>
            <option value="beginner">Beginner</option>
            <option value="mid-level">Mid-Level</option>
            <option value="experienced">Experienced</option>
          </select>
          {errors.experience && (
            <p className="text-red-500 text-xs">{errors.experience.message}</p>
          )}
        </div>

        {/* Title */}
        <div>
          <label className="block mb-1 text-sm font-medium">Title</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="w-full border rounded px-3 py-2"
            placeholder="e.g., Senior Web Instructor"
          />
          {errors.title && (
            <p className="text-red-500 text-xs">{errors.title.message}</p>
          )}
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block mb-1 text-sm font-medium">Category</label>
          <select
            {...register("category", { required: "Category is required" })}
            className="w-full border rounded px-3 py-2"
            defaultValue=""
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="web development">Web Development</option>
            <option value="digital marketing">Digital Marketing</option>
            <option value="graphic design">Graphic Design</option>
            <option value="data science">Data Science</option>
            <option value="cyber security">Cyber Security</option>
            <option value="mobile app development">
              Mobile App Development
            </option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-xs">{errors.category.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
          >
            Submit for Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeachonForm;
