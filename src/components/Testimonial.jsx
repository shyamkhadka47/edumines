import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <>
      <div className="flex flex-col items-center w-[90%] mx-auto">
        <div className="mt-[30px]">
          <h1 className="text-[25px] font-semibold text-center">TESTIMONIAL</h1>
          <h2 className="text-[40px] font-bold text-center">
            Our Successful Students
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-3 mt-[30px] mb-[30px] overflow-hidden">
          <TestimonialCard
            icon={"/home/person.jpg"}
            name={"ROGER SCOTT"}
            position={"MARKETING MANAGER"}
            description={
              "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            }
          />
          <TestimonialCard
            icon={"/home/person.jpg"}
            name={"ROGER SCOTT"}
            position={"MARKETING MANAGER"}
            description={
              "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            }
          />
          <TestimonialCard
            icon={"/home/person.jpg"}
            name={"ROGER SCOTT"}
            position={"MARKETING MANAGER"}
            description={
              "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            }
          />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
