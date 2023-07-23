import { navLinks } from "@/utils/Links";
import Link from "next/link";
import React from "react";

interface link {
  name: string;
  url: string;
}

const Nav = () => {
  return (
    <header className="w-full mx-auto fixed top-0 bg-navy left-0 z-50">
      <nav className="w-full mx-auto py-5 px-6 lg:px-12 flex justify-between items-center">
        <div>
          <h1 className="text-green text-3xl font-sfMono font-semibold">SB</h1>
        </div>
        <div className="hidden md:flex gap-7 items-center">
          <ul className="flex gap-5">
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
          <div>
            <button className="text-green font-sfMono bg-transparent border border-green py-1.5 px-4 rounded text-sm small-button  hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 ease-button">
              Resume
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
