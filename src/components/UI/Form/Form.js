import React from "react";

export default function Form(props) {
  return (
    <form
      className={`flex flex-col ${props.className || ""}`}
      onSubmit={props.onSubmit}
    >
      {props.children}
    </form>
  );
}
