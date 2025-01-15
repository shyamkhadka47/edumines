import React from "react";
import IconCard from "./IconCard";

const CourseAtGlance = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="mt-[30px]">
          <h1 className="text-[25px] font-semibold text-center">Courses</h1>
          <h2 className="text-[40px] font-bold text-center">
            Browse our Courses
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 mt-[30px] mb-[30px] overflow-hidden">
          <IconCard />
          <IconCard />
          <IconCard />
          <IconCard />
        </div>
      </div>
    </>
  );
};

export default CourseAtGlance;
