import React, { Dispatch, FC, SetStateAction } from "react";
import { navLinks } from "@/utils/Links";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface link {
  name: string;
  url: string;
}

interface menuType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Menu: FC<menuType> = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`absolute md:static left-0 top-0 w-full md:w-fit h-screen md:h-fit bg-navy/30 backdrop-blur-sm`}>
          <motion.div
            initial={{ x: 10 }}
            animate={{ x: 0 }}
            exit={{ x: 10 }}
            className="flex flex-col md:flex-row justify-center absolute md:static right-0 w-8/12 md:w-fit h-screen md:h-fit bg-light-navy md:bg-transparent gap-7 items-center">
            <ul className="flex gap-12 flex-col md:flex-row">
              {navLinks.map((navlink: link, index: number) => (
                <li
                  key={index}
                  className="text-sm font-sfMono hover:text-green transition-colors ease-button">
                  <Link href={navlink.url}>
                    <span className="text-green mr-0.5">0{index + 1}.</span>
                    {navlink.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-5 md:mt-0">
              <button className="text-green font-sfMono bg-transparent border border-green py-2 px-8 md:py-1.5 md:px-4 rounded text-sm small-button hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 ease-button">
                Resume
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
