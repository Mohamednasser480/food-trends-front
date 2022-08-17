import axios from "axios";
import cookie from "../cookie";
const API_URI = process.env.REACT_APP_API_URI;
const PRODUCTS_API_URI = `${API_URI}/admin/products`;
const numberToFetchPerPage = 10;

const getProducts = async (filters) => {
  const token = cookie.getCookie("token");
  const URL = `${PRODUCTS_API_URI}?&limit=${numberToFetchPerPage}&search=${
    filters?.name
  }${filters.available ? `&available=${filters?.available}` : ""}`;
  console.log(URL);
  try {
    const response = await axios.get(URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
};

const paginateProducts = async (Args, filters) => {
  const token = cookie.getCookie("token");

  const pageNumber = Args?.pageNumber || 1;
  const URL = `${PRODUCTS_API_URI}?&limit=${numberToFetchPerPage}&search=${
    filters?.name
  }${filters.available ? `&available=${filters?.available}` : ""}&skip=${
    (pageNumber - 1) * numberToFetchPerPage
  }`;
  console.log(URL);

  try {
    const response = await axios.get(URL, {
      headers: { Authorization: "Bearer " + token },
    });
    // console.log(response.data);
    return { data: response.data, currentPage: pageNumber };
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
};

export default { getProducts, paginateProducts };
