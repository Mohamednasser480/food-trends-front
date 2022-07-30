import React, { useState } from "react";
import { ProductRating, Typography } from "../../UI";
import { TiPencil } from "react-icons/ti";
import ReviewForm from "./ReviewForm";

export default function WriteAReview() {
  let reviewValue = 4.5;
  let reviews = 3;

  // TO Be Edited => Control The Review Form To show only If User logged and have purchased the item before.
  const [isLogged, setIsLogged] = useState(true);
  const [itemPurchased, setItemPurchased] = useState(true);

  //DON"T TOUCH! Control On Button Click to Show Form or Warning
  const [writeAReviewShown, setWriteAReviewShown] = useState(false);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-5 py-10">
        <div className="flex flex-wrap gap-7">
          <Typography
            component={"subtitle2"}
            className="!text-5xl  text-primary "
          >
            {reviewValue.toFixed(2)}
          </Typography>
          <div className="flex flex-col gap-1">
            <ProductRating rating={reviewValue} className="text-2xl" />
            <span className="ml-1 font-medium text-base-400">
              {reviews} Reviews
            </span>
          </div>
        </div>
        <button
          className="flex gap-4 rounded-md border px-5 py-1 font-semibold uppercase tracking-wider text-primary transition-colors duration-300 hover:bg-primary hover:text-white "
          onClick={() => setWriteAReviewShown(!writeAReviewShown)}
        >
          <TiPencil size={22} />
          Write a Review
        </button>
      </div>
      {writeAReviewShown && (
        <div data-aos="fade" data-aos-duration="700">
          {isLogged && itemPurchased ? (
            // Write a review Form Goes Here
            <ReviewForm />
          ) : (
            <span className="text-base-400">
              Only logged in customers who have purchased this product may leave
              a review.
            </span>
          )}
        </div>
      )}
    </>
  );
}
