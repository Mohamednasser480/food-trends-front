import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services/api";
import { cookie } from "../../services";

const initialState = {
  user: {},
  token: "",
  status: "idle", // "idle" | "loading" | "succeeded" | "error"
  error: "",
};

export const login = createAsyncThunk("auth/login", async (user) => {
  const data = await authService.login(user);
  cookie.setCookie("token", data.token, 3);
  return data;
});

export const getUserData = createAsyncThunk(
  "auth/getUserData",
  async (token) => {
    return await authService.getUserData(token);
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  const token = cookie.getCookie("token");
  const data = await authService.logout(token);
  cookie.eraseCookie("token");
  return data;
});

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (payload) => {
    const userData = await authService.register(payload);
    cookie.setCookie("token", userData.token, 3);
    return userData;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // Login Reducers
    [login.pending]: (state) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.status = "succeeded";
      state.user = payload.user;
      state.token = payload.token;
      state.error = null;
    },
    [login.rejected]: (state, { error }) => {
      state.status = "error";
      state.error = error.message;
    },
    // Logout Reducers
    [logout.pending]: (state) => {
      state.status = "loading";
    },
    [logout.fulfilled]: (state) => {
      state.user = {};
      state.status = "idle";
      state.token = "";
      state.error = null;
    },
    [logout.rejected]: (state, { error }) => {
      state.status = "error";
      state.error = error;
    },
    // Get User Data Reducers
    [getUserData.pending]: (state) => {
      state.status = "loading";
    },
    [getUserData.fulfilled]: (state, { payload }) => {
      state.status = "succeeded";
      state.token = payload.token;
      state.user = payload.user;
      state.error = null;
    },
    // Register Reducers
    [registerUser.pending]: (state) => {
      state.status = "loading";
    },
    [registerUser.fulfilled]: (state, { payload: user }) => {
      state.status = "succeeded";
      state.user = user.user;
      state.token = user.token;
      state.error = null;
    },
    [registerUser.rejected]: (state, { error }) => {
      state.status = "error";
      state.error = error.message;
    },
  },
});

export default authSlice;
export const selectUserToken = (state) => state.auth.token;
export const selectUserData = (state) => state.auth.user;
export const selectStatus = (state) => state.auth.status;
export const authReducer = authSlice.reducer;
