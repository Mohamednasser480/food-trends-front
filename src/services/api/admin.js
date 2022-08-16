import axios from "axios";
import cookie from "../cookie";
const API_URI = process.env.REACT_APP_API_URI;
const USERS_API_URI = `${API_URI}/admin/users`;
const numberToFetchPerPage = 8;

const getUsers = async (filters) => {
  const token = cookie.getCookie("token");
  const URL = `${USERS_API_URI}?&limit=${numberToFetchPerPage}&name=${filters?.name}&verified=${filters?.verified}`;
  console.log("Get Filters",URL);
  try {
    const response = await axios.get(URL, {
      headers: { Authorization: "Bearer " + token },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
};

const paginateUsers = async (Args, filters) => {
  const token = cookie.getCookie("token");

  const pageNumber = Args?.pageNumber || 1;

  const URL = `${USERS_API_URI}?&limit=${numberToFetchPerPage}&skip=${
    (pageNumber - 1) * numberToFetchPerPage
  }&name=${filters.name}&verified=${filters.verified}`;
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

export default { getUsers, paginateUsers };
