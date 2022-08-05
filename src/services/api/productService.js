import axios from "axios";

const PRODUCT_API_URI = `http://localhost:3000/api/v1/products`;

//Get All Available Products
const getAllProducts = async () => {
  await axios.get(PRODUCT_API_URI).then((res) => {
    return res;
  });
};

//Get a product By Id
const getProductById = async (id) => {
  await axios.post(`${PRODUCT_API_URI}/${id}`).then((res) => {
    return res;
  });
};

//Get a product reviews By Id
const getProductReviews = async (id) => {
  await axios.post(`${PRODUCT_API_URI}/${id}/reviews`).then((res) => {
    return res;
  });
};

// Get most Similar products By Id
const getMostSimilar = async (id) => {
  await axios.post(`${PRODUCT_API_URI}/mostSimilar/${id}`).then((res) => {
    return res;
  });
};

export default {
  getAllProducts,
  getProductById,
  getProductReviews,
  getMostSimilar,
};
