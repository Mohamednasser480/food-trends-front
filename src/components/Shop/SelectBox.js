import React, { forwardRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function SelectBox(props, ref) {
  return (
    <div
      className="relative z-10 flex h-12 w-56 items-center rounded-md  bg-base-200"
      data-aos="fade"
    >
      <select
        className="border-0.5 peer h-full w-full appearance-none border-0 bg-transparent px-5 font-medium transition-all duration-300 focus:bg-white"
        onChange={props.onChange}
        ref={ref}
      >
        {props.array.map((item) => (
          <option key={item.value} className="text-lg" value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
      <MdOutlineKeyboardArrowDown
        size={22}
        className="absolute right-3 -z-10 peer-focus:z-0"
      />
    </div>
  );
}

export default forwardRef(SelectBox);
