import Navbar from "@/components/Navbar";
import Image from "next/image";
import Button from "@/components/Button";
import DescriptionCard from "@/components/DescriptionCard";
import { AiFillBank, AiOutlineArrowRight } from "react-icons/ai";
import Hero from "@/components/Hero";
import Chooseus from "@/components/Chooseus";
import CourseAtGlance from "@/components/CourseAtGlance";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main >
      <Navbar />
      <Hero />
      <Chooseus />
      <CourseAtGlance />
      <Testimonial />
    </main>
  );
}
