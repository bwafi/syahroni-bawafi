"use client";
import Image from "next/image";
import React from "react";
import Title from "./ui/Title";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "Tailwind CSS",
    "TypeScript",
    "Javascript (ES6)",
    "React Js",
    "React Native",
    "Next Js",
    "Redux Toolkit",
    "GO-Language",
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Mysql",
    "Docker",
    "Linux"
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
            Hello! My name is Syahroni Bawafi, and I am a passionate Full Stack Developer committed to excelling in web development. Through self-motivation and continuous learning, I've honed my skills in both front-end and back-end technologies, staying up-to-date with the latest trends.
          </p>
          <p className="text-lg md:text-xl leading-tight mb-4">
            My journey as an autodidact has allowed me to build interactive user interfaces and develop robust back-end systems. I take pride in creating seamless, efficient, and user-centric digital experiences that are not only visually appealing but also secure and accessible.
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
