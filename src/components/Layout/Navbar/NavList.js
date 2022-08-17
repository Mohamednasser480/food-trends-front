import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact-us" },
];

export default function NavList() {
  const getLinksClasses = ({ isActive }) => {
    const defClasses =
      "hover:text-black transition-colors group relative pb-0.5 ";
    return defClasses + (isActive ? "text-black" : "text-gray-600");
  };
  return (
    <ul className="flex justify-center gap-8 text-base font-bold uppercase">
      {links.map((el) => {
        return (
          <li key={el.name}>
            <NavLink to={el.href} className={getLinksClasses}>
              {el.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
