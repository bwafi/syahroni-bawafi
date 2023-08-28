import React from "react";
import {
  FiLinkedin,
  FiGithub,
  FiInstagram,
  FiTwitter,
  FiFacebook,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="text-slate py-5">
      <div className="text-light-slate mb-3 md:hidden">
        <ul className="flex justify-center gap-6 text-xl">
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
              href="https://www.linkedin.com/in/syahroni-bawafi"
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
      <p>
        Copyright &copy; 2023{" "}
        <a
          href="https://github.com/bwafi/syahroni-bawafi"
          className="text-green hover:border-b border-b-green transition-all ease-button">
          Syahroni Bawafi.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
