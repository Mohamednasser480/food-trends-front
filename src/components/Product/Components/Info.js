import React from "react";
import ShareIcon from "./ShareIcon";
import { FaFacebookF, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Info({ category }) {
  // let category = "Fruits and Veggies";

  let shareIcons = [
    { icon: <FaFacebookF />, href: "#facebook", tooltip: "Facebook" },
    { icon: <FaTwitter />, href: "#twitter", tooltip: "Twitter" },
    { icon: <FaLinkedin />, href: "#LinkedIn", tooltip: "LinkedIn" },
    { icon: <FaEnvelope />, href: "#Email", tooltip: "Email" },
  ];

  return (
    <div className="text-md flex flex-col flex-wrap gap-5 ">
      <div className="flex  flex-wrap items-center gap-2 font-medium">
        <span>Category:</span>
        <span className="group relative cursor-pointer  text-base-400 transition-colors hover:text-black">
          <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
          {category}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-2 font-medium">
        <span>Share:</span>
        <div className="flex h-fit flex-wrap items-center gap-2">
          {shareIcons.map((icon, index) => {
            return (
              <ShareIcon
                key={index}
                href={icon.href}
                tooltip={icon.tooltip}
                icon={icon.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
