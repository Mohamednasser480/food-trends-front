import React, { useRef, useState } from "react";
import { ProductRating } from "../../UI";

let ratingValue;

export default function ReviewForm() {
  const getRatingValue = (value) => {
    ratingValue = value;
  };

  // Input Refs
  let reviewTitleRef = useRef();
  let reviewBodyRef = useRef();

  // Submit Button ==> Call API Service Here.
  let submitReview = () => {
    if (ratingValue == 0) {
      setValidError("Please Choose your Rating");
      return;
    }
    if (reviewTitleRef.current.value.length < 5) {
      setValidError("Review title should be 5 letters at least");
      return;
    }
    if (reviewBodyRef.current.value.length < 5) {
      setValidError("Review body should be 5 letters at least");
      return;
    }
    // If No errors
    setValidError(false);

    // Function to Send Data to Server Below
    console.log(ratingValue);
    console.log(reviewTitleRef.current.value);
    console.log(reviewBodyRef.current.value);
  };

  // Hide Button If No data.
  let [validError, setValidError] = useState(false);

  return (
    <div className="mt-5 flex flex-col gap-5">
      <div className="flex flex-row flex-wrap items-center gap-6">
        <span className="font-medium">Your rating :</span>
        <ProductRating
          editable={true}
          className="-ml-1 text-3xl"
          onClick={getRatingValue}
          rating={ratingValue}
        />
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-medium">Give your review a title</span>
        <input
          type={"text"}
          className="h-10 rounded-md bg-[#F5F5F5] px-5 "
          ref={reviewTitleRef}
          placeholder="Title"
        />
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-medium">Your review </span>
        <textarea
          className=" min-h-16 max-h-64 resize-y rounded-md bg-[#F5F5F5] p-5"
          rows={5}
          ref={reviewBodyRef}
          placeholder="Review Body"
        />
      </div>
      <div className="flex flex-wrap items-center justify-between px-2 ">
        <span className="mr-2 text-lg font-medium text-red-500">
          {validError}
        </span>
        <button
          className="text-md btn btn-primary w-fit px-8  font-semibold tracking-wider hover:bg-secondary"
          onClick={submitReview}
        >
          Submit Now
        </button>
      </div>
    </div>
  );
}
