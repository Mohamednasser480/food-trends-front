import React, { useState } from "react";
import Typography from "./Typography";

export default function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      class={`collapse ${isOpen ? "collapse-open" : "collapse-close"} group`}
    >
      <input
        type="checkbox"
        className="!min-h-fit cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <div class="collapse-title  !min-h-fit !p-0">
        <Typography
          component="h4"
          className={`transition-colors duration-300 group-hover:text-primary ${
            isOpen && "text-primary"
          }`}
        >
          {props.title}
        </Typography>
        <span
          className="absolute top-0 right-0  cursor-pointer font-sans text-2xl sm:block"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <div class="collapse-content p-0  ">
        <p>{props.description}</p>
      </div>
    </div>
  );
}
