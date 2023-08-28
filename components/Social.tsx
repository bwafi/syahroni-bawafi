"use client";
import React from "react";
import {
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiTwitter,
  FiFacebook,
} from "react-icons/fi";
import { motion } from "framer-motion";

const Social = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1.3, ease: [0.645, 0.045, 0.355, 1], duration: 0.3 }}
      className="hidden md:block fixed text-light-slate bottom-0 left-8 lg:left-11">
      <ul className="flex flex-col items-center gap-6 text-xl after:content-[''] after:block  after:h-32 after:w-[1px] after:bg-light-slate after:bottom-0">
        {" "}
        <li>
          {" "}
          <a href="https://github.com/bwafi" target="_blank">
            <FiGithub className="hover:text-green hover:-translate-y-1 transition-all duration-200" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/itssyahroni/" target="_blank">
            <FiInstagram className="hover:text-green hover:-translate-y-1 transition-all duration-200" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/syahroni-bawafi" target="_blank">
            <FiLinkedin className="hover:text-green hover:-translate-y-1 transition-all duration-200" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/itssyahroni" target="_blank">
            <FiTwitter className="hover:text-green hover:-translate-y-1 transition-all duration-200" />
          </a>
        </li>
        <li>
          <a
            href="https://web.facebook.com/profile.php?id=100016577130120"
            target="_blank">
            <FiFacebook className="hover:text-green hover:-translate-y-1 transition-all duration-200" />
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default Social;
