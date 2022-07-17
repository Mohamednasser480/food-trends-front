import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { SiVisa, SiMastercard } from 'react-icons/si';
import { BsPaypal } from 'react-icons/bs';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#f0efea]">
      <div className="container py-14 ">
        <div className="text-base-400 grid gap-4 text-sm font-bold sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center sm:text-left ">
            <h1 className="font-worthbites-rough text-4xl font-medium tracking-wider text-primary">
              INFORMATION
            </h1>
            <p className="py-1">test@gmail.com</p>
            <p className="py-1">(+2) 01112405807</p>
            <p className="py-1">14 Jamal Abd-Nasser St. 6th Octber city</p>
            {/* <SoicalIcons /> */}
          </div>
          <div className="grid gap-1 text-center sm:text-left">
            <h1 className="font-worthbites-rough text-4xl font-medium text-primary">ABOUT</h1>
            <Link to={'/about'} className="py-1">
              About Food Trends
            </Link>
            <Link to={'/'} className="py-1">
              Careers
            </Link>
            <Link to={'/contact'} className="py-1">
              Our location
            </Link>
            <Link to={'/'} className="py-1">
              Reviews
            </Link>
            <Link to={'/'} className="py-1">
              Our Blog
            </Link>
          </div>
          <div className="grid gap-1 text-center sm:text-left">
            <h1 className="text-4xl font-medium text-primary">SUPPORT</h1>
            <Link to={'/'} className="py-1">
              FAQ
            </Link>
            <Link to={'/'} className="py-1">
              Look up Product
            </Link>
            <Link to={'/'} className="py-1">
              Become a vendor
            </Link>
            <Link to={'/'} className="py-1">
              Returns
            </Link>
            <Link to={'/'} className="py-1">
              Shipping & Delivery
            </Link>
          </div>
          <div className="grid gap-1 text-center sm:text-left ">
            <h1 className="text-4xl font-medium text-primary">NEWSLETTER</h1>
            <p className="py-2">Give your inbox some love with new products, tips, & more.</p>
            <form action="" className="mt-4">
              <div className="flex rounded-md bg-[#f2cf79] p-2">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-11/12 bg-transparent font-medium placeholder:text-black "
                />
                <button className="flex-end">
                  <HiOutlineArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="py-5 text-center">
        <p className="">Accepted payments</p>
        <ul className="flex items-center justify-center">
          <li className="px-2">
            <SiVisa size={'36px'} color={'#1434CB'} />
          </li>
          <li className="px-2">
            <SiMastercard size={'36px'} color={'#EB001B'} />
          </li>
          <li className="px-2">
            <BsPaypal size={'32px'} color={'#00457C'} />
          </li>
        </ul>
        <p>
          <span>&#169;</span>
          Food Trends 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
