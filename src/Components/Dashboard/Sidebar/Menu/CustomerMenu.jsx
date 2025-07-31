import React from "react";
import { MdOutlineClass } from "react-icons/md";
import MenuItem from "./MenuItem";
import { MessageCircleMore } from "lucide-react";
import { GiProgression } from "react-icons/gi";
import { CreditCard } from "lucide-react";
import { LiaCertificateSolid } from "react-icons/lia";
import { Badge } from "@/Components/ui/badge";

const CustomerMenu = () => {
  return (
    <>
      <MenuItem
        label={"My Courses"}
        address={"/dashboard/my-courses"}
        icon={MdOutlineClass}
      />
      <MenuItem
        label={"My Progress"}
        address={"/dashboard/my-progress"}
        icon={GiProgression}
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
        label={"Certificate"}
        address={"/dashboard/certificate"}
        icon={LiaCertificateSolid}
      />
      <MenuItem
        label={"Billing"}
        address={"/dashboard/billing"}
        icon={CreditCard}
      />
    </>
  );
};

export default CustomerMenu;
