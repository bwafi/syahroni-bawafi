import React from "react";
import {
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiTwitter,
  FiFacebook,
} from "react-icons/fi";

const Social = () => {
  return (
    <div className="fixed hidden md:block text-light-slate bottom-0 left-11">
      <ul className="flex flex-col items-center gap-6 text-xl after:content-[''] after:block  after:h-32 after:w-[1px] after:bg-light-slate after:bottom-0">
        <li>
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
          <a
            href="https://www.linkedin.com/in/syahroni-bawafi-93b422265/"
            target="_blank">
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
    </div>
  );
};

export default Social;
