"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface titleType {
  index: string;
  children: ReactNode;
}

const Title = ({ index, children }: titleType) => {
  return (
    <motion.h1
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: [0.645, 0.045, 0.355, 1], duration: 0.3 }}
      className="w-full whitespace-nowrap flex items-center relative gap-3 text-lightes-slate text-[clamp(26px,5vw,32px)] font-calibre font-semibold after:content-[''] after:block after:relative after:h-[2px] after:w-full after:bg-lightes-navy">
      <span className="font-sfMono text-lg relative bottom-1 text-green font-normal">
        {index}
      </span>
      {children}
    </motion.h1>
  );
};

export default Title;
