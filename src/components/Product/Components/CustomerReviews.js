import React, { useEffect, useState } from "react";
import { SectionTitle } from "../../UI";
import { Reviews, WriteAReview } from "../";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, reviewsSelector } from "../../../store/slices/reviews";

export default function CustomerReviews({ productId }) {
  // Fetch Reviews Here to send Them to both Write a Review and Reviews ( Use Product ID )
  let { reviews, isLoading, error } = useSelector(reviewsSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReviews(productId));
  }, []);

  function getOverALlRating() {
    if (reviews.length == 0) {return};
    let totalRatingSum = reviews.reduce((acc, current) => acc + current.rating,0);
    return totalRatingSum/reviews.length;
  }
  useEffect(() => {
  setOverallRating(getOverALlRating())
  }, [reviews]);

  let [overallRating, setOverallRating] = useState(0);

  return (
    <div className="max-w-full py-12" data-aos="fade-down">
      <div className="container">
        <SectionTitle text={"Customer Reviews"} />
        <WriteAReview rating={overallRating} numberOfReviews={reviews.length} productId={productId} />
        {error ? "" : isLoading ? "Loading..." : <Reviews reviews={reviews} />}
      </div>
    </div>
  );
}
