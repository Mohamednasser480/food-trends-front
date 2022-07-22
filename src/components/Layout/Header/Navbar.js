import React, { useState } from "react";
import { UserArea, SocialIcons } from "./";

import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../../assets/Logo.png";
import { Modal } from "../../UI";

export default function Navbar() {
  const [modalExists, setModalExists] = useState(true);

  return (
    <nav className="container flex h-16  items-center justify-between px-4 md:py-12">
      <AiOutlineMenu
        size={25}
        className=" cursor-pointer hover:text-green-800 md:hidden"
        onClick={() => {
          setModalExists(true);
        }}
      />

      <SocialIcons />

      <div className="flex flex-1 justify-center">
        <a href="#">
          <img src={Logo} alt="Logo " className="w-[200px] max-w-full" />
        </a>
      </div>

      {modalExists && (
        <Modal
          setModalExists={setModalExists}
          direction="left"
          className="h-full w-[410px] max-w-[90%] cursor-default bg-white  p-5"
          effect="slide-right"
        >
          <div>Mobile Sidebar</div>
        </Modal>
      )}

      <UserArea />
    </nav>
  );
}
