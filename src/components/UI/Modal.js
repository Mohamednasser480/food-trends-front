import React from "react";
import "aos/dist/aos.css";
import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import { HiOutlineX } from "react-icons/hi";

export default function Modal(props) {
  if (!props.show) {
    return;
  }

  return (
    <>
      {createPortal(
        <Backdrop
          setShow={props.setShow}
          className="flex items-center justify-center"
        >
          <div
            className={`relative cursor-default overflow-y-auto bg-white ${
              props.className || "relative h-1/2 w-1/2 cursor-default"
            }`}
            data-aos={`${"fade-up"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="absolute right-5 top-5 z-10 w-fit cursor-pointer self-end text-xl text-base-400 hover:font-bold hover:text-red-400"
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
