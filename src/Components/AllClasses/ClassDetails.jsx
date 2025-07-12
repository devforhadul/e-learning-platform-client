import React from "react";
import Container from "../Shared/Container";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../Shared/LoadingSpinner";

const ClassDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: classInfo, isPending } = useQuery({
    queryKey: ["singleClass"],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/singleclass/${id}`
      );
      return data;
    },
  });

  const mutation = useMutation({
    mutationFn: async ({ enrollData }) => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/enrolled`,
        { enrollData }
      );
      return data;
    },
  });

  console.log(mutation);
  

  const handlePayButton = () => {
    navigate("/dashboard/my-classes");
  };

  if (isPending) return <LoadingSpinner />;

  return (
    <Container>
      <div className="mt-5 mb-10 p-6 border rounded-xl shadow-md bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {classInfo?.title}
        </h2>

        <img
          src={classInfo?.image}
          alt={classInfo?.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />

        <p className="text-gray-700 mb-4">{classInfo?.description}</p>

        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Instructor:</h4>
            <p className="text-gray-600">{classInfo?.instructor?.name}</p>
            <p className="text-gray-500 text-sm">
              {classInfo?.instructor?.email}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800">Price</h4>
            <p className="text-xl text-green-600 font-bold">
              BDT: {classInfo?.price}
            </p>
          </div>
        </div>

        <button
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
          onClick={handlePayButton}
        >
          Pay & Enroll
        </button>
      </div>
    </Container>
  );
};

export default ClassDetails;
