"use client";
import { navLinks } from "@/utils/Links";
import React, { useEffect, useState } from "react";
import HumburgerMenu from "./ui/HumburgerMenu";
import Menu from "./ui/Menu";

interface link {
  name: string;
  url: string;
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFixed, setIsFixed] = useState<boolean>(true);
  const [currentScroll, setCurrentScroll] = useState<number>(0);

  useEffect(() => {
    const handlerScroll = () => {
      const scroll = window.scrollY;
      setIsFixed(scroll < currentScroll);
      setCurrentScroll(scroll);
    };
    window.addEventListener("scroll", handlerScroll);

    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, [isFixed, currentScroll]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed w-full mx-auto top-0 bg-navy/10 backdrop-blur left-0 z-50 transition-all ${
        isFixed && currentScroll > 0
          ? "translate-y-0 shadow-lg"
          : currentScroll === 0
          ? ""
          : "-translate-y-20 shadow-lg"
      } ${isOpen ? "backdrop-filter-none" : ""} `}>
      <nav className="w-full mx-auto py-3 md:py-5 px-6 lg:px-12 flex justify-between items-center">
        <div className="z-50">
          <h1 className="text-green text-3xl font-sfMono font-semibold">SB</h1>
        </div>
        <div className="hidden md:flex gap-7 items-center">
          <ul className="flex gap-5">
            {navLinks.map((navlink: link, index: number) => (
              <li
                key={index}
                className="text-sm font-sfMono hover:text-green transition-colors ease-button">
                <a href={navlink.url}>
                  <span className="text-green mr-0.5">0{index + 1}.</span>
                  {navlink.name}
                </a>
              </li>
            ))}
          </ul>

          <div>
            <button className="text-green font-sfMono bg-transparent border border-green py-1.5 px-4 rounded text-sm small-button  hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 ease-button">
              Resume
            </button>
          </div>
        </div>

        <HumburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />

        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </header>
  );
};

export default Nav;
