import OurServicesCards from '@/components/OurServicesCards';
import { servicesdata } from '@/components/_mockData';
import React from 'react'

import Hero from '@/components/Hero';

const OurCoursesPage = () => {
  return (
    <div className=''>
    <Hero
        heading="WELCOME TO EDUCATION MINES"
        subheading="Best Online Education Expertise"
        description="Far far away, behind the word mountains, far from the countries
       Vokalia and Consonantia, there live the blind texts."
        btn1Name="Get Started Now!"
        btn2Name="View Course"
        bgImage="bg-image2"
        textColor="text-black"
      />
      <h1 className='text-[30px] font-semibold text-center py-[5%] underline capitalize '>we offer the best course in the industry</h1>
      <div className="  flex flex-col md:flex-row items-center justify-center max-w-[1280px]  gap-6 mx-auto mt-[30px] mb-[20px] flex-wrap ">
         {servicesdata.map((el, index) => {
          return (
            <OurServicesCards
              tcolor={"bg-primary-main"}
              key={index}
              heading={el.heading}
              content={el.content}
            />
          );
        })}
       
      </div>
    </div>
  )
}

export default OurCoursesPage
