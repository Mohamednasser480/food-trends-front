import React from "react";
import MobileNavlink from "./MobileNavlink";
import {
  AiOutlineHome,
  AiOutlineShop,
  AiOutlineInfoCircle,
  AiOutlineComment,
} from "react-icons/ai";

let links = [
  { to: "/", icon: <AiOutlineHome size={22} />, text: "Home" },
  { to: "/shop", icon: <AiOutlineShop size={22} />, text: "Shop" },
  { to: "/about", icon: <AiOutlineInfoCircle size={22} />, text: "About" },
  { to: "/contact-us", icon: <AiOutlineComment size={22} />, text: "Contact" },
];

export default function Navlinks(props) {
  return (
    <div className="mt-10 flex flex-col gap-2">
      {links.map((item, index) => {
        return (
          <MobileNavlink
            key={index}
            to={item.to}
            icon={item.icon}
            text={item.text}
            onClick={() => {
              props.setShowSidebar(false);
            }}
          />
        );
      })}
    </div>
  );
}
