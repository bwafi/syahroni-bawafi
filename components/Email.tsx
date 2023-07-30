"use client";
import React from "react";
import { motion } from "framer-motion";

const Email = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.3, ease: [0.645, 0.045, 0.355, 1], duration: 0.3 }}
      className="fixed hidden md:flex flex-col bottom-0 right-8 lg:right-11">
      <div className="flex flex-col items-center gap-8 text-light-slate after:content-[''] after:block  after:h-32 after:w-[1px] after:bg-light-slate after:bottom-0">
        <a
          href="mailto:syahronibwf@gmail.com"
          className="[writing-mode:vertical-lr] font-sfMono text-sm tracking-widest hover:text-green hover:-translate-y-1 transition-all">
          syahronibwf@gmail.com
        </a>
      </div>
    </motion.div>
  );
};

export default Email;
