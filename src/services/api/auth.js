import axios from "axios";
const API_URI = process.env.REACT_APP_API_URI;
const LOGIN_API_URI = `${API_URI}/users/login`;
const LOGOUT_API_URI = `${API_URI}/users/logout`;
const REGISTER_API_URI = `${API_URI}/users/register`;
const USER_API_URI = `${API_URI}/users`;

const login = async (user) => {
  const res = await axios.post(LOGIN_API_URI, {
    email: user.email,
    password: user.password,
  });
  return res.data;
};

const getUserData = async (token) => {
  const res = await axios.get(USER_API_URI, {
    headers: { Authorization: "Bearer " + token },
  });
  return res.data;
};

const register = async (newUser) => {
  const res = await axios.post(REGISTER_API_URI, {
    name: newUser.customerName,
    email: newUser.email,
    password: newUser.password,
    mobile: "01279001036",
  });
  return res.data;
};

const logout = async (token) => {
  const res = await axios.post(LOGOUT_API_URI, null, {
    headers: { Authorization: "Bearer " + token },
  });
  return res.data;
};

export default { login, register, logout, getUserData };
