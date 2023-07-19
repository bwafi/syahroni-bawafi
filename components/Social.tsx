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
    <div className="fixed text-light-slate bottom-0 left-11">
      <ul className="flex flex-col items-center gap-6 text-xl after:content-[''] after:block  after:h-32 after:w-[1px] after:bg-light-slate after:bottom-0">
        <li>
          <FiGithub className="hover:text-green hover:-translate-y-1 transition-all duration-200" />
        </li>
        <li>
          <FiInstagram className="hover:text-green hover:-translate-y-1 transition-all duration-200" />
        </li>
        <li>
          <FiLinkedin className="hover:text-green hover:-translate-y-1 transition-all duration-200" />
        </li>
        <li>
          <FiTwitter className="hover:text-green hover:-translate-y-1 transition-all duration-200" />
        </li>
        <li>
          <FiFacebook className="hover:text-green hover:-translate-y-1 transition-all duration-200" />
        </li>
      </ul>
    </div>
  );
};

export default Social;
