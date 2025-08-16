import React, { useContext, useState } from "react";
import Container from "../Shared/Container";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { AuthContext } from "@/Providers/AuthProvider";
import ClassEnrollModal from "../Modal/ClassEnrollModal";
import FullSpinner from "../Shared/FullSpinner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import useRole from "@/Hooks/useRole";
import YouTube from "react-youtube";
import toast from "react-hot-toast";
import { CirclePlay, LockKeyhole } from "lucide-react";

const courseData = {
  _id: "course001",
  title: "Full Stack Web Development Bootcamp",
  description:
    "Learn to build complete web applications using the MERN stack from scratch.",
  modules: [
    {
      order: 1,
      title: "HTML, CSS, and JavaScript Basics",
      description: "Covers the foundational technologies of the web.",
      lessons: [
        {
          order: 1,
          title: "Introduction to HTML",
          content:
            "Learn the structure of web pages using HTML tags and attributes.",
          videoUrl: "https://www.youtube.com/watch?v=it1rTvBcfRg",
        },
        {
          order: 2,
          title: "CSS Fundamentals",
          content:
            "Understand how to style websites using CSS and layout techniques.",
          videoUrl: "https://www.youtube.com/watch?v=AGDDdsiZ0Ko",
        },
        {
          order: 3,
          title: "JavaScript Basics",
          content:
            "Explore JavaScript syntax, variables, loops, and conditionals.",
          videoUrl: "https://www.youtube.com/watch?v=DltRFGOe1FQ",
        },
      ],
    },
    {
      order: 2,
      title: "React Fundamentals",
      description: "Introduces core concepts of React for building modern UIs.",
      lessons: [
        {
          order: 1,
          title: "Getting Started with React",
          content: "Understand components, JSX, and how to render elements.",
          videoUrl: "https://example.com/video/react-start",
        },
        {
          order: 2,
          title: "State and Props",
          content:
            "Learn how to manage component state and pass data via props.",
          videoUrl: "https://example.com/video/react-state-props",
        },
        {
          order: 3,
          title: "Handling Events",
          content: "Handle user interaction using events in React components.",
          videoUrl: "https://example.com/video/react-events",
        },
      ],
    },
    {
      order: 3,
      title: "React Fundamentals",
      description: "Introduces core concepts of React for building modern UIs.",
      lessons: [
        {
          order: 1,
          title: "Getting Started with React",
          content: "Understand components, JSX, and how to render elements.",
          videoUrl: "https://example.com/video/react-start",
        },
        {
          order: 2,
          title: "State and Props",
          content:
            "Learn how to manage component state and pass data via props.",
          videoUrl: "https://example.com/video/react-state-props",
        },
        {
          order: 3,
          title: "Handling Events",
          content: "Handle user interaction using events in React components.",
          videoUrl: "https://example.com/video/react-events",
        },
      ],
    },
  ],
};

const ClassDetails = () => {
  const { id } = useParams();
  const [role] = useRole();
  const { user } = useContext(AuthContext);
  const [payModalOpen, setPayModalOpen] = useState(false);
  const navigate = useNavigate();
  const [lessonUrl, setLessonUrl] = useState("");

  //   GEt details data from server
  const { data: classInfo, isPending } = useQuery({
    queryKey: ["singleClass"],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/singleclass/${id}`
      );
      return data;
    },
  });

  function calculateDiscount(price, discount = 10) {
    if (discount <= 0) return price;
    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;
    return parseFloat(finalPrice.toFixed(2)); // rounded to 2 decimal places
  }



  if (isPending) return <FullSpinner size={40} />;

  return (
    <Container>
      <div className="grid grid-cols-1  md:grid-cols-12 gap-8 my-12">
        <div className="col-span-8 order-2 md:order-1">
          <div className="space-y-6 rounded-xl">
            {/* Course Header */}
            <div className="space-y-2">
              {/* Title */}
              <h2 className="text-3xl font-bold text-gray-900">
                {classInfo?.title}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 text-yellow-500 text-sm">
                ⭐ 4.5
              </div>

              {/* Instructor */}
              <p className="text-sm text-gray-600">
                Course by:{" "}
                <span className="font-medium text-gray-800">
                  {classInfo?.instructor?.name}
                </span>
              </p>
            </div>

            {/* Course Structure */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Course Structure
              </h3>
              <p className="text-sm text-gray-600">22 Modules, 50 Lessons</p>

              {/* Modules and Lessons */}
              <Accordion type="single" collapsible>
                {courseData?.modules?.map((module, index) => (
                  <AccordionItem
                    key={index}
                    value={`module-${module?.order}`}
                    className="border border-slate-200 bg-sky-100 mb-3 cursor-pointer rounded-sm"
                  >
                    <AccordionTrigger className="px-4 py-2 text-left text-base font-medium text-gray-800 cursor-pointer hover:no-underline">
                      {module?.title}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-2 space-y-2">
                      {module?.lessons?.map((lesson, idx) => (
                        <div
                          key={idx}
                          className="bg-white border border-slate-200 rounded-md px-3 py-2 text-sm text-gray-700 shadow-sm hover:bg-slate-50 cursor-pointer"
                          onClick={() => setLessonUrl("tTzDDsy70_k")}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <CirclePlay size={20} className="inline-block mr-1" />
                              {lesson?.title}
                            </div>
                            <LockKeyhole size={20}/>
                          </div>

                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        <div className="col-span-4 order-1 md:order-2">
          <div className="p-4 border  border-gray-300 rounded-xl ">
            {/* Course Image */}
            <div className="space-y-4">
              {/* YouTube Wrapper with same aspect ratio */}
              {lessonUrl ? (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <YouTube
                    videoId={lessonUrl}
                    className="absolute inset-0 w-full h-full"
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 1,
                        modestbranding: 1,
                        mute: 0,
                      },
                    }}
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                  <img
                    src={classInfo?.image}
                    alt="Course"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Course Info */}
            <div className="flex flex-col justify-between gap-3">
              {/* Offer Text */}
              <p className="text-sm text-red-600 font-medium mt-2">
                5 days left of this price
              </p>

              {/* Price Display */}
              <p className="text-3xl font-bold text-blue-600">
                ${classInfo?.price}
                <span className="ml-2 text-sm font-normal line-through text-red-500">
                  ${calculateDiscount(classInfo?.price, 50)} off
                </span>
              </p>

              {/* Course Mini Details */}
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <p>⭐ 4.5</p>
                <p>⏱️ 10 Hours</p>
                <p>📚 54 Lessons</p>
              </div>

              {/* Enroll Button */}
              <Button
                className="w-full bg-Primary text-white hover:bg-Primary/90 px-6 py-2 rounded-md cursor-pointer"
                onClick={() => {
                  if (!user) {
                    toast.error("Please Login first!");
                    return navigate("/login");
                  }
                  setPayModalOpen(true);
                }}
                // disabled={role === "admin" || role === "teacher"}
              >
                Enroll Now
              </Button>
              {/* Payment modal */}
              <ClassEnrollModal
                open={payModalOpen}
                onOpenChange={setPayModalOpen}
                classInfo={classInfo}
              />

              {/* Course Offers */}
              <div className="mt-4">
                <h5 className="text-lg font-semibold mb-2 text-gray-800">
                  What’s in the course?
                </h5>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Lifetime access with free updates.</li>
                  <li>Downloadable resources and source code.</li>
                  <li>Quizzes to test your knowledge.</li>
                  <li>Certificate of completion.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ClassDetails;
