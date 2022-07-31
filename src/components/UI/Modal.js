import React, { useState } from "react";
import "aos/dist/aos.css";
import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";

export default function Sidebar(props) {
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
            className={`h-1/2 w-1/2 cursor-default bg-white p-5`}
            data-aos={`${"fade-up"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="fixed right-5 w-fit cursor-pointer self-end text-xl text-base-400 hover:font-bold hover:text-red-400"
              onClick={() => {
                props.setShow(false);
              }}
            >
              X
            </span>
            {props.children}
          </div>
        </Backdrop>,
        document.getElementById("modals")
      )}
    </>
  );
}
