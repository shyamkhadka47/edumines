"use client";

import Image from "next/image";
import React, { useState } from "react";

const TestimonialCard = ({
  name,
  icon,
  subIcon,
  position,
  description,
  hoovered = false,
}) => {
  const [isHovered, setIsHovered] = useState(hoovered);
  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className={`px-8 py-10 w-full md:max-w-[350px] rounded-sm bg-primary-main grid gap-4 ${
        isHovered ? "text-white" : "text-black"
      }`}
    >
      <div className={`div flex gap-4`}>
        <div className={`relative h-[75px] w-[75px] rounded-full`}>
          {icon && (
            <div
              className={`absolute flex items-center justify-center overflow-hidden rounded-full h-full w-full object-cover`}
            >
              <Image src={icon} alt={name} draggable={false} fill />
            </div>
          )}

          {subIcon && (
            <div
              className={`absolute ml-[55px] mt-[50px] z-[1] flex items-center justify-center overflow-hidden rounded-full h-[20px] w-[20px]`}
            >
              {typeof subIcon === "string" ? (
                <Image src={subIcon} alt={name} fill draggable={false} />
              ) : (
                subIcon
              )}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-bold text-2xl uppercase h-fit">{name}</span>
          <span className="h-fit text-md uppercase">{position}</span>
        </div>
      </div>
      <span className="text-sm">{description}</span>
    </div>
  );
};

export default TestimonialCard;
