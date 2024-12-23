"use client";
import React from "react";
import Title from "./ui/Title";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import projectsData from "../libs/featured.json";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { motion } from "framer-motion";

interface projectItem {
  name: string;
  desc: string;
  image: string;
  techs: string[];
  github?: string;
  url?: string;
}

const Featured = () => {
  const projects: projectItem[] = projectsData.projects;
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ ease: [0.645, 0.045, 0.355, 1], duration: 0.3 }}
      id="portfolio"
      className="w-full py-20 mx-auto lg:px-5 ">
      <Title index="02.">Some Things I’ve Built</Title>
      <ul className="my-8 flex flex-col gap-10 md:gap-32">
        {projects.map((project, index: number) => (
          <motion.li
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ease: [0.645, 0.045, 0.355, 1], duration: 0.3 }}
            key={index}
            className="w-full grid grid-cols-12 items-center group rounded">
            <div className="z-[5] md:z-auto relative col-start-1 md:col-start-7 col-end-13 md:group-even:col-start-1 md:group-even:col-end-7 md:text-right group-even:text-left row-start-1 p-6 md:p-0 navy-shadow md:shadow-none">
              <p className="text-sm font-sfMono text-green">Featured Project</p>
              <h1 className="small-heading font-semibold my-3 ">
                <a
                  href={project.url}
                  target="_blank"
                  className="hover:text-green">
                  {project.name}
                </a>
              </h1>
              <div className="md:bg-light-navy rounded md:p-5 z-10 relative navy-shadow">
                <ReactMarkdown
                  className="text-light-slate text-lg"
                  components={{
                    a: ({ node, ...props }) => (
                      <a
                        target="_blank"
                        className="text-green hover:border-b hover:border-b-green"
                        {...props}
                      />
                    ),
                  }}>
                  {project.desc}
                </ReactMarkdown>
              </div>
              <ul className="flex relative md:justify-end group-even:justify-start gap-x-5 flex-wrap my-5 text-light-slate font-sfMono text-[13px] md:text-sm z-[2]">
                {project.techs.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <div className="relative flex text-xl group-even:justify-start justify-start md:justify-end gap-5 z-[2]">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="hover:text-green">
                    <FiGithub />
                  </a>

                )}

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    className="hover:text-green">
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
            <div className="group/img w-full opacity-25 md:opacity-100 h-full col-start-1 col-end-13 md:col-end-8 md:group-even:col-start-6 md:group-even:col-end-13 z-[2] relative row-start-1 row-end-2">
              <a
                href={project.url}
                target="_blank"
                className="relative z-[1] md:z-0 img-bg_featured block w-full h-full align-middle bg-green">
                <Image
                  src={project.image}
                  alt="Quran Portal"
                  width={600}
                  height={300}
                  className="relative h-full w-full object-cover align-middle navy-shadow mix-blend-multiply grayscale contrast-100 brightness-50 md:brightness-90 group-hover/img:filter-none group-hover/img:mix-blend-normal"
                />
              </a>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Featured;
