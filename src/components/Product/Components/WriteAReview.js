import React, { useEffect, useState } from "react";
import { ProductRating, Typography } from "../../UI";
import { TiPencil } from "react-icons/ti";
import ReviewForm from "./ReviewForm";
import { useSelector } from "react-redux";
import { selectStatus } from "../../../store/slices/auth";

export default function WriteAReview({ rating, numberOfReviews, productId }) {
  const userLogged = useSelector(selectStatus);
  const [isLogged, setIsLogged] = useState(false);
  
  // TO Be Edited => Control The Review Form To show only If User logged and have purchased the item before.
  const [itemPurchased, setItemPurchased] = useState(true);

  useEffect(()=>{
    setIsLogged(userLogged=="succeeded")
  },[userLogged])

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
            {rating ? Number(rating).toFixed(2) : "0.00"}
          </Typography>
          <div className="flex flex-col gap-1">
            <ProductRating rating={rating} className="text-2xl" />
            <span className="ml-1 font-medium text-base-400">
              {numberOfReviews} Reviews
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
            <ReviewForm productId={productId} />
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
