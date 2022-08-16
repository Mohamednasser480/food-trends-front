import axios from "axios";
import cookie from "../cookie";
const API_URI = process.env.REACT_APP_API_URI;
const USERS_API_URI = `${API_URI}/admin/users`;
const numberToFetchPerPage = 8;

const token = cookie.getCookie("token");
const getUsers = async (Args) => {
  try {
    const response = await axios.get(
      `${USERS_API_URI}?&limit=${numberToFetchPerPage}`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
};

const paginateUsers = async (Args) => {
  const pageNumber = Args?.pageNumber || 1;
  console.log(pageNumber);

  const URL = `${USERS_API_URI}?&limit=${numberToFetchPerPage}&skip=${
    (pageNumber - 1) * numberToFetchPerPage
  }`;

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
