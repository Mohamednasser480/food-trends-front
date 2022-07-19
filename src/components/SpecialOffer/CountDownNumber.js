import React from "react";

const CountDownNumber = (props) => {
  return (
    <>
      <div className="flex flex-col">
        <span className="font-Satoshi text-6xl font-bold tracking-wider text-primary ">
          {props.numbers}
        </span>
        <span className="font-bold uppercase text-primary">{props.date}</span>
      </div>
      {props.isCol ? (
        <span className="my-auto w-5 text-3xl text-primary before:content-[':']"></span>
      ) : (
        ""
      )}
    </>
  );
};

export default CountDownNumber;
