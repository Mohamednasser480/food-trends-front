import React, { useEffect, useRef, useState } from "react";

export default function QauntityBox({ max }) {
  let btnClass =
    "absolute rounded-md hover:bg-primary hover:text-white py-2 w-10 transition-all duration-300 font-satoshi";

  let count = useRef();
  useEffect(() => {
    count.current.value = 1;
  }, []);

  let inc = () => {
    // if (count.current.value >= max) return;
    if (count.current.value >= max) {
      count.current.value = max;
      return;
    }
    count.current.value++;
  };
  let dec = () => {
    if (count.current.value <= 1) return;
    if (count.current.value > max) {
      count.current.value = max;
      return;
    }
    count.current.value--;
  };
  return (
    <div className="relative flex items-center overflow-hidden">
      <button className={btnClass} onClick={dec}>
        -
      </button>
      <input
        type={"number"}
        min={1}
        max={max}
        className="w-32 rounded-md border-2 border-transparent bg-[#f5f5f5] py-2 text-center font-satoshi focus:border-primary"
        ref={count}
      />
      <button className={`${btnClass} right-0`} onClick={inc}>
        +
      </button>
    </div>
  );
}
