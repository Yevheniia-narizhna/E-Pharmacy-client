import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  allStores,
  cartCheckout,
  customerReviews,
  decreaseQuantity,
  deleteFromCart,
  getCartItems,
  getProductById,
  nearestStores,
  searchProducts,
  updateCart,
} from "./operations";

const initialState = {
  products: [],
  product: null,
  stores: [],
  nearestStores: [],
  reviews: [],
  cart: [],
  currentPage: 1,
  totalPages: null,
  totalProducts: null,
  isLoading: false,
  error: null,
};

const cartActions = [
  getCartItems,
  updateCart,
  cartCheckout,
  deleteFromCart,
  addToCart,
  decreaseQuantity,
];

export const slice = createSlice({
  name: "pharm",
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(customerReviews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.reviews = payload;
      })
      .addCase(nearestStores.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.nearestStores = payload;
      })
      .addCase(allStores.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.stores = payload;
      })
      .addCase(searchProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.products = payload.products;
        state.currentPage = payload.currentPage;
        state.totalPages = payload.totalPages;
        state.totalProducts = payload.totalProducts;
      })
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.product = payload;
      })
      .addMatcher(
        (action) => cartActions.some((thunk) => thunk.fulfilled.match(action)),
        (state, { payload }) => {
          state.isLoading = false;
          state.cart = payload;
        }
      )
      .addMatcher(
        (action) =>
          [
            customerReviews,
            nearestStores,
            allStores,
            searchProducts,
            getProductById,
            ...cartActions,
          ].some((thunk) => thunk.pending.match(action)),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) =>
          [
            customerReviews,
            nearestStores,
            allStores,
            searchProducts,
            getProductById,
            ...cartActions,
          ].some((thunk) => thunk.rejected.match(action)),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { setCurrentPage } = slice.actions;
export const pharmReducer = slice.reducer;
