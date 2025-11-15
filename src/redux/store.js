import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../features/theme/slice";
const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export default store;
