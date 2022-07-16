import React, { useState } from "react";
import {
  AiOutlineShopping,
  AiOutlineSearch,
  AiOutlineStar,
  AiOutlineUser,
} from "react-icons/ai";
import Modal from "../../UI/Modal";

export default function UserArea(props) {
  // Counter
  let counter = 1;

  const [showModal, setShowModal] = useState(false);

  function toggleModal(e) {
    // To stop clicking on Children
    if (e.target !== e.currentTarget) return;

    setShowModal(!showModal);
  }

  return (
    <>
      <div className="hidden gap-3 md:flex">
        <AiOutlineSearch
          size={25}
          cursor={"pointer"}
          className={"transition-all hover:text-green-800"}
        />
        <AiOutlineUser
          size={25}
          cursor={"pointer"}
          className={"transition-all hover:text-green-800"}
        />
        <AiOutlineStar
          size={25}
          cursor={"pointer"}
          className={"transition-all hover:text-green-800"}
        />

        <div className="relative">
          <AiOutlineShopping
            size={25}
            cursor={"pointer"}
            className={"transition-all hover:text-green-800"}
            onClick={toggleModal}
          />
          <span className="absolute -top-1.5 -right-2 flex h-5  w-5 items-center justify-center rounded-full bg-green-800 text-xs font-bold text-white">
            {counter}
          </span>
        </div>
      </div>

      {showModal && <Modal direction="right" toggleModal={toggleModal}></Modal>}
    </>
  );
}
