import React, { useEffect, useState } from "react";
import { SectionTitle } from "../../UI";
import { Reviews, WriteAReview,ReviewLoader } from "../";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, reviewsSelector } from "../../../store/slices/reviews";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CustomerReviews({ productId }) {
  // Fetch Reviews Here to send Them to both Write a Review and Reviews ( Use Product ID )
  let { reviews, isLoading, error } = useSelector(reviewsSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReviews(productId));
  }, []);

  function getOverALlRating() {
    if (reviews.length == 0) {
      return;
    }
    let totalRatingSum = reviews.reduce(
      (acc, current) => acc + current.rating,
      0
    );
    return totalRatingSum / reviews.length;
  }
  useEffect(() => {
    setOverallRating(getOverALlRating());
  }, [reviews]);

  let [overallRating, setOverallRating] = useState(0);

  return (
    <div className="max-w-full py-12" data-aos="fade-down">
      <div className="container">
        <SectionTitle text={"Customer Reviews"} />
        <WriteAReview
          rating={overallRating}
          numberOfReviews={reviews.length}
          productId={productId}
        />
        {error ? (
          <>
            <h4 className="my-2">Sorry , Can't Fetch Reviews right now!</h4>
          </>
        ) : isLoading ? (
          <ReviewLoader/>
        ) : (
          <Reviews reviews={reviews} />
        )}
      
      </div>
    </div>
  );
}
