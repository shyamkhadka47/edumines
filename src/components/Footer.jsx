import Image from "next/image";
import React from "react";
import { BiPhone } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { IoLocation, IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="flex flex-col text-white">
      <div className="w-full relative h-44 object-cover">
        <Image
          src={"/footer-top.svg"}
          alt="footer image"
          fill
          draggable={false}
        />
      </div>
      <div className="flex gap-14 justify-between bg-[#13263c] md:flex-row flex-col py-16 px-24 ">
        <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-1/4">
          <span className="font-bold uppercase text-lg">Education Mines</span>
          <p className="text-justify">
            Well-known organisation that specialises in student recruitment,
            migration and education consultancy. Exceptional counseling service
            to the potential students and guide them to choose the best career
            through education.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/4">
          <div className="flex items-center gap-4">
            <span>
              <IoLocation size={20} />
            </span>
            <h1 className="whitespace-nowrap font-bold uppercase text-lg">
              Lalbandi Office:
            </h1>
          </div>
          <div className="flex">
            <span>
              Suite 701, Level 7, 343 Little Collins St, Melbourne VIC 3000
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>
              <BiPhone size={20} />
            </span>
            <span>+977 1 5322*****</span>
          </div>
          <div className="flex items-center gap-4">
            <span>
              <IoMail size={20} />
            </span>
            <span>itsmeacs01@gmail.com</span>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/4">
          <div className="flex items-center gap-2">
            <span>
              <IoLocation size={20} />
            </span>
            <h1 className="whitespace-nowrap font-bold uppercase text-lg">
              Social links
            </h1>
          </div>
          <div className="flex gap-4">
            <BsFacebook size={40} />
            <BsInstagram size={40} />
            <BsLinkedin size={40} />
          </div>
        </div>
      </div>
      <div className="flex items-center bg-[#13263c] gap-4 pb-20 justify-center">
        <span className="h-[2px]  bg-white w-1/3"></span>
        <span className=" text-center">{`© Education Mines ${new Date().getFullYear()} All Rights Reserved ©`}</span>
        <span className="h-[2px] bg-white w-1/3"></span>
      </div>
    </div>
  );
};

export default Footer;
