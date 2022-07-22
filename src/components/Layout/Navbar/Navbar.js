import React, { useState } from "react";
import { UserArea, SocialIcons, NavList } from "./";

import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../../assets/Logo.png";
import { Modal } from "../../UI";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  function toggleModal(e) {
    // To stop clicking on Children
    if (e.target !== e.currentTarget) return;

    setShowModal(!showModal);
  }

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="container flex flex-col gap-y-10 py-6 xl:pt-8">
        <div className="flex items-center gap-x-5">
          {/* Left Section - Social Media and toggle sidebar button */}
          <div className="flex items-center gap-x-5">
            <AiOutlineMenu
              size={25}
              className="cursor-pointer hover:text-green-800 xl:hidden"
              onClick={toggleModal}
            />
            <SocialIcons />
          </div>

          {/* Middle Section - Logo */}
          <div className="flex flex-1 md:justify-center">
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-44 max-w-full xl:w-48" />
            </Link>
          </div>

          {/* Right Section - User Area */}
          <div>
            <UserArea />
          </div>
        </div>

        {/* NavList */}
        <div className="hidden xl:block">
          <NavList />
        </div>

        {showModal && (
          <Modal
            toggleModal={toggleModal}
            direction="left"
            className="h-full w-[410px] max-w-[90%] cursor-default bg-white  p-5"
            effect="slide-right"
          >
            <div>Mobile Sidebar</div>
          </Modal>
        )}
      </div>
    </nav>
  );
}
