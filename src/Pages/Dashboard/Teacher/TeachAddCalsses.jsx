import React, { useContext } from "react";
import AddClassForm from "../../../Components/Form/AddClassForm";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";
import { Notify } from "notiflix";
import { useNavigate } from "react-router";
import { imageUpload } from "@/Api/uitls";
import { useMutation } from "@tanstack/react-query";

const TeachAddCalsses = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation({
    mutationFn: async (addClassData) => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/all-class`,
        addClassData
      );
      return data;
    },
    onSuccess: () => {
      reset();
      Notify.success("Your class under Review...");
      navigate("/dashboard/teach-my-class");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = async (data) => {
    const { name, email, ...rest } = data;
    const formateData = {
      ...rest,
      instructor: {
        name,
        email,
      },
    };

    mutate(formateData);
  };

  const handleThumbnailUrl = async (e) => {
    const img = e.target.files[0];
    const imgUrl = await imageUpload(img);
    setValue("image", imgUrl);
  };

  return (
    <div>
      <div>
        <AddClassForm
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          onSubmit={onSubmit}
          user={user}
          handleThumbnailUrl={handleThumbnailUrl}
          watch={watch}
        />
      </div>
    </div>
  );
};

export default TeachAddCalsses;
