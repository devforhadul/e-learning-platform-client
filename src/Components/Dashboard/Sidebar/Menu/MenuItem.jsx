import React from "react";
import { NavLink } from "react-router";


const MenuItem = ({ label, address, icon: Icon, content }) => {
  return (
    <NavLink
      to={address}
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-1 rounded-lg gap-2  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
          isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
        }`
      }
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{label}</span>
      <div>{content}</div>
    </NavLink>
  );
};

export default MenuItem;
