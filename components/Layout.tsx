import React, { ReactNode } from "react";
import Nav from "./Nav";
import Social from "./Social";
import Email from "./Email";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex mx-12 justify-between">
      <Nav />
      <Social />
      <Email />

      <div>{children}</div>
    </div>
  );
};

export default Layout;
