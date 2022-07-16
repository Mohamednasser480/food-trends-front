import React from "react";
import { Footer } from "./";
const Layout = (props) => {
  return (
    <div>
      {/*Navbar*/}
      <main>
        <h1>Hello Layout Component!</h1>
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
sdsdsd
