import { createAsyncThunk } from "@reduxjs/toolkit";
import { pharmApi, setToken } from "../auth/operations";
import { toast } from "react-toastify";
import axios from "axios";

export const pharmApiPh = axios.create({
  baseURL: "https://e-pharmacy-shop-back.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

const withAuthToken = (getState) => {
  const token = getState().auth.token;
  if (token) setToken(token);
};

export const allStores = createAsyncThunk(
  "stores/all",
  async ({ limit = "" }, { rejectWithValue }) => {
    try {
      const response = await pharmApiPh.get(`/stores?limit=${limit}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getNearestStores = createAsyncThunk(
  "stores/nearest",
  async ({ limit = 6 }, { rejectWithValue }) => {
    try {
      const response = await pharmApiPh.get(`/stores/nearest?limit=${limit}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const searchProducts = createAsyncThunk(
  "products/fetchBySearch",
  async (body, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams(body).toString();
      const response = await pharmApiPh.get(`/products?${params}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProductById = createAsyncThunk(
  "products/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await pharmApi.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const customerReviews = createAsyncThunk(
  "reviews/fetch",
  async ({ limit = 3 }, { rejectWithValue }) => {
    try {
      const response = await pharmApiPh.get(`/customer-reviews?limit=${limit}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getCartItems = createAsyncThunk(
  "cart/fetchItems",
  async (_, { rejectWithValue, getState }) => {
    try {
      withAuthToken(getState);
      const response = await pharmApi.get("/cart");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateCart = createAsyncThunk(
  "cart/update",
  async (body, { rejectWithValue, getState }) => {
    try {
      withAuthToken(getState);
      const response = await pharmApi.put("/cart/update", body);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addToCart = createAsyncThunk(
  "cart/addItem",
  async (body, { rejectWithValue, getState }) => {
    try {
      withAuthToken(getState);
      // console.log("addToCart body:", body);
      const response = await pharmApi.patch("/cart/add", body);
      toast.success("Product added to cart.");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const cartCheckout = createAsyncThunk(
  "cart/checkout",
  async (body, { rejectWithValue, getState }) => {
    try {
      withAuthToken(getState);
      const response = await pharmApi.post("/cart/checkout", body);
      toast.success("Order successful!");
      return response.data;
    } catch (error) {
      toast.error("Checkout failed.");
      return rejectWithValue(error.message);
    }
  }
);

export const decreaseQuantity = createAsyncThunk(
  "cart/decreaseItem",
  async (body, { rejectWithValue, getState }) => {
    try {
      withAuthToken(getState);
      const response = await pharmApi.patch("/cart/decrease", body);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFromCart = createAsyncThunk(
  "cart/deleteItem",
  async ({ productId }, { rejectWithValue, getState }) => {
    try {
      withAuthToken(getState);
      const response = await pharmApi.delete(`/cart/remove/${productId}`);
      toast.success("Product removed from cart.");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
