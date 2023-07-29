import React from "react";

const Hero = () => {
  return (
    <section id="home" className="w-full pt-28 md:pt-32">
      <div>
        <p className="text-green font-sfMono mb-4 md:mb-8 text-sm sm:text-base">
          Hi, my name is
        </p>
        <h1 className="big-heading leading-none text-lightes-slate font-calibre font-semibold">
          Syahroni Bawafi.
        </h1>
        <h2 className="big-heading leading-none text-slate font-semibold font-calibre">
          I build things for the web.
        </h2>
      </div>
      <p className="w-full lg:w-7/12 text-slate text-lg md:text-[20px] leading-[26px] font-calibre mt-5">
        I'm a Front-nd Developer, I'm dedicated to building amazing digital
        products. I am passionate about contributing to innovative projects and
        ready to learn and grow in my career as a Software Software Engineering
      </p>
      <button className="mt-10 md:mt-16 font-sfMono small-button text-sm rounded text-green py-3 px-8 border border-green hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 ease-button">
        Download My Resume / CV
      </button>
    </section>
  );
};

export default Hero;
