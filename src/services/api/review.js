import axios from "axios";
const API_URI = process.env.REACT_APP_API_URI;
const PRODUCTS_API_URI = `${API_URI}/products`;
const REVIEWS_API_URI = `${API_URI}/reviews`;

const fetchReviewsByRating = async ({ productId, filterObj }) => {
  const filterByRating = () => {
    if (filterObj.rating == 0 || !filterObj) return "";

    let url;

    switch (filterObj.rating) {
      case "1":
        url = "min_rate=0&max_rate=1";
        break;
      case "2":
        url = "min_rate=1&max_rate=2";
        break;
      case "3":
        url = "min_rate=2&max_rate=3";
        break;
      case "4":
        url = "min_rate=3&max_rate=4";
        break;
      case "5":
        url = "min_rate=4&max_rate=5";
        break;
      default:
        url = "";
        break;
    }
    return url;
  };

  const response = await axios.get(
    `${PRODUCTS_API_URI}/${productId}/reviews${filterByRating()}`
  );
  return response.data.data;
};

const addReview = async (reviewDetails, accessToken) => {
  const response = await axios.post(REVIEWS_API_URI, reviewDetails, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export default { fetchReviewsByRating, addReview };
