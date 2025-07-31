import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const AddClassForm = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  user,
  handleThumbnailUrl,
  watch
}) => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add a Class</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="w-full border px-3 py-2 rounded"
            placeholder="Class Title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">Title is required</p>
          )}
        </div>

        {/* Name (read-only) */}
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            value={user?.displayName}
            readOnly
            {...register("name")}
            className="w-full border px-3 py-2 rounded bg-gray-100"
          />
        </div>

        {/* Email (read-only) */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            value={user?.email}
            readOnly
            {...register("email")}
            className="w-full border px-3 py-2 rounded bg-gray-100"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            step="0.01"
            {...register("price", {
              required: true,
              min: 0,
              valueAsNumber: true,
            })}
            className="w-full border px-3 py-2 rounded"
            placeholder="Course Price"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">Valid price is required</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="w-full border px-3 py-2 rounded"
            rows={4}
            placeholder="Write Course Description..."
          />
          {errors.description && (
            <p className="text-red-500 text-sm">Description is required</p>
          )}
        </div>

        {/* thumbnailUrl URL */}
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="picture">Thumbnail Image</Label>
          <Input id="picture" type="file" onChange={handleThumbnailUrl}  />
          {watch("image") && (
            <img
              src={watch("image")}
              alt="Thumbnail preview"
              className="w-32 h-20 rounded object-cover mt-2"
            />
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 mt-5 rounded hover:bg-blue-700"
        >
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClassForm;
