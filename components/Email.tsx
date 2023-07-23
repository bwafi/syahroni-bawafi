import React from "react";

const Email = () => {
  return (
    <div className="fixed hidden md:flex flex-col bottom-0 right-11">
      <div className="flex flex-col items-center gap-8 text-light-slate after:content-[''] after:block  after:h-32 after:w-[1px] after:bg-light-slate after:bottom-0">
        <a
          href="mailto:syahronibwf@gmail.com"
          className="[writing-mode:vertical-lr] font-sfMono text-sm tracking-widest hover:text-green hover:-translate-y-1 transition-all">
          syahronibwf@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Email;
