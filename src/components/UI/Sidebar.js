import React from "react";
import "aos/dist/aos.css";
import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import { HiOutlineX } from "react-icons/hi";

export default function Sidebar(props) {
  if (!props.show) {
    return;
  }

  let direction;
  let effect;

  if (props.right) {
    direction = "right-2";
    effect = "slide-left";
  }

  return (
    <>
      {createPortal(
        <Backdrop setShow={props.setShow}>
          <div
            className={`fixed h-full w-full cursor-default bg-white p-8 md:w-[410px] md:max-w-[90%] ${
              props.className
            } ${direction || "left-0"}`}
            data-aos={`${effect || "slide-right"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="fixed right-5 w-fit cursor-pointer self-end text-xl text-base-400 hover:font-bold hover:text-red-400"
              onClick={() => {
                props.setShow(false);
              }}
            >
              <HiOutlineX className="h-5 w-5" />
            </span>
            {props.children}
          </div>
        </Backdrop>,
        document.getElementById("modals")
      )}
    </>
  );
}
