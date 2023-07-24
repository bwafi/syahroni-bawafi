"use client";
import React from "react";
import Title from "./ui/Title";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import projectsData from "../libs/featured.json";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface projectItem {
  name: string;
  desc: string;
  image: string;
  techs: string[];
  github: string;
  url: string;
}

const Featured = () => {
  const projects: projectItem[] = projectsData.projects;
  return (
    <section className="w-full my-10 mx-auto md:px-5 ">
      <Title index="02.">Some Things I’ve Built</Title>
      <ul className="mt-5 flex flex-col gap-32">
        {projects.map((project, index: number) => (
          <li
            key={index}
            className="w-full grid grid-cols-12 items-center group">
            <div className="relative col-start-6 col-end-13 group-even:col-start-1 group-even:col-end-8 text-right group-even:text-left row-start-1">
              <p className="text-sm font-sfMono text-green">Featured Project</p>
              <h1 className="text-3xl font-semibold my-3 ">
                <a href={project.url} className="hover:text-green">
                  {project.name}
                </a>
              </h1>
              <div className="bg-light-navy rounded p-5 z-[3] relative navy-shadow">
                <p className="text-light-slate text-lg ">{project.desc}</p>
              </div>
              <ul className="flex justify-end group-even:justify-start gap-5 flex-wrap my-5 text-light-slate font-sfMono text-sm z-[3]">
                {project.techs.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <div className="flex text-2xl group-even:justify-start justify-end gap-5 text-light-slate">
                <a href={project.github} className="hover:text-green">
                  <FiGithub />
                </a>
                <a href={project.url} className="hover:text-green">
                  <FiExternalLink />
                </a>
              </div>
            </div>
            <div className="group w-full h-full col-start-1 col-end-8 group-even:col-start-6 group-even:col-end-13 z-[1] relative row-start-1 row-end-2">
              <a
                href={project.url}
                className="relative img-bg_featured block w-full h-full bg-green mix-blend-screen">
                <Image
                  src={project.image}
                  alt="Quran Portal"
                  width={600}
                  height={300}
                  className="relative h-full w-full navy-shadow mix-blend-multiply grayscale contrast-90 brightness-90 group-hover:filter-none group-hover:mix-blend-normal"
                />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Featured;
