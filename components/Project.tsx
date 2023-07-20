import React from "react";
import Title from "./ui/Title";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Project = () => {
  return (
    <section className="w-full my-10">
      <Title index="02.">Some Things I’ve Built</Title>
      <ul className="mt-10">
        <li className="flex relative w-full">
          <div className="max-w-3xl absolute">
            <Image
              src={"/projects/quran-portal.png"}
              alt="Quran Portal"
              width={600}
              height={300}
            />
          </div>
          <div className="absolute w-6/12 right-0 text-right">
            <h4 className="font-sfMono text-sm text-green mb-3">
              Featured Project
            </h4>
            <h1 className="font-calibre font-semibold text-3xl">
              Quran Portal
            </h1>
            <div className="bg-light-navy rounded-md shadow-navy py-4 px-6 my-3">
              <p className="text-lg text-light-slate leading-tight">
                A web based Quran app that uses the public API from ivory,
                equipped with several features such as dark theme, murottal,
                Indonesian translation, interpretation of surah/verses, and
                several other features
              </p>
            </div>
            <ul className="flex justify-end font-sfMono gap-5 text-sm text-light-slate">
              <li>Next Js</li>
              <li>Tailwind CSS</li>
              <li>Redux Toolkit</li>
            </ul>
            <div className="flex justify-end gap-5 mt-4">
              <a
                href=""
                className="text-lightes-slate text-xl hover:text-green transition-colors"
                target="_blank"
              >
                <FiGithub />
              </a>
              <a
                href=""
                className="text-lightes-slate text-xl hover:text-green transition-colors"
                target="_blank"
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Project;
