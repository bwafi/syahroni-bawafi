"use client";
import React, { useState } from "react";
import HumburgerMenu from "./ui/HumburgerMenu";
import Menu from "./ui/Menu";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="w-full mx-auto fixed top-0 bg-navy left-0 z-50">
      <nav className="w-full mx-auto py-5 px-6 lg:px-12 flex justify-between items-center">
        <div>
          <h1 className="text-green text-3xl font-sfMono font-semibold">SB</h1>
        </div>
        <HumburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />

        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </header>
  );
};

export default Nav;
