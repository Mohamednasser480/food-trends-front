import React from "react";
import UserSection from "./UserSection";
import { useSelector } from "react-redux";
import { loginSelector } from "../../../../store/slices/auth";
import Navlinks from "./Navlinks";
import LoginArea from "./LoginArea";
import {
  AiOutlineComment,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineShop,
} from "react-icons/ai";
import { BiCategory } from "react-icons/bi";

let links = [
  { to: "/", icon: <AiOutlineHome size={22} />, text: "Home" },
  { to: "/shop", icon: <AiOutlineShop size={22} />, text: "Shop" },
  { to: "/categories", icon: <BiCategory size={22} />, text: "Categories" },
  { to: "/about", icon: <AiOutlineInfoCircle size={22} />, text: "About" },
  { to: "/contact-us", icon: <AiOutlineComment size={22} />, text: "Contact" },
];

export default function MobileNav(props) {
  const isLogged = useSelector(loginSelector).status === "succeeded";
  return (
    <div
      className={`flex h-screen flex-col pb-16 ${
        !isLogged ? "justify-between" : ""
      }`}
    >
      {isLogged && <UserSection />}
      <Navlinks setShowSidebar={props.setShowSidebar} links={links} />
      <LoginArea isLogged={isLogged} />
    </div>
  );
}
