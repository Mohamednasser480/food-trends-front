import React from "react";

export default function OutOfStockBadge({ className }) {
  return (
    <div
      className={`${className} cursor-default rounded-lg bg-red-500 p-2 text-xs font-semibold text-white opacity-80 transition-colors duration-300 hover:opacity-100`}
    >
      Out Of Stock
    </div>
  );
}
