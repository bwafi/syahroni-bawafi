import React, { ReactNode } from "react";

interface titleType {
  index: string;
  children: ReactNode;
}

const Title = ({ index, children }: titleType) => {
  return (
    <h1 className="w-full flex items-center relative gap-3 text-lightes-slate text-[clamp(26px,5vw,32px)] font-calibre font-semibold after:content-[''] after:block after:relative after:h-[2px] after:w-4/12 after:bg-lightes-navy">
      <span className="font-sfMono text-lg relative bottom-1 text-green font-normal">
        {index}
      </span>
      {children}
    </h1>
  );
};

export default Title;
