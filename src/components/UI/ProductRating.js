import React from "react";
import Rating from "react-rating";
import { AiFillStar } from "react-icons/ai";

export default function ProductRating(props) {
  return (
    <Rating
      readonly
      initialRating={props.rating}
      emptySymbol={<AiFillStar color="#b7b7b7" />}
      fullSymbol={<AiFillStar color="#EEB31A" />}
      className="!flex items-center"
    />
  );
}
