import Hero from "@/components/Hero";
import OurServicesCards from "@/components/OurServicesCards";
import Image from "next/image";
import React from "react";
import { servicesdata } from "../../components/_mockData";

const ServicesPage = () => {
  return (
    <div className="bg-[#ffffff]">
      <Hero
        heading="WELCOME TO EDUCATION MINES"
        subheading="Best Online Education Expertise"
        description="Far far away, behind the word mountains, far from the countries
       Vokalia and Consonantia, there live the blind texts."
        btn1Name="Get Started Now!"
        btn2Name="View Course"
        bgImage="bg-image1"
        textColor="text-black"
      />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mt-[20px] max-w-[1280px] mx-auto">
        <div className="h-[550px] w-[550] rounded-full">
          <Image
            src="/home/our-service.jpg"
            alt="Our-Services picture "
            width={500}
            height={500}
            className=" w-full h-full object-cover px-5"
          />
        </div>
        <div className="w-[auto] sm:w-[600px] ml-[20px]">
          <h1 className=" text-3xl mb-[30px] font-bold capitalize text-[#16839e]">
            Message from the CEO
          </h1>
          <p className="leading-8">
            Guiding a career really matters in someone’s life. Abroad Education
            Consultancy Services is dedicated in educating people by guiding the
            right way for the students to make their dream come true. Our
            practical and professional approach with students and families has
            proven the success. Our action oriented team of educated and
            qualified counsellors and migration agents always provide you the
            fact information to make our clients achieve desired goal of their
            life.
          </p>
          <p className="leading-8 font-bold mt-[15px]">Utsav Ban, CEO</p>
        </div>
      </div>

      <div className="  flex flex-col md:flex-row items-center justify-center max-w-[1280px]  gap-6 mx-auto mt-[30px] mb-[20px] flex-wrap ">
         {servicesdata.map((el, index) => {
          return (
            <OurServicesCards
            tcolor={"bg-primary-main"}
              key={index}
              heading={el.heading}
              content={el.content}
            />
          );
        })}
       
      </div>
    </div>
  );
};

export default ServicesPage;
