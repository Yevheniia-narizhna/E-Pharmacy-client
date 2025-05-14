import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { pharmReducer } from "./pharm/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    pharm: pharmReducer,
  },
});
