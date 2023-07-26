'use client';
import Image from 'next/image';
import React from 'react';
import DescriptionCard from '../../DescriptionCard';
import CountUp from 'react-countup';

const Chooseus = () => {
  return (
    <>
      <div className="flex-col md:flex md:flex-row items-center bg-white mt-[3%] overflow-hidden max-w-[1280px] mx-auto">
        <div className=" relative mt-[40px] ">
          <Image
            src={'/home/about.png'}
            alt="about"
            height={750}
            width={750}
            className=" "
            draggable={false}
          />
        </div>
        <div className="w-[750px] grid gap-4">
          <DescriptionCard
            icon={'/home/book.png'}
            title={'Online Courses'}
            description={
              'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
            }
          />
          <DescriptionCard
            icon={'/home/certificate.png'}
            title={'Earn a Certificate'}
            description={
              'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
            }
          />
          <DescriptionCard
            icon={'/home/albert.png'}
            title={'Learn With Expert'}
            description={
              'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
            }
          />
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[1280px] ml-[27%] mb-2 md:mx-auto md:flex items-center justify-between py-6">
          <div>
            <DescriptionCard
              icon={'/home/book.png'}
              varient={'secondary'}
              title={<CountUp start={0} end={3000} duration={2.75} />}
              description={'SUCCESS STORIES'}
            />
          </div>
          <div>
            <DescriptionCard
              icon={'/home/book.png'}
              varient={'secondary'}
              title={<CountUp start={0} end={3000} duration={2.75} />}
              description={'SUCCESS STORIES'}
            />
          </div>
          <div>
            <DescriptionCard
              icon={'/home/book.png'}
              varient={'secondary'}
              title={<CountUp start={0} end={3000} duration={2.75} />}
              description={'SUCCESS STORIES'}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chooseus;
