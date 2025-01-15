import AboutUsLeftToRightCard from "@/components/AboutUsLeftToRightCard";
import AboutUsRightToLeftCard from "@/components/AboutUsRightToLeftCard";
import Hero from "@/components/Hero";
import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <Hero
        heading="WELCOME TO EDUCATION MINES"

        subheading="Best Online Education Expertise"
        description="Far far away, behind the word mountains, far from the countries
       Vokalia and Consonantia, there live the blind texts."
        btn1Name="Get Started Now!"
        btn2Name="View Course"
        bgImage="bg-image3"
        textColor="text-black"
      />

    <AboutUsLeftToRightCard />
   <AboutUsRightToLeftCard />

    </div>
  );
};

export default AboutUsPage;
