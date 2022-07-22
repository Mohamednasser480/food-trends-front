import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { SiVisa, SiMastercard } from 'react-icons/si';
import { BsPaypal } from 'react-icons/bs';

import { Link } from 'react-router-dom';
import Typography from '../UI/Typography';

const Footer = () => {
  return (
    <footer className="bg-[#f0efea]"  data-aos="fade" >
      <div className="container py-14 ">
        <div className="grid gap-4 text-sm font-medium text-base-400  sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col text-center sm:text-left  ">
            <Typography component={'h4'} className={'text-primary'}>
              information
            </Typography>

            <a href="mailto:test@gmail.com" className="py-2 transition-colors hover:text-black">
              test@gmail.com
            </a>
            <a href="telto:00201112405807" className="py-2 transition-colors hover:text-black">
              (+2) 01112405807
            </a>
            <p className="py-2 transition-colors hover:text-black">
              14 Jamal Abd-Nasser St. 6th Octber city
            </p>
            {/* <SoicalIcons /> */}
          </div>
          <div className="grid gap-1 text-center sm:text-left">
            <Typography component={'h4'} className={'text-primary'}>
              about
            </Typography>
            <Link to={'/about'} className="py-1 transition-colors hover:text-black">
              About Food Trends
            </Link>
            <Link to={'/'} className="py-1 transition-colors hover:text-black">
              Careers
            </Link>
            <Link to={'/contact'} className="py-1 transition-colors hover:text-black">
              Our location
            </Link>
            <Link to={'/'} className="py-1 transition-colors hover:text-black">
              Reviews
            </Link>
            <Link to={'/'} className="py-1 transition-colors hover:text-black">
              Our Blog
            </Link>
          </div>
          <div className="grid gap-1 text-center sm:text-left">
            <Typography component={'h4'} className={'text-primary'}>
              support
            </Typography>

            <Link to={'/'} className="py-1 hover:text-black transition-colors">
              FAQ
            </Link>
            <Link to={'/'} className="py-1 hover:text-black transition-colors">
              Look up Product
            </Link>
            <Link to={'/'} className="py-1 hover:text-black transition-colors">
              Become a vendor
            </Link>
            <Link to={'/'} className="py-1 hover:text-black transition-colors">
              Returns
            </Link>
            <Link to={'/'} className="py-1 hover:text-black transition-colors">
              Shipping & Delivery
            </Link>
          </div>
          <div className="grid gap-1 text-center sm:text-left ">
            <Typography component={'h4'} className={'text-primary'}>
              newsletter
            </Typography>

            <p className="py-2">Give your inbox some love with new products, tips, & more.</p>
            <form action="" className="mt-4 text-black">
              <div className="flex rounded-md bg-secondary-400 p-3">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-11/12 bg-transparent px-4 font-medium placeholder:text-black focus:outline-none"
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
