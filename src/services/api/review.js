import axios from "axios";
const API_URI = process.env.REACT_APP_API_URI;
const PRODUCTS_API_URI = `${API_URI}/products`;
const REVIEWS_API_URI = `${API_URI}/reviews`;


const fetchReviewsById = async (productId) => {
    const response = await axios.get(
      `${PRODUCTS_API_URI}/${productId}/reviews`
    );
    return response.data.data;
};

const addReview = async (reviewDetails,accessToken) => {
    const response = await axios.post(
      REVIEWS_API_URI,
      reviewDetails,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
};

export default { fetchReviewsById, addReview };
