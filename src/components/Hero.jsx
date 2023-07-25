import React from 'react';
import Button from './Button';

const Hero = ({ heading, subheading, description, btn1Name, btn2Name }) => {
  return (
    <div className="flex items-center bg-image bg-no-repeat bg-cover bg-fixed">
      <div className="ml-[8%] mt-[15%] ">
        <h1 className=" text-2xl font-bold uppercase py-8">{heading}</h1>
        <h2 className="text-[40px] font-bold">{subheading}</h2>
        <p className="max-w-[600px] leading-9 mt-[20px]">{description}</p>
        <div className="flex items-center gap-2 mt-[30px] mb-[60px]">
          <Button name={btn1Name} />
          <Button kind={'secondary'} name={btn2Name} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
