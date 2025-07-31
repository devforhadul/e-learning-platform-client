import React from "react";
import { MoonLoader } from "react-spinners";

export default function FullSpinner({ size = 40 }) {
  return (
    <div className="h-screen flex justify-center items-center">
      <MoonLoader size={size} />
    </div>
  );
}
