import React from "react";
import MobileNavlink from "./MobileNavlink";

export default function Navlinks(props) {
  return (
    <div className="mt-10 flex flex-col gap-2">
      {props.links.map((item, index) => {
        return (
          <MobileNavlink
            key={index}
            to={item.to}
            icon={item.icon}
            text={item.text}
            onClick={() => {
              return props.setShowSidebar ? props.setShowSidebar(false) : null;
            }}
          />
        );
      })}
    </div>
  );
}
