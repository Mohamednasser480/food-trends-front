import React from "react";

export default function ProductIcon(props) {
  return (
    <div className="product-icon group-one flex h-12 w-12 cursor-pointer items-center justify-center rounded-full  border bg-white shadow-xl transition-all duration-300 hover:bg-black hover:border-black">
      {props.children}
    </div>
  );
}
