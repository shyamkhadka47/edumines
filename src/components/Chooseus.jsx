"use client";
import Image from "next/image";
import React from "react";
import DescriptionCard from "./DescriptionCard";
import CountUp from "react-countup";

const Chooseus = () => {
  return (
    <>
    <h1 className="text-[40px] font-bold text center capitalize mt-[100px] mx-auto underline" >why choose us</h1>
      <div className="flex flex-col md:flex-row items-center bg-white mt-[3%] mb-[3%]  max-w-[1200px] mx-auto">
        <div className=" relative mt-[40px] w-[auto] h-[auto]">
         <Image width={920} height={520} src="/home/Aboutus.jpg" alt="about" className="w-full h-auto min-w-[320px] px-10 mb-10" />
        </div>
        <div className="md:px-0 px-10">
          <DescriptionCard
            icon={"/home/book.png"}
            title={"Online Courses"}
            description={
              "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            }
          />
          <DescriptionCard
            icon={"/home/certificate.png"}
            title={"Earn a Certificate"}
            description={
              "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            }
          />
          <DescriptionCard
            icon={"/home/albert.png"}
            title={"Learn With Expert"}
            description={
              "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            }
          />
        </div>
      </div>
      <div className="w-full bg-primary-main mx-auto">
        <div className="max-w-[1000px] flex flex-col mb-2 md:mx-auto md:flex-row items-center justify-between py-6">
          <div>
            <DescriptionCard
              icon={"/home/book.png"}
              varient={"secondary"}
              title={<CountUp start={0} end={3000} duration={2.75} />}
              description={"SUCCESS STORIES"}
              
            />
          </div>
          <div>
            <DescriptionCard
              icon={"/home/book.png"}
              varient={"secondary"}
              title={<CountUp start={0} end={3000} duration={2.75} />}
              description={"SUCCESS STORIES"}
            />
          </div>
          <div>
            <DescriptionCard
              icon={"/home/book.png"}
              varient={"secondary"}
              title={<CountUp start={0} end={3000} duration={2.75} />}
              description={"SUCCESS STORIES"}
            />
          </div>
          <div>
            <DescriptionCard
          
              icon={"/home/book.png"}
              varient={"primary"}
              title={<CountUp start={0} end={3000} duration={2.75} />}
              description={"SUCCESS STORIES"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chooseus;
