import React, { useEffect, useState } from "react";
import { Button } from "../UI";
import * as Scroll from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function ScrollUp() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {

    window.addEventListener("scroll", () => {
      if (window.scrollY > 900) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  return (
    <div
      className={`fixed right-10 bottom-6 z-10 flex w-fit items-end justify-end ${
        showTopBtn ? "opacity-50 -translate-y-8" : "opacity-0"
      } transition-all duration-300 hover:opacity-100`}
    >
      <BsFillArrowUpCircleFill
        size={40}
        onClick={scrollToTop}
        className="cursor-pointer text-primary"
      />
    </div>
  );
}
