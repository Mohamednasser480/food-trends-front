import React from "react";
import { Footer, Topbar } from "./";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
