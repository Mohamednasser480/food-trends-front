import React from 'react';
import Navbar, { DashbaordNavbar } from './Navbar';
import {
  FaShoppingBag,
  FaAngleRight,
  FaShoppingCart,
  FaCommentAlt,
  FaPlusSquare,
  FaAngleLeft,
  FaStar,
  FaHistory,
} from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';
import { GrDeliver } from 'react-icons/gr';
import { AiOutlineTransaction } from 'react-icons/ai';
import { Route, Routes } from 'react-router-dom';
import { Home, AccountSettings, Reviews, ReviewDetail, AddProduct } from '../../routes/vendor';

const links = [
  {
    text: 'dashboard',
    icon: <MdDashboard className="mx-3" />,
    link: '/',
  },
  {
    text: 'Products',
    icon: <FaShoppingBag className="mx-3" />,
    link: '/',
  },
  {
    text: 'reviews',
    icon: <FaCommentAlt className="mx-3" />,
    link: '/',
  },
  {
    text: 'orders',
    icon: <FaShoppingCart className="mx-3" />,
    link: '/',
  },
  {
    text: 'add product',
    icon: <FaPlusSquare className="mx-3" />,
    link: '/',
  },
  {
    text: 'transactions',
    icon: <AiOutlineTransaction className="mx-3 " />,
    link: '/',
  },
];
const VendorLayout = (props) => {
  return (
    <>
      <DashbaordNavbar links={links} />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<AddProduct />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:id" element={<ReviewDetail />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          {props.children}
        </Routes>
      </main>
    </>
  );
};

export default VendorLayout;
