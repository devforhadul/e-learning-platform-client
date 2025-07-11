// src/components/LoadingSpinner.jsx
import React from "react";

const LoadingSpinner = ({ size = "md", color = "black" }) => {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-10 w-10 border-4",
  };

  return (
    <div className="flex items-center justify-center bg-white bg-opacity-60">
      <div
        className={`animate-spin rounded-full border-t-transparent border-solid ${sizes[size]} border-${color}`}
      />
    </div>
  );
};

export default LoadingSpinner;
