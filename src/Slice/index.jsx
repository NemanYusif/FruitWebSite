import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value !== 0) {
        state.value -= 1;
      } else {
        alert("Qadan Alim Almirsan Alma");
      }
    },
  },
});
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
