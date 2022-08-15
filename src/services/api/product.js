import axios from "axios";
const API_URI = process.env.REACT_APP_API_URI;
const PRODUCT_API_URI = `${API_URI}/products`;

//Get All Available Products
const getAllProducts = async () => {
  const res = await axios.get(PRODUCT_API_URI);
  return res.data.data;
};

//Get a product By Id
const getProductById = async (id) => {
  const res = await axios.get(`${PRODUCT_API_URI}/${id}`);
  return res.data;
};

//Get a product reviews By Id
const getProductReviews = async (id) => {
  const res = await axios.get(`${PRODUCT_API_URI}/${id}/reviews`);
  return res.data.data;
};

// Get most Similar products By Id
const getMostSimilar = async (category) => {
  const res = await axios.get(
    `${PRODUCT_API_URI}?sortBy:rate&category=${category}&limit=10`
  );
  return res.data.data;
};

//Get Featured Products
const getFeaturedProducts = async () => {
  const res = await axios.get(`${PRODUCT_API_URI}?limit=10&sortBy=rate:desc`);
  return res.data.data;
};
//Get Search Result
const getSearchResult = async (productName) => {
  const res = await axios.get(
    `${PRODUCT_API_URI}?limit=10&search=${productName}`
  );
  return res.data.data;
};

//Get Filtered Products on Shop page
const getFilteredProducts = async (payload) => {
  // ex: payload={ number: 5, filter: "rating" ,category="all" }
  const filterCategory = () => {
    if (!payload.category) return "";
    if (payload.category !== "all") {
      return `category=${payload.category}`;
    }
    return "";
  };

  const sortFilter = () => {
    if (!payload.filter || payload.filter == "all") return "";
    let sortQuery;
    switch (payload.filter) {
      case "rating":
        sortQuery = `rate:desc`;
        break;
      case "latest":
        sortQuery = `createdAt:desc`;
        break;
      case "lowtohigh":
        sortQuery = `price:asc`;
        break;
      case "hightolow":
        sortQuery = `price:desc`;
        break;

      default:
        sortQuery = "";
        break;
    }
    return `sortBy=${sortQuery}`;
  };

  const pricesFilter = () => {
    if (!payload.price || payload.price == "all") return "";
    const [min, max] = payload.price.split(",");
    return `max_price=${max}&min_price=${min}`;
  };
  const productsPerPage=8; //Change to 10
  const queryURL = `${PRODUCT_API_URI}?limit=${productsPerPage}&skip=${(payload.pageNumber-1)*productsPerPage}
  &${filterCategory()}&${sortFilter()}&${pricesFilter()}`;
  // console.log(queryURL)
  let res = await axios.get(queryURL);
  // console.log("%c" + queryURL, "color:red;font-size:20px");
  return {data:res.data.data,count:res.data.count};
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
