import React from "react";

export default function Form(props) {
  return (
    <form
      encType="multipart/form-data"
      className={`flex flex-col ${props.className || ""}`}
      onSubmit={props.onSubmit}
      noValidate={true}
    >
      {props.children}
    </form>
  );
}
