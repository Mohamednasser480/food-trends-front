import { useState } from "react";
import {
  FaAngleRight,
  FaShoppingCart,
  FaAngleLeft,
  FaStar,
  FaHistory,
} from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { GrDeliver } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Typography } from "../../UI";

export default function AccountNav({ links }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const buttons = {
    customer: ["My profile", "My orders", "wishlist"],
    delivery: ["All Orders", "Live Orders", "History"],
  };
  const icons = {
    wishlist: <FaStar className="mx-3" />,
    "All Orders": <FaShoppingCart className="mx-3 " />,
    "My profile": <IoPerson className="mx-3 " />,
  };

  console.log(links);
  return (
    <>
      <div
        className={`fixed z-10 h-full w-[350px] bg-white py-11 shadow-2xl transition-all duration-300 md:static md:w-[300px] md:shadow-none ${
          showSidebar ? "left-0" : "-left-[350px]"
        }`}
      >
        {links.map((link, index) => {
          return (
            <Link key={index} to={link.link} className="flex items-center">
              {link.icon}
              <Typography component="h6" className="my-2">
                {link.text}
              </Typography>
            </Link>
          );
        })}
      </div>
      <button
        className={`fixed z-10 mt-2 rounded-full bg-white transition-all duration-300 hover:bg-slate-100 ${
          showSidebar ? "left-[310px]" : "left-[10px]"
        }`}
        onClick={() => {
          setShowSidebar((showSidebar) => !showSidebar);
        }}
      >
        {showSidebar ? (
          <FaAngleLeft size={20} className="m-2" />
        ) : (
          <FaAngleRight className="m-2" size={20} />
        )}
      </button>
    </>
  );
}
