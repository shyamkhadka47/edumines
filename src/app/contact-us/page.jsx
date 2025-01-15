'use client';
import Input from '@/components/Input';
import React from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Textarea from '@/components/TextArea';

const ContactUsPage = ({}) => {
  const FORM_VALIDATION = Yup.object({
    fullName: Yup.string().required().trim().min(3).max(50).label('Full Name'),
    email: Yup.string().email().required().trim().min(3).max(30).label('Email'),
    subject: Yup.string().required().trim().min(3).max(100).label('Subject'),
    message: Yup.string().required().trim().min(2).max(1000).label('Message'),
  }).required();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(FORM_VALIDATION),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <section className={`flex border border-black`}>
        {/* <div className="h-[500px] w-full relative">
          <Image src={'/color-pencil.jpeg'} alt="home" fill />
        </div> */}
        <div className="border border-black">
          <div className="grid">
            <h1>Contact Us</h1>
            <p>Let&apos;s talk</p>
            <p>About You</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border border-black rounded-lg p-4 w-80"
        >
          <Input
            name="fullName"
            title="full name"
            placeholder="Your Name"
            type={'text'}
            register={register}
            errMessage={errors?.fullName?.message}
            required
          />
          <Textarea
            name="message"
            title="message"
            placeholder="Drop your message here"
            register={register}
            errMessage={errors?.message?.message}
            required
          />
        </form>
      </section>
    </>
  );
};

export default ContactUsPage;
