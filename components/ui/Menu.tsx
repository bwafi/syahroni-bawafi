"use client";
import React, { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import { navLinks } from "@/utils/Links";
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
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlerOutSide = (event: MouseEvent) => {
      console.log(menuRef.current);
      console.log(menuRef.current?.contains(event.target as Node));
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Tambahkan event listener ke objek 'document'
    document.addEventListener("click", handlerOutSide);

    return () => {
      // Hapus event listener ketika komponen dibongkar (unmounted)
      document.removeEventListener("click", handlerOutSide);
    };
  }, [isOpen, setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed left-0 top-0 w-full h-screen bg-navy/50 backdrop-blur-sm z-[30]">
          <motion.div
            initial={{ x: 10 }}
            animate={{ x: 0 }}
            exit={{ x: 10 }}
            ref={menuRef}
            className="flex flex-col justify-center absolute right-0 w-8/12 h-screen bg-light-navy gap-7 items-center">
            <ul className="flex gap-12 flex-col">
              {navLinks.map((navlink: link, index: number) => (
                <li
                  key={index}
                  className="text-sm font-sfMono hover:text-green transition-colors ease-button">
                  <a href={navlink.url} onClick={() => setIsOpen(false)}>
                    <span className="text-green mr-0.5">0{index + 1}.</span>
                    {navlink.name}
                  </a>
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
