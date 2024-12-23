"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  const itemTransition = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="home" className="w-full pt-28 md:pt-32">
      <div>
        <motion.p
          variants={itemTransition}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{
            delay: 0.7,
            ease: [0.645, 0.045, 0.355, 1],
            duration: 0.3,
          }}
          className="text-green font-sfMono mb-4 md:mb-8 text-sm sm:text-base">
          Hi, my name is
        </motion.p>
        <motion.div
          variants={itemTransition}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{
            delay: 0.8,
            ease: [0.645, 0.045, 0.355, 1],
            duration: 0.3,
          }}>
          <TypeAnimation
            sequence={[1500, "Syahroni bwaf", 200, "Syahroni Bawafi."]}
            wrapper="h1"
            speed={20}
            cursor={true}
            className="big-heading leading-none text-lightes-slate
          font-calibre font-semibold w-fit h-fit "
          />
        </motion.div>
        <motion.h2
          variants={itemTransition}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{
            delay: 0.9,
            ease: [0.645, 0.045, 0.355, 1],
            duration: 0.3,
          }}
          className="big-heading leading-none text-slate font-semibold font-calibre">
          I build things for the web.
        </motion.h2>
      </div>
      <motion.p
        variants={itemTransition}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{
          delay: 1,
          ease: [0.645, 0.045, 0.355, 1],
          duration: 0.3,
        }}
        className="w-full lg:w-7/12 text-slate text-lg md:text-[20px] leading-[26px] font-calibre mt-5">
        I am a Fullstack Developer dedicated to building amazing digital products. Passionate about contributing to innovative projects, I am eager to learn and grow in my career as a Software Engineer.
      </motion.p>

      <motion.div
        variants={itemTransition}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{
          delay: 1.1,
          ease: [0.645, 0.045, 0.355, 1],
          duration: 0.3,
        }}>
        <a href="/cv.pdf" target="_blank">
          <button className="mt-10 md:mt-16 font-sfMono small-button text-sm rounded text-green py-3 px-8 border border-green hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 ease-button">
            Download My Resume / CV
          </button>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
