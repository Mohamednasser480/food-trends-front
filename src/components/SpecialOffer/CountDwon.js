import React from "react";
import CountDownNumber from "./CountDownNumber";

const CountDwon = ({ days, hours, mins, secs }) => {
  return (
    <div className="flex max-w-full justify-center gap-2">
      
      {/* Days */}
      <CountDownNumber numbers={days} date={"Days"} isCol={true} />

      {/* Hours */}
      <CountDownNumber numbers={hours} date={"Hours"} isCol={true} />

      {/* Mins */}

      <CountDownNumber numbers={mins} date={"mins"} isCol={true} />

      {/* Secs */}
      <CountDownNumber numbers={secs} date={"secs"} />
    </div>
  );
};

export default CountDwon;
