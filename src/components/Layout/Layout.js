import React from "react";
import { Footer, Header } from "./";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <main>
        <h1>Hello Layout Component!</h1>
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
