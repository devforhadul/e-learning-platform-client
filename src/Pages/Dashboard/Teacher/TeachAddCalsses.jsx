import React, { useContext, useState } from "react";
import AddClassForm from "../../../Components/Form/AddClassForm";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";
import { Notify } from "notiflix";
import { useNavigate } from "react-router";
import { imageUpload } from "@/Api/uitls";
import { useMutation } from "@tanstack/react-query";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import { Label } from "@/Components/ui/label";
import ModuleAddForm from "@/Components/Form/ModuleAddForm";

const TeachAddCalsses = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [addValue, setAddValue] = useState("lesson");

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
    <div className="p-3">
      <h2 className="text-xl font-bold mb-4">Add Course or Lesson</h2>
      <div className="mb-4">
        <RadioGroup
          defaultValue="lesson"
          className={"flex"}
          value={addValue}
          onValueChange={(v) => setAddValue(v)}
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem value="lesson" id="r2" />
            <Label htmlFor="r2">Lesson</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="course" id="r1" />
            <Label htmlFor="r1">Course</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        {addValue === "course" ? (
          <AddClassForm
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
            onSubmit={onSubmit}
            user={user}
            handleThumbnailUrl={handleThumbnailUrl}
            watch={watch}
          />
        ) : (
          <ModuleAddForm  />
        )}
      </div>
    </div>
  );
};

export default TeachAddCalsses;
