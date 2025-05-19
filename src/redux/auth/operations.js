import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const pharmApi = axios.create({
  baseURL: "https://e-pharmacy-shop-back.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const setToken = (token) => {
  pharmApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  pharmApi.defaults.headers.common.Authorization = "";
};

const saveTokens = (token) => {
  setToken(token);
  localStorage.setItem("refreshToken", token);
  localStorage.setItem("accessToken", token);
};

const errorMessages = {
  400: "Validation error: please check your data",
  401: "You are not authorized to log out.",
  409: "Error: User with this email already exists",
  default: "Something went wrong. Please try again later",
};

const handleError = (error, fallbackMessage) => {
  const status = error.response?.status;
  const message =
    errorMessages[status] || fallbackMessage || errorMessages.default;
  toast.error(message);
  return error.message;
};

export const registration = createAsyncThunk(
  "register",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await pharmApi.post("/user/register", body);
      saveTokens(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

export const login = createAsyncThunk(
  "login",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await pharmApi.post("/user/login", body);
      saveTokens(data.token);
      toast.success(`Welcome to E-Pharmacy ${data.user.name}!`);
      return data;
    } catch (error) {
      return rejectWithValue(
        handleError(error, "Email or password is invalid")
      );
    }
  }
);

export const logout = createAsyncThunk(
  "logout",
  async (_, { rejectWithValue }) => {
    try {
      await pharmApi.get("/user/logout");
      clearToken();
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
    } catch (error) {
      return rejectWithValue(handleError(error));
    }
  }
);

export const getUserInfo = createAsyncThunk(
  "user-info",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await pharmApi.get("/user/user-info");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
