import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { profile, profile2 } from "@/assets/img";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl 
    px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{ once: true }}
        src="/assets/img/profile.webp"
        alt="Profile Image"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 mt-8 rounded-full object-cover md:rounded-lg md:w-64 md:h-94 xl:w-[350px] xl:h-[400px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className=" underline decoration-[#F7AB0A]/60">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I&apos;m Dimas. Here&apos;s a little bit about me. I&apos;ve been
          coding since i&apos;m in college for 2 years and learning many
          language program&apos;s such as PHP,JS,TS and Dart, learn many
          framework such as Laravel, CodeIgniter, NextJS, ReactJS, React Native,
          Flutter. I&apos;ve been graduate from Polytechnic State of Malang with
          GPA 3.60.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
