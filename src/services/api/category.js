import axios from "axios";
const API_URI = process.env.REACT_APP_API_URI;
const CATEGORY_API_URI = `${API_URI}/products/categories`;
const fetchCategories = async () => {
  try {
    const response = await axios.get(CATEGORY_API_URI);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


export default {fetchCategories}