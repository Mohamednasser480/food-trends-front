import React, { useRef } from "react";
import { ProductRating } from "../../UI";

export default function ReviewForm() {
  let ratingValue = 0;
  const getRatingValue = (value) => {
    ratingValue = value;
  };

  // Input Refs
  let reviewTitleRef = useRef();
  let reviewBodyRef = useRef();

  // Submit Button ==> Call API Service Here.
  let submitReview = () => {
    console.log(ratingValue);
    console.log(reviewTitleRef.current.value);
    console.log(reviewBodyRef.current.value);
  };

  return (
    <div className="mt-5 flex flex-col gap-5">
      <div className="flex flex-row flex-wrap items-center gap-6">
        <span className="font-medium">Your rating :</span>
        <ProductRating
          editable={true}
          className="-ml-1 text-3xl"
          onClick={getRatingValue}
        />
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-medium">Give your review a title</span>
        <input
          type={"text"}
          className="h-10 rounded-md bg-[#F5F5F5] px-5 "
          ref={reviewTitleRef}
        />
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-medium">Your review </span>
        <textarea
          className=" min-h-16 max-h-64 resize-y rounded-md bg-[#F5F5F5] p-5"
          rows={5}
          ref={reviewBodyRef}
        />
      </div>
      <button
        className="text-md btn btn-primary w-fit self-end px-8  font-semibold tracking-wider hover:bg-secondary"
        onClick={submitReview}
      >
        Submit Now
      </button>
    </div>
  );
}
