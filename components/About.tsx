import Image from "next/image";
import React from "react";
import Title from "./ui/Title";

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
    <section className="py-36 w-full flex flex-col md:px-14">
      <Title index="01.">About me</Title>
      <div className="flex flex-col gap-14">
        <div className="text-slate my-5 w-full md:w-7/12">
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
        <div className="img-bg mx-auto img-border rounded group relative md:mt-10 aspect-square w-[180px] md:w-[300px]">
          <Image
            src={"/image/me.jpg"}
            alt="Syahroni Bawafi"
            width={300}
            height={300}
            className="rounded mix-blend-multiply grayscale contrast-100 absolute group-hover:filter-none group-hover:mix-blend-normal group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-300 ease-button"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
