"use client";
import React, { useState } from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsClock } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

const menu = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "our course", path: "/our-courses" },
  { name: "about Us", path: "/about-us" },
  { name: "contact Us", path: "/contact-us" },
];
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full z-50 mx-auto">
      <div className="flex items-center  justify-between lg:max-w-[1280px] lg:mx-auto mt-[10px] mx-[5%]">
        <div>
          <h1 className=" text-primary-main font-bold">EduMines</h1>
          <p>Abroad Education Consultancy</p>
        </div>
        <div className="flex items-center ">
          <div className="mr-[10px] hidden lg:block">
            <BsClock fontSize={40} />
          </div>
          <div className="hidden lg:block">
            <p>Monday-Friday</p>
            <p className=" text-primary-main font-bold">8:00AM-8:00PM</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-[10px ]  hidden lg:block">
            <BiPhoneCall fontSize={40} />
          </div>
          <div className=" hidden lg:block">
            <p className=" text-primary-main font-bold">Call Us</p>
            <p className="text-black">+2 392 3929 210</p>
          </div>
        </div>

        <div className="flex items-center  ">
          <span>
            <BsFacebook className="w-[30px] h-[30px] ml-[15px] text-primary-main  " />
          </span>
          <span>
            <BsTwitter className="w-[30px] h-[30px] ml-[15px] text-primary-main" />
          </span>
          <span>
            <BsInstagram className="w-[30px] h-[30px] ml-[15px] text-primary-main" />
          </span>
        </div>
      </div>
      <div className="flex items-center  justify-between w-[100%] h-[80px] bg-[#13263c] mt-[5px]">
        <div>
          <Link href={"/"}>
          <Image
            src="/home/logo.png"
            width={180}
            height={180}
            alt="Logo"
            className="ml-[60px] text-[35px] font-bold "
            
          />
          </Link>
        </div>
        <ul className="flex items-center text-white capitalize mr-[60px]  ">
          {menu.map((el, i) => {
            return (
              <li
                key={i}
                className="ml-[25px]  text-[20px] cursor-pointer transition-all  hover:text-green-700 font-semibold hidden lg:block"
              >
                <Link href={el.path}> {el.name}</Link>
              </li>
            );
          })}
        </ul>
        {!toggle ? (
          <RxHamburgerMenu
            color="white"
            size={30}
            className="cursor-pointer transition-all ease-in-out  lg:hidden mr-[20px]"
            onClick={() => setToggle(true)}
          />
        ) : (
          <IoClose
            color="#fff"
            size={30}
            className="cursor-pointer transition-all ease-in-out !text-white mr-[20px]  lg:hidden"
            onClick={() => setToggle(false)}
          />
        )}
        {toggle ? (
          <ul className="flex flex-col items-center z-[999] text-white capitalize absolute bg-[#13263c] h-[100vh] w-[100%] mt-[895px] lg:hidden ">
            {menu.map((el, i) => {
              return (
                <li
                  key={i}
                  className="  text-[20px] cursor-pointer hover:scale-105 transition-all  hover:text-green-700 hover:font-semibold my-[20px]  "
                >
                  <Link
                    href={el.path}
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    {" "}
                    {el.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
