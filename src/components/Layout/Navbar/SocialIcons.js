import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { SocialIcon } from "./";

const icons = [
  {
    href: "#",
    icon: <FaTwitter />,
  },
  {
    href: "#",
    icon: <FaFacebookF />,
  },
  {
    href: "#",
    icon: <FaInstagram />,
  },
  {
    href: "#",
    icon: <FaLinkedin />,
  },
];

export default function SocialIcons(props) {
  return (
    <div className="text-md hidden gap-x-4 md:flex">
      {icons.map((icon, index) => (
        <SocialIcon
          key={index}
          {...icon}
          className="text-lg text-base-400 transition-colors hover:text-primary"
        />
      ))}
    </div>
  );
}
