import Image from "next/image";
import React from "react";
import DescriptionCard from "./DescriptionCard";

const Chooseus = () => {
  return (
    <>
      <div className="flex items-center bg-white mt-[3%] overflow-hidden">
        <div className=" relative mt-[40px] ">
          <Image
            src={"/home/about.png"}
            alt="about"
            height={750}
            width={750}
            className=" "
          />
        </div>
        <div className="w-[750px] grid gap-4">
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
      <div className="   bg-green-200">
        <div className="max-w-[1280px] flex items-center justify-between mx-auto">
          <DescriptionCard
            icon={"/home/book.png"}
            varient={"secondary"}
            title={"3000"}
            description={"SUCCESS STORIES"}
          />
          <DescriptionCard
            icon={"/home/book.png"}
            varient={"secondary"}
            title={"3000"}
            description={"SUCCESS STORIES"}
          />
          <DescriptionCard
            icon={"/home/book.png"}
            varient={"secondary"}
            title={"3000"}
            description={"SUCCESS STORIES"}
          />
          <DescriptionCard
            icon={"/home/book.png"}
            varient={"secondary"}
            title={"3000"}
            description={"SUCCESS STORIES"}
          />
        </div>
      </div>
    </>
  );
};

export default Chooseus;
