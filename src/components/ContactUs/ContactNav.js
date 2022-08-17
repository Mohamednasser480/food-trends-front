import React from "react";

const ContactNav = () => {
  return (
    <div className="z-1 min-h-48 mb-20 flex justify-items-center bg-[#f8f8f8] py-3">
      <div className="container">
        <ul className="flex justify-center">
          <li>
            <a
              className=" text-slate-400 after:absolute after:left-auto	after:right-0 after:bottom-0 after:h-px after:w-0 hover:text-slate-800"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="text-secondary-100 relative pl-11 before:absolute before:left-3 before:top-3 before:h-px before:w-5 before:bg-slate-600 before:text-gray-500 before:content-['']">
            <span>Contact Us</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactNav;
