import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-gray-50 dark:bg-slate-900 min-h-screen text-gray-900 dark:text-slate-100 p-6">
      <h1 className="text-4xl font-bold mb-4 text-indigo-500 dark:text-violet-400">
        404
      </h1>
      <p className="mb-6">Not Found!!</p>
      <button
        className="bg-indigo-500 dark:bg-violet-500 hover:bg-indigo-600 dark:hover:bg-violet-600 text-white px-4 py-2 rounded"
        onClick={() => (location.href = "/")}
      >
        GO Home
      </button>
    </div>
  );
};

export default NotFound;
