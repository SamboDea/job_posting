import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../features/theme/slice";
import authSlice from "../features/auth/slice";
const store = configureStore({
  reducer: {
    theme: themeSlice,
    auth: authSlice,
  },
});

export default store;
