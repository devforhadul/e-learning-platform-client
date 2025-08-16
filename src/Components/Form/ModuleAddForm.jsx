import React, { useContext, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "@/Providers/AuthProvider";

export default function ModuleAddForm() {
  const { handleSubmit, register, reset } = useForm();
  const [selectedCourse, setSelectedCourse] = useState();
  const { user } = useContext(AuthContext);


  const { data: myCourses } = useQuery({
    queryKey: ["myCourses"],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/teach-my-class/${user?.email}`
      );
      return data;
    },
  });

  
  

  const onSubmit = (data) => {
    console.log(selectedCourse);
    reset();
  };

  return (
    <div className="w-full md:w-[80%]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          {/* select course */}
          <Select onValueChange={(v) => setSelectedCourse(v)}>
            <SelectTrigger className={" w-full md:w-[80%] lg:w-[50%]"}>
              <SelectValue placeholder="Select a Course" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Courses</SelectLabel>
                {myCourses?.map((course) => (
                  <SelectItem key={course?._id} value={course?.title}>{course?.title}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* ============ */}
          <div className="grid w-full  items-center gap-3">
            <Label htmlFor="email">Module Title</Label>
            <Input
              type="text"
              id="email"
              placeholder="ex:frontend side"
              {...register("moduleTitle", { required: true })}
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium">Lecture </p>
            <Button>+ Add lesson</Button>
          </div>
          <div className="grid w-full  items-center gap-3">
            <Label htmlFor="lactireTitle">Lecture Title</Label>
            <Input
              type="text"
              id="email"
              placeholder="ex:basic html & css"
              {...register("lectureTitle", { required: true })}
            />
          </div>
          <div className="grid w-full  items-center gap-3">
            <Label htmlFor="lactureDuration">Lecture Duration</Label>
            <Input
              type="number"
              id="email"
              placeholder="ex: 16"
              {...register("lactureDuration", { required: true })}
            />
          </div>
          <div className="grid w-full items-center gap-3">
            <Label htmlFor="lactureUrl">Lecture url</Label>
            <Input
              type="text"
              id="email"
              placeholder="ex:https://www.youtube.com/watch?v=XZj4hmbNdSE"
              {...register("lectureUrl", { required: true })}
            />
          </div>
          <Button type="submit">Add Module</Button>
        </div>
      </form>
    </div>
  );
}
