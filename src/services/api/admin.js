import axios from "axios";
import cookie from "../cookie";
const API_URI = process.env.REACT_APP_API_URI;
const USERS_API_URI = `${API_URI}/admin/users`;
const numberToFetchPerPage = 8;

const getUsers = async (filters) => {
  const token = cookie.getCookie("token");
  const URL = `${USERS_API_URI}?&user_type=${
    filters?.userType
  }&limit=${numberToFetchPerPage}&name=${filters?.name}${
    filters.verified ? `&verified=${filters?.verified}` : ""
  }`;
  // const URL = `${USERS_API_URI}?&user_type=de;
  console.log("Get Filters", filters);
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
  }&name=${filters.name}&user_type=${filters?.userType}${
    filters.verified ? `&verified=${filters?.verified}` : ""
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

const deleteUser = async (userId) => {
  try {
    const token = cookie.getCookie("token");
    const data = await axios.delete(`${USERS_API_URI}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
      data: {
        id: userId,
      },
    });
    // console.log(data)
    return data;
  } catch (error) {
    throw error.response.data;
  }
};
const approveUser = async (userId) => {
  try {
    const token = cookie.getCookie("token");
    const data = await axios.put(
      `${USERS_API_URI}/${userId}`,
      {
        verified: true,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    // console.log(data)
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export default { getUsers, paginateUsers, deleteUser, approveUser };
