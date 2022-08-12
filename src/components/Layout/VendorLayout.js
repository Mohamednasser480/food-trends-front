import React from 'react';
import {
  FaShoppingBag,
  FaShoppingCart,
  FaCommentAlt,
  FaPlusSquare,
  FaMoneyBillAlt,
} from 'react-icons/fa';
import { MdDashboard, MdInsertComment } from 'react-icons/md';
import { AiOutlineTransaction } from 'react-icons/ai';
import { Route, Routes } from 'react-router-dom';
import {
  Home,
  AccountSettings,
  Reviews,
  ReviewDetail,
  AddProduct,
  Orders,
} from '../../routes/vendor';
import { DashboardLayout } from './index';
import { Products } from '../../routes/vendor';

const links = [
  {
    text: 'dashboard',
    icon: <MdDashboard size={24} />,
    to: '/',
  },
  {
    text: 'Products',
    icon: <FaShoppingBag size={24} />,
    to: '/products',
  },
  {
    text: 'reviews',
    icon: <MdInsertComment size={24} />,
    to: '/reviews',
  },
  {
    text: 'orders',
    icon: <FaShoppingCart size={24} />,
    to: '/orders',
  },
  {
    text: 'add product',
    icon: <FaPlusSquare size={24} />,
    to: '/add-product',
  },
  {
    text: 'transactions',
    icon: <AiOutlineTransaction size={24} />,
    to: '/transactions',
  },
];

const VendorLayout = (props) => {
  return (
    <DashboardLayout links={links}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:id" element={<ReviewDetail />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/orders" element={<Orders />} />
        {props.children}
      </Routes>
    </DashboardLayout>
  );
};

export default VendorLayout;
