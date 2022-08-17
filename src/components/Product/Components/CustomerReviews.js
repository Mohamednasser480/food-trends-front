import React, { useEffect, useState } from "react";
import { SectionTitle } from "../../UI";
import { Reviews, WriteAReview, ReviewLoader } from "../";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, reviewsSelector } from "../../../store/slices/reviews";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CustomerReviews({ productId }) {
  // Fetch Reviews Here to send Them to both Write a Review and Reviews ( Use Product ID )
  let { reviews, isLoading, error, filter } = useSelector(reviewsSelector);

  let filterObj = {
    ...filter,
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReviews({ productId, filterObj }));
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
    // get Over all rating
    setOverallRating(getOverALlRating());
    // Sort Reviews
    sortReviews();
  }, [reviews]);

  let [overallRating, setOverallRating] = useState(0);
  let [sortedReviews, setSortedReviews] = useState(reviews);
  function sortReviews() {
    const sorted = [...reviews];
    sorted.sort((a, b) => {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });
    setSortedReviews(sorted);
  }

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
            <h4 className="my-2">{error}</h4>
          </>
        ) : isLoading ? (
          <ReviewLoader />
        ) : (
          <Reviews reviews={sortedReviews} />
        )}
      </div>
    </div>
  );
}
