import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  allStores,
  cartCheckout,
  customerReviews,
  // decreaseQuantity,
  deleteFromCart,
  getCartItems,
  getProductById,
  getNearestStores,
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

// const cartActions = [
//   getCartItems,
//   updateCart,
//   cartCheckout,
//   deleteFromCart,
//   addToCart,
//   decreaseQuantity,
// ];

export const slice = createSlice({
  name: "pharm",
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(customerReviews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.reviews = payload;
      })
      .addCase(getNearestStores.fulfilled, (state, { payload }) => {
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
      .addCase(addToCart.fulfilled, (state, { payload }) => {
        const existingIndex = state.cart.findIndex(
          (item) => item.productId._id === payload.productId._id
        );

        if (existingIndex !== -1) {
          state.cart[existingIndex] = payload;
        } else {
          state.cart.push(payload);
        }

        state.isLoading = false;
      })

      // ✅ ОНОВЛЕННЯ КІЛЬКОСТІ
      .addCase(updateCart.fulfilled, (state) => {
        state.isLoading = false;
      })

      // ✅ ОТРИМАННЯ ВСЬОГО КОШИКА
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload.cartProducts;
      })

      // ✅ ВИДАЛЕННЯ З КОШИКА
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        const deletedId = action.meta.arg.productId;
        state.cart = state.cart.filter(
          (item) => item.productId._id !== deletedId
        );
        state.isLoading = false;
      })
      .addCase(cartCheckout.fulfilled, (state) => {
        state.isLoading = false;
        state.cart = []; // очищення тут
      })

      // 🔄 ЗАГАЛЬНИЙ LOADING
      .addMatcher(
        (action) =>
          [
            customerReviews,
            getNearestStores,
            allStores,
            searchProducts,
            getProductById,
            getCartItems,
            updateCart,
            cartCheckout,
            deleteFromCart,
            addToCart,
          ].some((thunk) => thunk.pending.match(action)),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )

      // ❌ ПОМИЛКИ
      .addMatcher(
        (action) =>
          [
            customerReviews,
            getNearestStores,
            allStores,
            searchProducts,
            getProductById,
            getCartItems,
            updateCart,
            cartCheckout,
            deleteFromCart,
            addToCart,
          ].some((thunk) => thunk.rejected.match(action)),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { setCurrentPage, clearCart } = slice.actions;
export const pharmReducer = slice.reducer;
