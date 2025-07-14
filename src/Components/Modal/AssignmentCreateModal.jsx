import React, { useContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { ChevronDownIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { Textarea } from "../ui/textarea";
import { format } from "date-fns";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "@/Providers/AuthProvider";

const AssignmentCreateModal = ({ open, onOpenChange, classDetails }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [dateOpen, setDateOpen] = useState(false);
  const [date, setDate] = useState(null);
  const queryClient = useQueryClient();
  const { user } = useContext(AuthContext);

  const { mutate } = useMutation({
    mutationFn: async (addData) => {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/add-assignment/${classDetails?._id}`,
        addData
      );
      return data;
    },
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries(["teacherClassDetails", classDetails?._id]);
      queryClient.invalidateQueries(["teacherClass"], user?.email);
      toast.success("Assignment adedd successfully");
    },
    onError: (error) => {
      console.error("Error updating assignment:", error);
      toast.error("Failed to add assignment. Please try again.");
    },
  });

  const onSubmit = (data) => {
    onOpenChange(false);
    mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Add Assignment</DialogTitle>
          </DialogHeader>
          {/* Main Conten */}
          <div className="grid gap-4 py-5">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Title</Label>
              <Input {...register("title", { required: "Title is need" })} />
              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date.message}</p>
              )}
            </div>
            {/* Date picker */}
            <div className="grid gap-3">
              <Label htmlFor="date" className="px-1">
                Deadline
              </Label>
              <Popover open={dateOpen} onOpenChange={setDateOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date"
                    className="w-48 justify-between font-normal"
                  >
                    {date ? format(date, "dd/MM/yyyy") : "Select date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      setDate(date);
                      setDateOpen(false);
                      setValue("deadline", format(date, "dd/MM/yyyy"));
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Description</Label>
              <Textarea
                placeholder="Type your Assigmnet Description here."
                {...register("description", {
                  required: "description is need",
                })}
              />
              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date.message}</p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add Assignment</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AssignmentCreateModal;
