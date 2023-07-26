"use client"
import { color } from "framer-motion";
import React from "react";

const OurServicesCards = ({heading, content, key, tcolor}) => {
  
  return (
    
    <div>
      
        <div key={key} className={`flex flex-col w-[250px] h-[auto] ${tcolor} py-5  rounded-lg  mb-[30px]`}>
          <div className="bg-black w-20 h-20 ml-[20px] mt-[20px] rounded-full"></div>
          <h1 className="capitalize text-xl font-bold ml-[20px] mt-[10px] text-white">
            {heading}
          </h1>
          <p className="ml-[20px] mt-[10px] text-[12px] text-white">
           {content}
          </p>
        </div>
      
    </div>
  );
};

export default OurServicesCards;
