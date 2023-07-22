import Image from "next/image";
import React from "react";
import Button from "./Button";


const Hero = () => {
  return (
    <div className="flex items-center  bg-image bg-no-repeat bg-cover bg-fixed">
      <div className="ml-[8%] mt-[15%] ">
        <h1 className="text-[20px] font-bold ">WELCOME TO EDUCATION MINES</h1>
        <h2 className="text-[40px] font-bold">Best Online Education Expertise</h2>
        <p className="max-w-[600px] leading-9 mt-[20px]">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className="flex items-center gap-2 mt-[30px] mb-[60px]">
          <Button name="Get Started Now!"/>
          <Button name="View Course" />
        </div>
      </div>

      
     

             
    </div>
  );
};

export default Hero;
