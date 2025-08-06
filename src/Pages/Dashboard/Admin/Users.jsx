import FullSpinner from "@/Components/Shared/FullSpinner";

import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Confirm, Notify } from "notiflix";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MoonLoader } from "react-spinners";

const Users = () => {
  // const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const { data: users, isPending } = useQuery({
    queryKey: ["AllUserData"],
    queryFn: async () => {
      const jwtToken = localStorage.getItem("token");
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/user`, {
        headers: { Authorization: `Bearer ${jwtToken}` },
      });
      return data;
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (useId) => {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/user/admin/${useId}`
      );
      return data;
    },
    onSuccess: () => {
      toast.success("User promoted to Admin");
    },
  });

  //   Make admin
  const handleMakeAdmin = async (useId) => {
    Confirm.show(
      "Role Confirmation",
      "Are you sure make admin?",
      "Yes",
      "NO",
      async () => {
        mutate(useId);
      },
      () => {}
    );
  };

  if (isPending) return <FullSpinner />;

  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-4">All Users({users.length})</h2>

      {/* Search Box */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="border px-3 py-2 rounded w-full max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user?._id} className="border-t">
                <td className="px-4 py-2">
                  <img
                    src={user?.image}
                    alt="user"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="px-4 py-2">{user?.name}</td>
                <td className="px-4 py-2">{user?.email}</td>
                <td className="px-4 py-2 capitalize">{user?.role || "user"}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleMakeAdmin(user?._id)}
                    disabled={user?.role === "admin"}
                    className={`px-3 py-1 rounded ${
                      user?.role === "admin"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
                    }`}
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
            {users?.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
