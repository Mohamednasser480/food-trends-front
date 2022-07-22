import React from "react";

const SocialIcon = (props) => {
  return (
    <a href={props.href} className={props.className}>
      {props.icon}
    </a>
  );
};

export default SocialIcon;
