import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: [],
  reducers: {
    increment: (state, action) => {
      const exitingProduct = state.find(({ id }) => id === action.payload.id);
      if (exitingProduct) {
        exitingProduct.count++;
      } else {
        const newObj = {
          ...action.payload,
          count: 1,
        };

        state.push(newObj);
      }
    },
    decrement: (state, action) => {
      const minusProduct = state.find(({ id }) => action.payload.id);
      if (minusProduct.count > 0) {
        minusProduct.count--;
      } else {
        minusProduct.count = 0;
      }
    },
  },
});
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
