import React, { useContext, useRef } from "react";
import BannerSection from "../../Components/Home/HeroSection";
import CollaboratorSection from "@/Components/Home/CollaboratorSection";
import PopularClassSection from "@/Components/Home/PopularClassSection";
import Container from "@/Components/Shared/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TestimonialSection from "@/Components/Home/TestimonialSection";
import InformationSection from "@/Components/Home/InformationSection";
import JoinTeacherSection from "@/Components/Home/JoinTeacherSection";
import ContactUsSection from "@/Components/Home/ContactUsSection";
import { AuthContext } from "@/Providers/AuthProvider";
import FaqSection from "@/Components/Home/FaqSection";
import { motion, useInView } from "motion/react";
import WAFloting from "@/Components/Shared/WAFloting";
import { Fade, Slide } from "react-awesome-reveal";

const Home = () => {
  const { user } = useContext(AuthContext);
  // most enroll classes
  const { data } = useQuery({
    queryKey: ["mostEnrollClasses"],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/most-enroll-classes`
      );
      return data;
    },
  });

  //   Get total class
  const { data: allClass } = useQuery({
    queryKey: ["AdminAllClass"],
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-class`);
      return data;
    },
  });

  // GEt testimonial teviews
  const { data: review } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/reviews`);
      return data;
    },
  });



  return (
    <>
      <Container>
        <BannerSection user={user} />
      </Container>
      <div className="bg-[#F0F3FE] dark:bg-[#0a0a0a]">
        <Container >

          <CollaboratorSection />

        </Container>
      </div>
      <Container>
        <PopularClassSection mostEnrollClass={data} />
      </Container>
      <div className="bg-[#F0F3FE] dark:bg-[#0a0a0a]">
        <Container>
          <TestimonialSection review={review} />
        </Container>
      </div>

      <Container>
        <InformationSection allClass={allClass} />
      </Container>
      <div className="bg-[#F0F3FE] dark:bg-[#0a0a0a]">
        <Container>
          <JoinTeacherSection />
        </Container>
      </div>
      <Container>
        <FaqSection />
      </Container>
      <div className="bg-[#F0F3FE] dark:bg-[#0a0a0a]">
        <Container>
          <ContactUsSection />
        </Container>
        <WAFloting />
      </div>
    </>
  );
};

export default Home;
