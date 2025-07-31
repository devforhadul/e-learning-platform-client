import React from "react";

const AdminAllClassTable = ({ allClass, updateStatus }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left border">
        <thead className="bg-gray-100 text-gray-700 uppercase">
          <tr>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allClass.map((cls) => (
            <tr key={cls._id} className="border-t">
              {/* Image */}
              <td className="px-4 py-2">
                <img
                  src={cls.image}
                  alt={cls.title}
                  className="w-14 h-14 object-cover rounded"
                />
              </td>

              {/* Title */}
              <td className="px-4 py-2 font-medium text-gray-800">
                {cls.title}
              </td>

              {/* Email */}
              <td className="px-4 py-2 text-gray-600">
                {cls.instructor?.email}
              </td>

              {/* Short Description */}
              <td className="px-4 py-2 text-gray-600 line-clamp-2 max-w-xs">
                {cls.description}
              </td>

              {/* Status/Progress */}
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full capitalize ${
                    cls.status === "approved"
                      ? "bg-green-100 text-green-700"
                      : cls.status === "rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {cls.status}
                </span>
              </td>

              {/* Action Buttons */}
              <td className="flex flex-col  gap-2 px-4 py-2">
                <button
                  onClick={() => updateStatus(cls._id, "approved")}
                  disabled={cls.status === "approved"}
                  className={`px-3 py-1 text-sm rounded ${
                    cls.status === "approved"
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  Approve
                </button>
                <button
                  onClick={() => updateStatus(cls._id, "rejected")}
                  disabled={cls.status === "rejected"}
                  className={`px-3 py-1 text-sm rounded ${
                    cls.status === "rejected"
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-red-500 text-white hover:bg-red-600"
                  }`}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {allClass.length === 0 && (
        <p className="text-center mt-4 text-gray-500">No classes found.</p>
      )}
    </div>
  );
};

export default AdminAllClassTable;
