import React from "react";
import BannerSection from "../../Components/Home/BannerSection";
import CollaboratorSection from "@/Components/Home/CollaboratorSection";
import PopularClassSection from "@/Components/Home/PopularClassSection";
import Container from "@/Components/Shared/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TestimonialSection from "@/Components/Home/TestimonialSection";
import InformationSection from "@/Components/Home/InformationSection";
import JoinTeacherSection from "@/Components/Home/JoinTeacherSection";

const Home = () => {
  const { data } = useQuery({
    queryKey: ['mostEnrollClasses'],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/most-enroll-classes`
      );
      return data;
    },
  });

  return (
    <Container>
      <BannerSection />
      <CollaboratorSection />
      <PopularClassSection mostEnrollClass={data}/>
      <TestimonialSection/>
      <InformationSection/>
      <JoinTeacherSection/>
    </Container>
  );
};

export default Home;
