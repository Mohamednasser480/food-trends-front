import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact-us" },
  { name: "Find A Store", href: "/find-store" },
];
export default function Navigation() {
  const getLinksClasses = ({ isActive }) => {
    const defClasses = "hover:text-black transition-colors ";
    return defClasses + (isActive ? "text-black" : "text-gray-600");
  };
  return (
    <ul className="container mx-auto hidden justify-center gap-8 pb-3 text-sm font-bold uppercase sm:flex ">
      {links.map((el) => {
        return (
          <li key={el.name}>
            <NavLink to={el.href} className={getLinksClasses}>
              {el.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
