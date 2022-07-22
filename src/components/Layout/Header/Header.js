import React, { useState } from "react";

import { Modal } from "../../UI";
import { Navbar, Navigation } from "./";

export default function Header() {


  return (
    <header className="bg-white sticky z-10 top-0 shadow-sm">
      <Navbar />

      <Navigation />
    </header>
  );
}
