import React from "react";
import MenuItem from "./MenuItem";
import { CirclePlus } from "lucide-react";
import { MdOutlinePlayLesson } from "react-icons/md";
import { MessageCircleMore } from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import { Star } from "lucide-react";
import { PiStudent } from "react-icons/pi";
import { TbDeviceAnalytics } from "react-icons/tb";

const TeacherMenu = () => {
  return (
    <>
      <MenuItem
        label={"Add Class"}
        address={"/dashboard/teach-add-class"}
        icon={CirclePlus}
      />
      <MenuItem
        label={"My Courses"}
        address={"/dashboard/teach-my-class"}
        icon={MdOutlinePlayLesson}
      />
      <MenuItem
        label={"Message"}
        address={"/dashboard/message"}
        icon={MessageCircleMore}
        content={
          <Badge
            className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
            variant="destructive"
          >
            2
          </Badge>
        }
      />
      <MenuItem
        label={"Analitycs"}
        address={"/dashboard/anyalitycs"}
        icon={TbDeviceAnalytics}
      />
      <MenuItem
        label={"Reviews"}
        address={"/dashboard/teacher-reviews"}
        icon={Star}
      />
      <MenuItem
        label={"Students"}
        address={"/dashboard/students"}
        icon={PiStudent}
      />
    </>
  );
};

export default TeacherMenu;
