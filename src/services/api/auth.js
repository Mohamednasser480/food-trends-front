import axios from "axios";
const API_URI = process.env.REACT_APP_API_URI;
const LOGIN_API_URI = `${API_URI}/users/login`;
const LOGOUT_API_URI = `${API_URI}/users/logout`;
const REGISTER_API_URI = `${API_URI}/users/register`;
const USER_API_URI = `${API_URI}/users`;

const login = async (email, password) => {
  try {
    const res = await axios.post(LOGIN_API_URI, {
      email,
      password,
    });
    return res.data;
  } catch (e) {
    console.log(`Auth Error: ${e.message}`);
  }
};

const getUserData = async (token) => {
  console.log("token", token);
  try {
    const res = await axios.get(USER_API_URI, {
      headers: { Authorization: "Bearer " + token },
    });
    return res.data;
  } catch (e) {
    console.log(`Auth Error: ${e.message}`);
  }
};

const register = async (newUser) => {
  console.log(newUser);
  try {
    return await axios.post(REGISTER_API_URI, {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      mobile: newUser.mobile,
    });
  } catch (e) {
    console.log(`Auth Error: ${e.message}`);
  }
};

const logout = async (token) => {
  try {
    const res = await axios.post(LOGOUT_API_URI, {
      headers: { Authorization: "Bearer " + token },
    });
    return res.data;
  } catch (e) {
    console.log(`Auth Error: ${e.message}`);
  }
};

export default { login, register, logout, getUserData };
