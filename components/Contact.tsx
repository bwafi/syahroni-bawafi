import React from "react";

const Contact = () => {
  return (
    <section className="w-full mx-auto my-40 text-center px-64">
      <h3 className="text-green font-sfMono before:content-['04.'] before:mr-0.5">
        What's Next?
      </h3>
      <h1 className="text-6xl font-calibre font-semibold my-5">Get in Touch</h1>
      <p className="font-calibre text-xl text-slate">
        I'm actively seeking new opportunities and my inbox is eagerly open. If
        you have any questions or would like to explore potential
        collaborations, I'd love to hear from you! Feel free to reach me, and
        I'll do my best to respond promptly.
      </p>
      <button className="small-button my-14 font-sfMono text-green border border-green py-3 px-5 rounded hover:-translate-x-1 hover:-translate-y-1 transition-all ease-button">
        <a href="mailto:syahronibwf@gmail.com" target="_blank">
          Say Hello
        </a>
      </button>
    </section>
  );
};

export default Contact;