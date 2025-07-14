import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { imageUpload } from "@/Api/uitls";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";


const TeachClassUpdate = ({ open, onOpenChange, cls, setUpdateModalOpen }) => {
  //const { title, instructor, image, price, description, status } = cls || {};
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: cls?.title || "",
      price: cls?.price || "",
      description: cls?.description || "",
    },
  });

  // const { mutate: updateClassStatus } = useMutation({
  //   mutationKey: ["updateClass"],
  //   mutationFn: async (updateData) => {
  //     const { data } = await axios.patch(
  //       `${import.meta.env.VITE_API_URL}/class/update/${cls?._id}`,
  //       updateData
  //     );
  //     return data;
  //   },
  //   onSuccess: () => {
  //     toast.success("Class Data updated...");
  //   },
  // });

  const onSubmit = async (data) => {
    // updateClassStatus(data);

    try {
      const _res = await axios.patch(
        `${import.meta.env.VITE_API_URL}/class/update/${cls?._id}`,
        data
      );
      reset();
      setUpdateModalOpen(false);
      toast.success("Class update successfully");

      navigate("/dashboard/teach-my-class");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = async (e) => {
    const img = e.target.files[0];
    const imgURL = await imageUpload(img);
    setValue("image", imgURL);
  };

 

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader className={"mb-5"}>
            <DialogTitle>Update Class Details</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="title-1">Class Title</Label>
              <Input
                id="name-1"
                name="title"
                // defaultValue={title}
                {...register("title", { required: "title is required" })}
              />
              {errors.title && (
                <p className="text-sm text-red-500">{errors.title.message}</p>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="price-1">Price</Label>
              <Input
                id="username-1"
                name="price"
                // defaultValue={price}
                {...register("price", { required: "price is required", valueAsNumber: true })}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description-1">Description</Label>
              <Input
                id="username-1"
                name="description"
                // defaultValue={description}
                {...register("description", {
                  required: "description is required",
                })}
              />
            </div>
            {/* Image file */}
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="picture">Picture</Label>
              <Input
                id="picture"
                type="file"
                onChange={handleFileChange}
                className={"cursor-pointer"}
              />
            </div>
          </div>
          <DialogFooter className={"mt-5"}>
            <DialogClose asChild>
              <Button variant="outline" className={"cursor-pointer"}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TeachClassUpdate;
