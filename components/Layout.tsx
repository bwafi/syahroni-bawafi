import React, { ReactNode } from "react";
import Nav from "./Nav";
import Social from "./Social";
import Email from "./Email";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full mx-auto flex flex-col min-h-screen">
      <Nav />
      <Social />
      <Email />

      <div className="grid flex-1 place-items-center min-h-full">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
