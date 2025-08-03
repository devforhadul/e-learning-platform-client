import React, { useContext } from "react";
import TeachonForm from "../../Components/Form/TeachonForm";
import useRole from "../../Hooks/useRole";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "@/Providers/AuthProvider";
import { MoonLoader } from "react-spinners";
import toast from "react-hot-toast";
import FullSpinner from "@/Components/Shared/FullSpinner";

const TeachOn = () => {
  const [role, roleLoading] = useRole();
  const { user } = useContext(AuthContext);

  const { data: sigleTeachReq, isPending } = useQuery({
    queryKey: ["AllUser"],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/single-teach-req/${user?.email}`
      );
      return data;
    },
  });

  const { mutate } = useMutation({
    mutationFn: async () => {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/update-teach-status/${user?.email}`
      );
      return data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success("Send Another request..");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if (isPending || roleLoading) return <FullSpinner />;

  // User is already teacher
  if (role === "teacher") {
    return (
      <div className="p-6 text-center h-[calc(100vh-73px)] flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold mb-4">
          You are already a teacher!
        </h2>
        <p>Thank you for being a valuable part of our teaching community.</p>
      </div>
    );
  }

  if (sigleTeachReq?.status === "pending") {
    return (
      <div className="p-6 text-center h-[calc(100vh-73px)] flex flex-col justify-center items-center">
        <h2 className="text-xl font-medium mb-4">
          Your teacher request is under review.
        </h2>
        <p>We will notify you once an admin processes your request.</p>
      </div>
    );
  }

  // Request rejected — show button to request again
  if (sigleTeachReq?.status === "rejected") {
    return (
      <div className="p-6 text-center h-[calc(100vh-73px)] flex flex-col justify-center items-center">
        <h2 className="text-xl font-medium mb-4 text-red-600">
          Your teacher request was rejected.
        </h2>
        <button
          onClick={() => mutate()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Request to Another
        </button>
      </div>
    );
  }

  return (
    <div className={`px-10 py-10 md:py-16 lg:py-16 `}>
      <TeachonForm role={role} />
    </div>
  );
};

export default TeachOn;
