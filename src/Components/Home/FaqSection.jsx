import React from "react";

const faqs = [
  {
    question: "How can I enroll in a class?",
    answer:
      "You can enroll in a class by selecting the desired course from our course catalog and clicking the 'Enroll' button. Make sure you are logged in to your account before enrolling.",
  },
  {
    question: "Can I interact with the teacher during the course?",
    answer:
      "Yes, most of our courses provide options to communicate with the teacher via discussion boards, live Q&A sessions, or direct messaging depending on the course setup.",
  },
  {
    question: "What if I miss a live class session?",
    answer:
      "Don’t worry! All live sessions are recorded and available for you to watch anytime at your convenience through your course dashboard.",
  },
  {
    question: "How is my progress tracked in the course?",
    answer:
      "Your progress is automatically tracked as you complete lessons, assignments, and quizzes. You can view your progress anytime on your personal dashboard.",
  },
];

const FaqSection = () => {
  return (
    <section className="dark:bg-[#0a0a0a] dark:text-gray-800 py-10 md:py-16 lg:py-20">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8 dark:text-gray-400">
          Find answers to common questions about our courses and teachers.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 dark:text-white">
                {faq?.question}
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-200">
                {faq?.answer}{" "}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
