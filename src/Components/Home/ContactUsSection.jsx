import React from "react";
import contact from "../../assets/undraw_contact-us_kcoa.svg";
import { Button } from "../ui/button";

const ContactUsSection = () => {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-10 md:py-16 lg:py-20 mx-auto rounded-lg md:grid-cols-2 md:px-8 lg:px-10 xl:px-20 dark:text-gray-800 dark:bg-[#0a0a0a]">
      {/* Left side content */}
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl dark:text-white">
            Let's talk!
          </h2>
          <p className="dark:text-gray-400">
            Send mail everytime any day
          </p>
        </div>
        <img
          src={contact}
          alt="Decorative doodle"
          className=" h-52 md:h-64"
        />
      </div>

      {/* Form */}
      <form noValidate className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1 dark:text-white">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your full name"
            className="w-full p-3 rounded dark:bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 dark:text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            className="w-full p-3 rounded dark:bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1 dark:text-white">
            Message
          </label>
          <textarea
            id="message"
            rows={3}
            placeholder="Write your message here"
            className="w-full p-3 rounded dark:bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
          />
        </div>
        <Button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50 hover:bg-violet-700 transition"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactUsSection;
