import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services/api";
import { cookie } from "../../services";

const initialState = {
  user: {},
  token: "",
  status: "idle", // "idle" | "loading" | "succeeded" | "error"
  error: "",
  login: {
    status: "",
    error: "",
  },
  register: {
    status: "",
    error: "",
  },
  verify: {
    status: "",
    error: "",
  },
};

export const login = createAsyncThunk("auth/login", async (user) => {
  try {
    const data = await authService.login(user);

    cookie.setCookie("token", data.token, 3);
    if (data.user.status == "Pending") {
      throw "Pending";
    }
    return data;
  } catch (error) {
    throw error;
  }
});
// Verify User
export const verifyUser = createAsyncThunk(
  "auth/verifyUser",
  async (codeTokenObject) => {
    try {
      const data = await authService.verify(codeTokenObject);
      // cookie.setCookie("token", data.token, 3);
      return data;
    } catch (error) {
      // console.log(error);
      throw error.msg;
    }
  }
);

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
    // cookie.setCookie("token", userData.token, 3);
    return userData;
  }
);

export const registerVendor = createAsyncThunk(
  "auth/registerVendor",
  async (payload) => {
    const userData = await authService.registerVendor(payload);
    return userData;
  }
);

export const registerDelivery = createAsyncThunk(
  "auth/registerDelivery",
  async (payload) => {
    const userData = await authService.registerDelivery(payload);
    return userData;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeRegisterStatus(state, action) {
      state.register.status = action.payload || "idle";
    },
    changeLoginStatus(state, action) {
      state.login.status = action.payload || "idle";
      state.login.error = "";
    },
    changeVerifyStatus(state, action) {
      state.verify.status = action.payload || "idle";
      state.verify.error = "";
    },
  },
  extraReducers: {
    // Login Reducers
    [login.pending]: (state) => {
      // state.status = "loading";
      state.login.status = "loading";
    },
    [login.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      state.status = "succeeded";
      if (payload.user.status !== "Pending") {
        state.user = payload.user;
      }
      state.token = payload.token;
      state.error = null;
      state.login.status = "succeeded";
      state.login.error = "";
    },
    [login.rejected]: (state, { error }) => {
      state.status = "error";
      state.error = error.message;
      state.login.status = "error";
      state.login.error = error.message;
    },
    // Verify Reducers
    [verifyUser.pending]: (state) => {
      state.verify.status = "loading";
    },
    [verifyUser.fulfilled]: (state, { payload }) => {
      // console.log(payload);
      state.status = "succeeded";
      state.user = payload;
      state.token = payload.token;
      state.verify.status = "succeeded";
      state.verify.error = "";
      state.error = "";      
    },
    [verifyUser.rejected]: (state, { error }) => {
      state.verify.status = "error";
      state.verify.error = error.message;
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
      state.login.status = "";
      state.login.error = "";
      state.register.status = "";
      state.register.error = "";
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
      if (payload.user.status !== "Pending") {
        state.status = "succeeded";
        state.token = payload.token;
        state.user = payload.user;
        state.error = null;
        state.login.status = "succeeded";
      }
    },
    // Register Reducers
    [registerUser.pending]: (state) => {
      state.status = "loading";
      state.register.status = "loading";
    },
    [registerUser.fulfilled]: (state, { payload: user }) => {
      // state.status = "Pending";
      // state.user = user.user;
      // state.token = user.token;
      state.error = null;
      state.register.status = "succeeded";
      state.register.error = "";
    },
    [registerUser.rejected]: (state, { error }) => {
      state.status = "error";
      state.error = error.message;
      state.register.status = "error";
      state.register.error = error.message;
    },
    // RegisterVendor Reducers
    [registerVendor.pending]: (state) => {
      state.status = "loading";
      state.register.status = "loading";
    },
    [registerVendor.fulfilled]: (state, { payload: user }) => {
      // state.status = "Pending";
      // state.user = user.user;
      // state.token = user.token;
      state.error = null;
      state.register.status = "succeeded";
      state.register.error = "";
    },
    [registerVendor.rejected]: (state, { error }) => {
      state.status = "error";
      state.error = error.message;
      state.register.status = "error";
      state.register.error = error.message;
    },
    // RegisterDelivery Reducers
    [registerDelivery.pending]: (state) => {
      state.status = "loading";
      state.register.status = "loading";
    },
    [registerDelivery.fulfilled]: (state, { payload: user }) => {
      // state.status = "Pending";
      // state.user = user.user;
      // state.token = user.token;
      state.error = null;
      state.register.status = "succeeded";
      state.register.error = "";
    },
    [registerDelivery.rejected]: (state, { error }) => {
      state.status = "error";
      state.error = error.message;
      state.register.status = "error";
      state.register.error = error.message;
    },
  },
});

export default authSlice;
export const selectUserToken = (state) => state.auth.token;
export const selectUserData = (state) => state.auth.user;
export const selectStatus = (state) => state.auth.status;
export const loginSelector = (state) => state.auth.login;
export const registerSelector = (state) => state.auth.register;
export const verifySelector = (state) => state.auth.verify;
export const loginErrorSelector = (state) => state.auth.login.error;
export const { changeRegisterStatus, changeLoginStatus, changeVerifyStatus } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
