import React, { useContext } from "react";
import BannerSection from "../../Components/Home/BannerSection";
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

  //   Get total user
  const { data: users } = useQuery({
    queryKey: ["AllUser"],
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/user`);
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
      <div className="bg-[#F0F3FE]">
        <Container>
          <CollaboratorSection />
        </Container>
      </div>
      <Container>
        <PopularClassSection mostEnrollClass={data} />
      </Container>
      <div className="bg-[#F0F3FE]">
        <Container>
          <TestimonialSection review={review} />
        </Container>
      </div>

      <Container>
        <InformationSection users={users} allClass={allClass} />
      </Container>
      <div className="bg-[#F0F3FE]">
        <Container>
          <JoinTeacherSection />
        </Container>
      </div>
      <Container>
        <FaqSection/>
      </Container>
      <div className="bg-[#F0F3FE]">
        <Container>
          <ContactUsSection />
        </Container>
      </div>
    </>
  );
};

export default Home;
