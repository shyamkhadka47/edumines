import React from "react";
import Hero from "@/components/Hero";
import Chooseus from "@/components/Chooseus";
import CourseAtGlance from "@/components/CourseAtGlance";
import Testimonial from "@/components/Testimonial";

const HomePage = () => {
  return (
    <>
      <Hero
        heading="WELCOME TO EDUCATION MINES"
        subheading="Best Online Education Expertise"
        description="Far far away, behind the word mountains, far from the countries
       Vokalia and Consonantia, there live the blind texts."
        btn1Name="Get Started Now!"
        btn2Name="View Course"
        bgImage="bg-image"
        textColor="text-black"
      />
      <Chooseus />
      <CourseAtGlance />
      <Testimonial />
    </>
  );
};

export default HomePage;
