import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import TeacherClassCard from "../../../Components/Shared/Card/TeacherClassCard";
import { Confirm } from "notiflix";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MoonLoader } from "react-spinners";
import FullSpinner from "@/Components/Shared/FullSpinner";

const TeachMyClasses = () => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();

  // GEt ALl ADD classes
  const { data: myClass, isPending } = useQuery({
    queryKey: ["teacherClass", user?.email],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/teach-my-class/${user?.email}`
      );
      return data;
    },
    enabled: !!user?.email,
  });

  // For Delete Class
  const { mutate: deleteClass } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/class/delete/${id}`
      );
      return data;
    },
    onSuccess: () => {
      toast.success("Class Delete successfully");
      queryClient.invalidateQueries(["teacherClass"]);
    },
  });

  const onDelete = async (id) => {
    Confirm.show(
      "Class Delete Confirmation",
      "Are you sure?",
      "Yes",
      "No",
      async () => {
        deleteClass(id);
      },
      () => {}
    );
  };

  if (isPending) return <FullSpinner size={40} />;

  return (
    <div>
      <p className="text-2xl font-semibold mb-4">
        All Class Request({myClass?.length})
      </p>
      <div className="grid gap-4">
        {myClass?.map((cls) => (
          <TeacherClassCard key={cls._id} cls={cls} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default TeachMyClasses;
