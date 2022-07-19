import React, { useState } from "react";
import { UserArea, SocialIcons } from "./";

import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../../assets/Logo.png";
import { Modal } from "../../UI";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  function toggleModal(e) {
    // To stop clicking on Children
    if (e.target !== e.currentTarget) return;

    setShowModal(!showModal);
  }

  return (
    <nav className="container flex h-16  items-center justify-between px-4 md:py-12">
      <AiOutlineMenu
        size={25}
        className="-p-1 cursor-pointer hover:text-green-800 md:hidden"
        onClick={toggleModal}
      />

      <SocialIcons />

      <div className="flex flex-1 justify-center">
        <a href="#">
          <img src={Logo} alt="Logo " className="w-[200px] max-w-full" />
        </a>
      </div>

      {showModal && (
        <Modal toggleModal={toggleModal} direction="left">
          <div
            className="h-full w-[410px] max-w-[90%] cursor-default bg-white  p-5"
            data-aos="slide-right"
          >
            Mobile Sidebar
          </div>
        </Modal>
      )}

      <UserArea />
    </nav>
  );
}
