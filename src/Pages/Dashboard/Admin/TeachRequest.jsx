import axios from "axios";
import { Confirm, Notify } from "notiflix";
import React, { useEffect, useState } from "react";

const TeachRequest = () => {
  const [teachData, setTeachData] = useState([]);

  const fetchTeachData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/teach-req`);
      setTeachData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTeachData();
  }, []);

  const updateStatus = async (reqId, status, email) => {
    Confirm.show(
      "Teach Status Confirmation",
      "Are you sure?",
      "Yes",
      "NO",
      async () => {
        try {
          const res = await axios.patch(
            `${import.meta.env.VITE_API_URL}/teach-req`,
            { reqId, status, email  }
          );
          Notify.success("Status Update successfully");
          fetchTeachData();
        } catch (error) {
          console.log(error);
        }
      },
      () => {}
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Teacher Requests</h2>

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
                  
                    onClick={() => updateStatus(req._id, "approved", req.email)}
                    className={`bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 ${req?.status === 'rejected' ? 'bg-gray-400 cursor-not-allowed' : ''}`}
                    disabled={req.status === "rejected"}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateStatus(req._id, "rejected")}
                    className={`bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ${req?.status === 'rejected' ? 'bg-gray-400 cursor-not-allowed' : ''}`}
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
    </div>
  );
};

export default TeachRequest;
