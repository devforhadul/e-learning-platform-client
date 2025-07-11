import React from "react";

const TeacherReqTable = ({ teachData, updateStatus }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border text-sm">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Experience</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {teachData.map((req) => (
            <tr key={req._id} className="border-t">
              <td className="px-4 py-2">
                <img
                  src={req.image}
                  alt={req.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </td>
              <td className="px-4 py-2 capitalize">{req.name}</td>
              <td className="px-4 py-2 capitalize">{req.experience}</td>
              <td className="px-4 py-2">{req.title}</td>
              <td className="px-4 py-2 capitalize">{req.category}</td>
              <td className="px-4 py-2 capitalize text-yellow-700">
                {req.status}
              </td>
              <td className="px-4 py-2 space-x-2">
                <button
                  onClick={() => updateStatus(req._id, "approved", req?.email)}
                  className={`bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 ${
                    req?.status === "rejected"
                      ? "bg-gray-400 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={req.status === "rejected"}
                >
                  Approve
                </button>
                <button
                  onClick={() => updateStatus(req._id, "rejected", req?.email)}
                  className={`bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ${
                    req?.status === "rejected"
                      ? "bg-gray-400 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={req.status === "rejected"}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
          {teachData.length === 0 && (
            <tr>
              <td colSpan={7} className="text-center py-4 text-gray-500">
                No teacher requests found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherReqTable;
