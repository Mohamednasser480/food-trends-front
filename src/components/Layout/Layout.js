import React from 'react';
import { Footer, Topbar, ScrollUp } from './';
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Topbar />
      <Navbar />
      <ScrollUp />
      <main className='grow'>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
