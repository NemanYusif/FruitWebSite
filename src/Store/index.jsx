import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
