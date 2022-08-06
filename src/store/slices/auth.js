import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services/api";
import { cookie } from "../../services";

const initialState = {
  user: {},
  token: "",
  status: "idle", // "idle" | "loading" | "succeeded" | "error"
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.status = "succeeded";
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(login.rejected, (state, { error }) => {
        state.status = "error";
        state.error = error.message;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = {};
        state.status = "idle";
        state.token = "";
      })
      .addCase(logout.rejected, (state, { error }) => {
        state.status = "error";
        state.error = error;
      })
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.token = payload.token;
        state.user = payload.user;
      })
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, { payload: user }) => {
        state.status = "succeeded";
        state.loggedIn = true;
        state.email = user.email;
        state.token = user.token;
      })
      .addCase(registerUser.rejected, (state, { error }) => {
        state.status = "error";
        state.error = error.message;
      }),
});

export const login = createAsyncThunk("auth/login", async (payload) => {
  const data = await authService.login(payload.email, payload.password);
  cookie.setCookie("token", data.token, 3);
  return data;
});

export const getUserData = createAsyncThunk(
  "auth/getUserData",
  async (token) => {
    console.log("token", token);
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
    return await authService.register(payload);
  }
);

export default authSlice;
export const selectUserToken = (state) => state.auth.token;
export const selectUserData = (state) => state.auth.user;
export const selectStatus = (state) => state.auth.status;
export const authReducer = authSlice.reducer;
