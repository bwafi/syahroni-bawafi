"use client";
import Image from "next/image";
import React from "react";
import Title from "./ui/Title";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "TypeScript",
    "Javascript (ES6)",
    "React Js",
    "Next Js",
    "Redux Toolkit",
  ];

  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ ease: [0.645, 0.045, 0.355, 1], duration: 0.3 }}
      id="about"
      className="py-20 sm:py-28 w-full flex flex-col lg:px-14 mx-auto">
      <Title index="01.">About me</Title>
      <div className="flex flex-col md:flex-row gap-13">
        <div className="text-slate my-5 w-full md:w-8/12 lg:w-7/12">
          <p className="text-lg md:text-xl leading-tight mb-4">
            I am a passionate Front-end Developer with a strong determination to
            excel in the world of web development. Self-motivated and driven, I
            have honed my skills through self-directed learning, exploring the
            latest trends, and mastering various front-end technologies on my
            own.
          </p>
          <p className="text-lg md:text-xl leading-tight mb-4">
            My journey as an autodidact in web development has been a rewarding
            experience, as it allowed me to continuously challenge myself and
            stay curious about emerging technologies and best practices. From
            building interactive user interfaces to optimizing website
            performance, I take pride in creating seamless and visually
            appealing digital experiences.
          </p>
          <p className="text-lg md:text-xl leading-tight mb-4">
            Throughout my learning journey, I have come to understand the
            importance of user-centric design and accessibility. I am committed
            to crafting websites that are not only visually stunning but also
            intuitive and inclusive for all users.
          </p>
          <p className="text-lg md:text-xl leading-tight mb-2">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="grid grid-cols-2 font-sfMono text-[13px] gap-1 ">
            {skills.map((skill, index) => (
              <li key={index} className="list relative pl-4">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="img-bg mx-auto img-border rounded group relative md:mt-10 aspect-square max-w-[300px] w-9/12 md:w-5/12">
          <Image
            src={"/image/me.jpg"}
            alt="Syahroni Bawafi"
            width={300}
            height={300}
            className="rounded mx-auto mix-blend-multiply grayscale contrast-100 absolute group-hover:filter-none group-hover:mix-blend-normal group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-300 ease-button"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
