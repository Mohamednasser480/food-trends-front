import axios from "axios";
import cookie from "../cookie";
const API_URI = process.env.REACT_APP_API_URI;
const USERS_API_URI = `${API_URI}/admin/users`;

const token = cookie.getCookie("token");
const getUsers = async () => {
  try {
    const response = await axios.get(USERS_API_URI, {
      headers: { Authorization: "Bearer " + token },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    throw error.response.data;
  }
};

export default { getUsers };
