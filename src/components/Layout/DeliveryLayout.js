import React from "react";
import { DashboardLayout } from "./index";
import { Route, Routes } from "react-router-dom";
import {
  AccountSettings,
  AddProduct,
  Home,
  Orders,
  Products,
  ReviewDetail,
  Reviews,
} from "../../routes/vendor";
import { MdDashboard } from "react-icons/md";
import {
  FaCommentAlt,
  FaPlusSquare,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import AllOrders from "../../routes/delivery/AllOrders";

const links = [
  {
    text: "dashboard",
    icon: <MdDashboard className="mx-3" />,
    to: "/",
  },
];

const DeliveryLayout = (props) => {
  return (
    <DashboardLayout links={links}>
      <Routes>
        <Route path="/" element={<AllOrders />} />
        {props.children}
      </Routes>
    </DashboardLayout>
  );
};

export default DeliveryLayout;
