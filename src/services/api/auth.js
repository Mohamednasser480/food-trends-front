import axios from 'axios';
const API_URI = process.env.REACT_APP_API_URI;
const LOGIN_API_URI = `${API_URI}/users/login`;
const LOGOUT_API_URI = `${API_URI}/users/logout`;
const REGISTER_API_URI = `${API_URI}/users/register`;
const USER_API_URI = `${API_URI}/users`;
const VERIFY_API_URI = `${API_URI}/users/confirm`;

const login = async (user) => {
  try {
    const res = await axios.post(LOGIN_API_URI, {
      email: user.email,
      password: user.password,
    });
    return res.data;
  } catch (e) {
    throw e.response.data;
  }
};

const verify = async (codeTokenObject) => {
  try {
    const res = await axios.post(
      VERIFY_API_URI,
      { confirmationCode: codeTokenObject.code },
      {
        headers: { Authorization: 'Bearer ' + codeTokenObject.token },
      }
    );
    // console.log(res)
    return res.data;
  } catch (e) {
    throw e.response.data;
  }
};

const getUserData = async (token) => {
  try {
    const res = await axios.get(USER_API_URI, {
      headers: { Authorization: 'Bearer ' + token },
    });
    return res.data;
  } catch (e) {
    throw e.response.data;
  }
};

const register = async (newUser) => {
  try {
    console.log(newUser);
    const res = await axios.post(REGISTER_API_URI, {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      mobile: newUser.mobile,
      city: newUser.address.city,
      governorate: newUser.address.governorate,
    });

    return res.data;
  } catch (e) {
    throw e.response.data;
  }
};

const registerVendor = async (newUser) => {
  try {
    const res = await axios.post(REGISTER_API_URI, {
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      mobile: '01279001036',
      storeName: newUser.storeName,
      userType: 'vendor',
    });

    return res.data;
  } catch (e) {
    throw e.response.data;
  }
};

const logout = async (token) => {
  try {
    const res = await axios.post(LOGOUT_API_URI, null, {
      headers: { Authorization: 'Bearer ' + token },
    });
    return res.data;
  } catch (e) {
    throw e.response.data;
  }
};

export default { login, register, logout, getUserData, verify, registerVendor };
