import React, { useEffect, useState } from 'react';
import { Button } from '../UI';
import * as Scroll from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

export default function ScrollUp() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 450) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  return (
    <div
      className={`fixed flex w-full items-end justify-end p-2 md:p-10 ${showTopBtn ? 'z-20' : ''}`}
    >
      <button
        variant="primary"
        onClick={scrollToTop}
        className=" h-14 w-14 self-end rounded-full bg-primary text-xl font-bold text-white hover:bg-secondary-400 hover:text-primary"
        smooth={true}
      >
        UP
      </button>
    </div>
  );
}
