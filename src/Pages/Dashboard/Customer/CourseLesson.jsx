import TabsLesson from "@/Components/Dashboard/Shared/TabsLesson";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const data = {
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

const CourseLesson = ({ classInfo, handleSubmit }) => {
  const [lessonLink, setLessonLink] = useState(
    data.modules[0].lessons[0].videoUrl
  );

  // const getEmbedUrl = (url) => {
  //   const match = url?.match(
  //     /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/
  //   );
  //   const videoId = match?.[1];
  //   return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
  // };

  return (
    <div className="">
      <div className="grid lg:grid-cols-12  gap-5">
        {/* Video player and tabs */}
        <div className="lg:col-span-8">
          {/* Shows Video Here... */}
          <div className="rounded-2xl p-1">
            {lessonLink ? (
              <ReactPlayer
                url={lessonLink}
                controls={true}
                playing
                muted
                width="100%"
                height="100%"
                className="rounded-2xl"
              />
            ) : (
              <div className="text-center py-10">
                Select a lesson to watch the video
              </div>
            )}
          </div>
          {/* lesson tab */}
          <div className="p-1 my-5">
            <TabsLesson classInfo={classInfo} handleSubmit={handleSubmit} />
          </div>
        </div>
        {/* right side Modules cuuriculam */}
        <div className="col-span-4">
          <div>
            <Accordion
              type="single"
              collapsible
              className="w-full py-3"
              defaultValue="item-1"
            >
              {data?.modules?.map((module) => (
                <AccordionItem
                  value={module?.order}
                  className={"border border-gray-200 p-2 rounded-md mb-3"}
                >
                  <AccordionTrigger className={"hover:no-underline"}>
                   Module {module?.order}: { module?.title}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2 text-balance">
                    {module?.lessons.map((lesson) => (
                      <p
                        className="py-3 px-2 bg-gray-100 rounded-md hover:bg-gray-300 cursor-pointer"
                        onClick={() => setLessonLink(lesson?.videoUrl)}
                      >
                        Lesson {lesson?.order}: {lesson?.title}
                      </p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLesson;
