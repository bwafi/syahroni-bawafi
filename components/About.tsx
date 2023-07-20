import Image from "next/image";
import me from "../public/image/me.jpg";
import React from "react";

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
    <section className="py-28 w-full flex flex-col px-10">
      <h1 className="w-full flex items-center relative gap-3 text-lightes-slate text-3xl font-calibre font-semibold before:content-['01.'] before:relative before:bottom-1 before:text-green before:font-sfMono before:text-lg before:font-normal after:content-[''] after:block after:relative after:h-[2px] after:w-4/12 after:bg-lightes-navy">
        About me
      </h1>
      <div className="flex gap-10">
        <div className="text-slate my-5 w-7/12">
          <p className="text-xl leading-tight mb-4">
            I am a passionate Front-end Developer with a strong determination to
            excel in the world of web development. Self-motivated and driven, I
            have honed my skills through self-directed learning, exploring the
            latest trends, and mastering various front-end technologies on my
            own.
          </p>
          <p className="text-xl leading-tight mb-4">
            My journey as an autodidact in web development has been a rewarding
            experience, as it allowed me to continuously challenge myself and
            stay curious about emerging technologies and best practices. From
            building interactive user interfaces to optimizing website
            performance, I take pride in creating seamless and visually
            appealing digital experiences.
          </p>
          <p className="text-xl leading-tight mb-4">
            Throughout my learning journey, I have come to understand the
            importance of user-centric design and accessibility. I am committed
            to crafting websites that are not only visually stunning but also
            intuitive and inclusive for all users.
          </p>
          <p className="text-xl leading-tight mb-2">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="grid grid-cols-2 font-sfMono text-[13px] gap-1">
            {skills.map((skill, index) => (
              <li key={index} className="list relative pl-4">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[300px] h-[300px]">
          <Image
            src={"/image/me.jpg"}
            alt="Syahroni Bawafi"
            width={300}
            height={300}
            className="rounded mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
