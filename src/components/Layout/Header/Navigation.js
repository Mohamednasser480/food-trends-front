import React from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact-us" },
  { name: "Find A Store", href: "/find-store" },
];
export default function Navigation() {
  return (
    <ul className="contaienr mx-auto hidden justify-center gap-8 pb-3 text-sm font-bold uppercase text-gray-600 sm:flex ">
      {links.map((el) => {
        return (
          <li className="hover:text-black" key={el.name}>
            <Link to={el.href}>{el.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
