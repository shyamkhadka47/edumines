import Image from 'next/image';
import React from 'react';
import Button from './Button';
import Link from 'next/link';

const AboutUsLeftToRightCard = () => {
  return (
    <div>
      <h1 className="text-8xl font-bold capitalize text-center my-[50px]">
        About Us
      </h1>
      <div className="max-w-[1280px] flex flex-col lg:flex-row items-center justify-between gap-8 mx-auto mt-[100px] mb-[100px] px-12">
        <div>
          <Image
            src={'/home/teaching.svg'}
            width={500}
            height={500}
            alt="Teaching teaching Student"
          ></Image>
        </div>
        <div className="md:max-w-[50%] ">
          <h1 className="text-4xl font-bold">Scholarships</h1>
          <p className="mt-[25px]">
            Abroad Institute has helped many students to secure scholarships,
            assistantships, and funding. Scholarship application and acceptance
            are very effective intensive pursuits. We accurately provide the
            scholarship application deadline, eligibility, and other information
            with regard to securing scholarships for the students.
          </p>
          <p className="mt-[25px]">
            Abroad Institute has successfully guided many students to succeed
            and secured millions of dollars worth of scholarships.
          </p>
          <Link href={'/'}>
            <Button kind={'primary'} name={'Learn More'} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsLeftToRightCard;
