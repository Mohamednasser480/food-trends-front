import React from "react";

const links = [
  { name: "Home", href: "#" },
  { name: "Shop", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "/contact-us" },
  { name: "Find A Store", href: "#" },
];
export default function Navigation() {
  return (
    <ul className="contaienr mx-auto hidden justify-center gap-8 pb-3 text-sm font-bold uppercase text-gray-600 sm:flex ">
      {links.map((el) => {
        return (
          <li className="hover:text-black" key={el.name}>
            <a href={el.href}>{el.name}</a>
          </li>
        );
      })}
    </ul>
  );
}
