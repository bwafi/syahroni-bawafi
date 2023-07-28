import React, { Dispatch, SetStateAction } from "react";

interface menuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const HumburgerMenu = ({ isOpen, setIsOpen }: menuProps) => {
  return (
    <button
      className="flex relative w-10 h-8 overflow-hidden"
      onClick={() => setIsOpen(!isOpen)}>
      <div className="absolute w-10 h-8 flex flex-col items-end justify-center gap-[8px] overflow-hidden">
        <div
          className={`w-full h-[2px] bg-green rounded-full origin-left transition-transform duration-300 ${
            isOpen ? "translate-x-10" : ""
          }`}></div>
        <div
          className={`w-10/12 h-[2px] bg-green rounded-full origin-left transition-transform duration-300 delay-100 ${
            isOpen ? "translate-x-10" : ""
          }`}></div>
        <div
          className={`w-8/12 h-[2px] bg-green rounded-full origin-left transition-transform duration-300 delay-200 ${
            isOpen ? "translate-x-10" : ""
          }`}></div>
      </div>

      <div
        className={`absolute flex flex-col items-center justify-center h-8 -translate-x-10 transition-all duration-300 ${
          isOpen && "translate-x-0 w-10"
        }`}>
        <div
          className={`absolute w-[25px] h-0.5 bg-green transition-all duration-300 delay-200 ${
            isOpen && "-rotate-45"
          }`}></div>
        <div
          className={`absolute w-[25px] h-0.5 bg-green transition-all duration-300 delay-200 ${
            isOpen && "rotate-45"
          }`}></div>
      </div>
    </button>
  );
};

export default HumburgerMenu;
