import React, { useState } from "react";

// import { Modal } from "./UI";
import { Slider } from "./";

export default function Header() {
  // const [showModal, setShowModal] = useState(false);
  //
  // function toggleModal(e) {
  //   // To stop clicking on Children
  //   if (e.target !== e.currentTarget) return;
  //
  //   setShowModal(!showModal);
  // }

  return (
    <header>
      <Slider />
    </header>
  );
}
