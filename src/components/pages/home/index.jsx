import React from 'react';
import Hero from '@/components/Hero';
import Chooseus from '@/components/pages/home/Chooseus';
import CourseAtGlance from '@/components/pages/home/CourseAtGlance';
import Testimonial from '@/components/pages/home/Testimonial';

const HomePage = () => {
  return (
    <>
      <Hero
        heading="WELCOME TO EDUCATION MINES"
        subheading="Best Online Education Expertise"
        description="Far far away, behind the word mountains, far from the countries
       Vokalia and Consonantia, there live the blind texts."
        btn1Name="Get Started Now!"
        btn2Name="View Course"
      />
      <Chooseus />
      <CourseAtGlance />
      <Testimonial />
    </>
  );
};

export default HomePage;
