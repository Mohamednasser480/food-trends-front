import React from 'react';
import { Footer, Topbar, ScrollUp } from './';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <ScrollUp />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
