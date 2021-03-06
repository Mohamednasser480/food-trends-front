import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { createPortal } from "react-dom";

AOS.init();

export default function Modal(props) {
  let directionClass = "justify-center";

  if (props.direction == "right") {
    directionClass = "justify-end";
  }
  if (props.direction == "left") {
    directionClass = "justify-start";
  }

  function hideModal(e){
    if(e.target!==e.currentTarget) return;
    props.setModalExists(false)
  }

  return (
    <>
      {createPortal(
        <div
          className={`fixed left-0 top-0 z-50 flex h-screen w-screen cursor-[crosshair] items-center bg-[#0000006d] ${directionClass} me-5`}
          data-aos="fade" onClick={hideModal}
        >
          <div className={props.className} data-aos={props.effect}>
            <div className="flex flex-col">
              <span className="text-base-400 cursor-pointer w-fit self-end text-xl mr-4 hover:text-red-400 hover:font-bold"  onClick={hideModal} >X</span>
              {props.children}</div>
          </div>
        </div>,
        document.getElementById("modals")
      )}
    </>
  );
}
