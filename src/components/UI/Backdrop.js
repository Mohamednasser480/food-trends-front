import React from "react";

export default function Backdrop(props) {
  return (
    <div
      className={`fixed left-0 top-0 z-50  flex h-screen w-screen cursor-[crosshair] bg-[#0000006d] ${props.className}`}
      data-aos="fade"
      onClick={() => props.setShow(false)}
    >
      {props.children}
    </div>
  );
}
