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
  console.log(projects);
  return (
    <section className="w-full my-10 mx-auto px-5 ">
      <Title index="02.">Some Things I’ve Built</Title>
      <ul className="flex flex-col gap-24 mt-10">
        {projects.map((project, index) => (
          <li
            key={index}
            className={`flex relative items-center w-full ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}>
            <div className="max-w-3xl bg-green">
              <div className="w-full mix-blend-multiply grayscale contrast-100 brightness-40">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={300}
                />
              </div>
            </div>
            <div
              className={`absolute w-6/12 ${
                index % 2 === 0 ? "text-right right-0" : "text-left left-0"
              }`}>
              <h4 className="font-sfMono text-sm text-green mb-3">
                Featured Project
              </h4>
              <h1 className="font-calibre font-semibold text-3xl hover:text-green transition-colors">
                {project.name}
              </h1>
              <div className="bg-light-navy rounded-md shadow-navy py-4 px-6 my-3">
                <ReactMarkdown
                  className="text-lg leading-tight"
                  components={{
                    a: ({ node, ...props }) => (
                      <a
                        className="text-green hover:border-b hover:border-b-green"
                        target="_blank"
                        {...props}
                      />
                    ),
                  }}>
                  {project.desc}
                </ReactMarkdown>
              </div>
              <ul
                className={`flex font-sfMono gap-5 text-sm text-light-slate ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}>
                {project.techs.map((tech: string, index: number) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <div
                className={`flex gap-5 mt-4 ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}>
                <a
                  href={project.github}
                  className="text-lightes-slate text-xl hover:text-green transition-colors"
                  target="_blank">
                  <FiGithub />
                </a>
                <a
                  href={project.url}
                  className="text-lightes-slate text-xl hover:text-green transition-colors"
                  target="_blank">
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Featured;
