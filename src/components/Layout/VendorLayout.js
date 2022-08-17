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
  ProductEdit,
} from "../../routes/vendor";
import { DashboardLayout } from "./index";
import { Products } from "../../routes/vendor";

const links = [
  {
    text: 'dashboard',
    icon: <MdDashboard className="mx-3" />,
    to: '/',
  },
  {
    text: 'Products',
    icon: <FaShoppingBag className="mx-3" />,
    to: '/products',
  },
  {
    text: 'reviews',
    icon: <FaCommentAlt className="mx-3" />,
    to: '/reviews',
  },
  {
    text: 'orders',
    icon: <FaShoppingCart className="mx-3" />,
    to: '/orders',
  },
  {
    text: 'add product',
    icon: <FaPlusSquare className="mx-3" />,
    to: '/add-product',
  },
  // {
  //   text: 'transactions',
  //   icon: <AiOutlineTransaction className="mx-3 " />,
  //   to: '/transactions',
  // },
];

const VendorLayout = (props) => {
  return (
    <DashboardLayout links={links}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductEdit />} />
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
