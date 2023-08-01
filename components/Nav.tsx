"use client";
import { navLinks } from "@/utils/Links";
import React, { useEffect, useState } from "react";
import HumburgerMenu from "./ui/HumburgerMenu";
import Menu from "./ui/Menu";
import { motion } from "framer-motion";

interface link {
  name: string;
  url: string;
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFixed, setIsFixed] = useState<boolean>(true);
  const [currentScroll, setCurrentScroll] = useState<number>(0);

  const itemTransition = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

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
        <motion.div
          variants={itemTransition}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{
            ease: [0.645, 0.045, 0.355, 1],
            duration: 0.3,
          }}
          className="z-50">
          <h1 className="text-green text-3xl font-sfMono font-semibold">
            <a href="/">SB</a>
          </h1>
        </motion.div>
        <div className="hidden md:flex gap-7 items-center">
          <ul className="flex gap-5">
            {navLinks.map((navlink: link, index: number) => (
              <motion.li
                variants={itemTransition}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  ease: [0.645, 0.045, 0.355, 1],
                  duration: 0.3,
                }}
                key={index}
                className="text-sm font-sfMono hover:text-green transition-colors ease-button">
                <a href={navlink.url}>
                  <span className="text-green mr-0.5">0{index + 1}.</span>
                  {navlink.name}
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.div
            variants={itemTransition}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{
              delay: navLinks.length * 0.1,
              ease: [1.645, 0.045, 0.355, 1],
              duration: 0.3,
            }}>
            <button className="text-green font-sfMono bg-transparent border border-green py-1.5 px-4 rounded text-sm small-button  hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 ease-button">
              Resume
            </button>
          </motion.div>
        </div>

        <motion.div
          variants={itemTransition}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
            ease: [0.645, 0.045, 0.355, 1],
            duration: 0.3,
          }}
          className="block md:hidden">
          <HumburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </motion.div>

        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </header>
  );
};

export default Nav;
