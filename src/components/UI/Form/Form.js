import React from 'react';

export default function Form(props) {
  return (
    <form className={`flex flex-col pb-10 ${props.className || ''}`} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
}
