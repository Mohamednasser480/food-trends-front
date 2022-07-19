import ReactStars from "react-stars";
import React from "react";

export default function ProductRating(props) {
  return (
    <ReactStars
      count={5}
      size={24}
      edit={false}
      color2={"#EEB31A"}
      color1={"#7e7e7e"}
      value={props.rating}
    />
  );
}
