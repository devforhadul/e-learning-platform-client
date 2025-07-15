import React, { useContext, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import { Rating } from "@mui/material";
import { AuthContext } from "@/Providers/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const TeacherReportModal = ({
  open,
  onOpenChange,
  setOpenModal,
  classInfo,
}) => {
  const { register, handleSubmit, control, setValue, reset } = useForm();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if ((user?.displayName && user?.email) || user?.photoURL) {
      setValue("userName", user?.displayName);
      setValue("userEmail", user?.email);
      setValue("userImage", user?.photoURL);
      setValue("classId", classInfo?._id);
      setValue("title", classInfo?.title)
    }
  }, [user, setValue, classInfo]);

  const { mutate } = useMutation({
    mutationFn: async (sendData) => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/ter-send`,
        sendData
      );
      return data;
    },
    onSuccess: () => {
      reset();
      setOpenModal(false);
      toast.success("TER Send Successfully");
    },
    onError: () => {
      setOpenModal(false);
      toast.error("Try again later...");
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Teaching Evaluation Report</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 mt-5">
            {/* Description Field */}
            <div className="grid w-full gap-3">
              <Label htmlFor="message">Write Your Feedback</Label>
              <Textarea
                placeholder="Type your Feedback here."
                id="message"
                {...register("description", {
                  required: "Please write description!",
                })}
              />
            </div>

            {/* Rating Field */}
            <div className="min-h-[50px]">
              <Label htmlFor="rating">Give Rating</Label>
              <Controller
                name="rating"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                  <Rating
                    value={field.value}
                    onChange={(_, newValue) => field.onChange(newValue)}
                  />
                )}
              />
            </div>

            {/* Submit */}
            <div>
              <Button type="submit" className="w-full">
                Send
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TeacherReportModal;
