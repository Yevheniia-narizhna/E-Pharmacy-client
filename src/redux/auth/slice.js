import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo, login, logout, registration } from "./operations";

const initialState = {
  user: {
    name: "",
    email: "",
    phone: "",
  },
  token: "",
  isLoggedIn: false,
  isLoading: false,
  isRefresh: false,
  error: null,
};

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: (state) => {
      state.token = "";
      state.user = { name: "", email: "", phone: "" };
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      })
      .addCase(registration.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        slice.caseReducers.resetAuth(state);
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getUserInfo.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      })
      .addCase(getUserInfo.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const authReducer = slice.reducer;
