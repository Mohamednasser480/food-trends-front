import React from "react";
import { createPortal } from "react-dom";
import { HiOutlineX } from "react-icons/hi";

const Notification = (props) => {
  const { type, title } = props;
  const dir = props.dir ?? "right";
  let alertClasses = "fixed bottom-5 bg-white rounded-full z-50";
  let headerClasses = "text-white";
  if (dir === "left") alertClasses += " left-5";
  if (dir === "right") alertClasses += " right-5";
  if (type === "error") headerClasses += " bg-error";
  if (type === "success") headerClasses += " bg-success";
  return createPortal(
    <div className={alertClasses}>
      <button className="absolute right-5 top-5">
        <HiOutlineX className="h-5 w-5" />
      </button>
      {title ? <header className={headerClasses}>{props.title}</header> : null}

      <div id="alert-body">{props.children}</div>
    </div>,
    document.getElementById("modals")
  );
};

export default Notification;
