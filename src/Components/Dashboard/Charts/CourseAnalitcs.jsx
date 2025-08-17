import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function CourseAnalitcs({ allCourse }) {

  const data = [
    { course: "JavaScript", enrolled: 45 },
    { course: "React", enrolled: 60 },
    { course: "Node.js", enrolled: 30 },
    { course: "MongoDB", enrolled: 25 },
    { course: "Express", enrolled: 20 },
  ];

  return (
    <div className="p-5">
      <div className="w-full h-90 p-4  bg-white rounded-2xl shadow-md ">
        <h2 className="text-xl font-semibold mb-4">Course Enrollment</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={allCourse}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="totalEnroll" fill="#4f46e5" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
