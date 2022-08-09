import axios from "axios";
const API_URI = process.env.REACT_APP_API_URI;
const PRODUCT_API_URI = `${API_URI}/products`;

//Get All Available Products
const getAllProducts = async () => {
  const res = await axios.get(PRODUCT_API_URI);
  return res.data;
};

//Get a product By Id
const getProductById = async (id) => {
  const res = await axios.get(`${PRODUCT_API_URI}/${id}`);
  return res.data;
};

//Get a product reviews By Id
const getProductReviews = async (id) => {
  const res = await axios.get(`${PRODUCT_API_URI}/${id}/reviews`);
  return res.data;
};

// Get most Similar products By Id
const getMostSimilar = async (category) => {
  const res = await axios.get(
    `${PRODUCT_API_URI}?sortBy:rate&category=${category}&limit=10`
  );
  return res.data;
};

//Get Featured Products
const getFeaturedProducts = async () => {
  const res = await axios.get(`${PRODUCT_API_URI}?limit=10&sortBy=rate:desc`);
  return res.data;
};
//Get Search Result
const getSearchResult = async (productName) => {
  const res = await axios.get(
    `${PRODUCT_API_URI}?limit=10&search=${productName}`
  );
  return res.data;
};

//Get Filtered Products on Shop page
const getFilteredProducts = async (payload) => {
  // ex: payload={ number: 5, filter: "rating" ,category="all" }
  let res = [];
  switch (payload.filter) {
    case "rating":
      res = await axios.get(
        `${PRODUCT_API_URI}?sortBy=rate:desc${
          payload.category && "&category=" + payload.category
        }`
      );
      break;
    case "latest":
      res = await axios.get(
        `${PRODUCT_API_URI}?sortBy=createdAt:desc${
          payload.category && "&category=" + payload.category
        }`
      );
      break;
    case "lowtohigh":
      res = await axios.get(
        `${PRODUCT_API_URI}?sortBy=price:asc${
          payload.category && "&category=" + payload.category
        }`
      );
      break;
    case "hightolow":
      res = await axios.get(
        `${PRODUCT_API_URI}?sortBy=price:desc${
          payload.category && "&category=" + payload.category
        }`
      );
      break;

    default:
      res = await axios.get(
        `${PRODUCT_API_URI}?${
          payload.category && "category=" + payload.category
        }`
      );
      break;
  }
  return res.data;
};
export default {
  getAllProducts,
  getProductById,
  getProductReviews,
  getMostSimilar,
  getFeaturedProducts,
  getSearchResult,
  getFilteredProducts,
};
