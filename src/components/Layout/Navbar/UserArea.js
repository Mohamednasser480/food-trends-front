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

  const [modalExists, setModalExists] = useState(false);

  return (
    <>
      <div className="flex gap-3">
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
            onClick={() => {
              setModalExists(true);
            }}
          />
          <span className="absolute -top-1.5 -right-2 flex h-5  w-5 items-center justify-center rounded-full bg-green-800 text-xs font-bold text-white">
            {counter}
          </span>
        </div>
      </div>

      {modalExists && (
        <Modal
          direction="right"
          setModalExists={setModalExists}
          className="h-full w-[410px] max-w-[90%] cursor-default bg-white  p-5"
          effect="slide-left"
        >
          <div>Cart Sidebar</div>
        </Modal>
      )}
    </>
  );
}
