"use client";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ ease: [0.645, 0.045, 0.355, 1], duration: 0.3 }}
      id="contact"
      className="w-full mx-auto py-24 sm:py-32 text-center md:px-64">
      <h3 className="text-sm md:text-base text-green font-sfMono before:content-['04.'] before:mr-0.5">
        What's Next?
      </h3>
      <h1 className="text-4xl lg:text-6xl font-calibre font-semibold my-5">
        Get in Touch
      </h1>
      <p className="font-calibre text-lg sm:text-xl text-slate">
        I'm actively seeking new opportunities and my inbox is eagerly open. If
        you have any questions or would like to explore potential
        collaborations, I'd love to hear from you! Feel free to reach me, and
        I'll do my best to respond promptly.
      </p>
      <button className="small-button my-14 font-sfMono text-green border border-green py-3 px-5 rounded hover:-translate-x-1 hover:-translate-y-1 transition-all ease-button">
        <a href="mailto:syahronibwf@gmail.com" target="_blank">
          Say Hello
        </a>
      </button>
    </motion.section>
  );
};

export default Contact;
