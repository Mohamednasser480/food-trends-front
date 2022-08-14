import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Outlet } from "react-router-dom";
import Auth from "../../../components/Auth/Auth";
import Profile from "./Profile";
import { AccountNav } from "../../../components/Layout/Navbar";
import { selectUserToken } from "../../../store/slices/auth";
import Navlinks from "../../../components/Layout/Navbar/MobileNav/Navlinks";

const links = [
  {
    text: "Dashboard",
    to: "/user-account/",
  },
  {
    text: "Orders",
    to: "/user-account/orders",
  },
  // {
  //   text: "Wishlist",
  //   to: "/user-account/wishlist",
  // },
];

export default function UserAccount() {
  const [content, setContent] = useState(
    localStorage.getItem("clicked") || "Products"
  );
  const userToken = useSelector(selectUserToken);
  const isUserLoggedIn = userToken !== "";

  // useEffect(() => {
  //   localStorage.setItem("clicked", content);
  // }, [content]);

  return (
    <>
      {isUserLoggedIn ? (
        <div className="container flex gap-6 py-6 lg:max-w-[70%]">
          <div className="w-1/3 rounded-xl border px-2">
            <Navlinks links={links} />
          </div>
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      ) : (
        <div className=" container h-full w-2/4">
          <Auth />
        </div>
      )}
    </>
  );
}
