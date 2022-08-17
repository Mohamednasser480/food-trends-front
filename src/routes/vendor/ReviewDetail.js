import React, { useEffect, useState } from "react";
import { Search, Loader, DashboardPage } from "../../components/UI";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, reviewsSelector } from "../../store/slices/reviews";
import ReviewDetailsData from "./ReviewDetailsData";

const ReviewDetail = ({ productId }) => {
  const { reviews, isLoading, filter } = useSelector(reviewsSelector);
  const [reviewsSearch, setReviewsSearch] = useState([]);
  const dispatch = useDispatch();

  const [ratingValue, setRatingValue] = useState(null);

  let filterObj = {
    ...filter,
  };

  //--------- Filters -------------/
  const handleRatingFilter = (e) => {
    setRatingValue(e.target.value);
    console.log(e.target.value);
    filterObj.rating = ratingValue;
  };

  useEffect(() => {
    dispatch(fetchReviews({ productId, filterObj }));
  }, [ratingValue, dispatch, reviewsSearch]);

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = e.target.value;

    if (keyword !== "") {
      const result = reviews.filter((item) => {
        return item.customer?.name
          ?.toLowerCase()
          .includes(keyword.toLowerCase());
      });
      setReviewsSearch(result);
    } else setReviewsSearch(reviews);
  };

  return (
    <DashboardPage>
      {isLoading ? <Loader /> : null}
      {!reviews.length ? (
        <div className=" text-center">No Reviews Yet</div>
      ) : (
        <>
          <div className="flex w-full  gap-x-5 p-3">
            <Search onChange={handleSearch} />
            <div className="w-1/5 justify-self-end">
              <select
                defaultValue={0}
                className="select select-bordered w-full max-w-xs"
                onChange={handleRatingFilter}
              >
                <option value={0} disabled>
                  Filter by rating
                </option>
                <option value={1}> {">"} 1</option>
                <option value={2}>1 - 2</option>
                <option value={3}>2 - 3</option>
                <option value={4}>3 - 4</option>
                <option value={5}>4 - 5</option>
              </select>
            </div>
          </div>
          <table className="table w-full">
            <thead>
              <tr className=" text-center">
                <td>Customer Name</td>
                <td>Product(s)</td>
                <td>Rating</td>
                <td>Comments</td>
                <td>Contact</td>
                <td>Created At</td>
              </tr>
            </thead>

            {
              <tbody>
                {reviewsSearch.length
                  ? reviewsSearch.map((item) => {
                      return (
                        <ReviewDetailsData item={item} key={item.createdAt} />
                      );
                    })
                  : reviews.map((item) => {
                      return (
                        <ReviewDetailsData item={item} key={item.createdAt} />
                      );
                    })}
              </tbody>
            }
          </table>
        </>
      )}
    </DashboardPage>
  );
};

export default ReviewDetail;
