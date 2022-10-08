import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "jami",
};

export const counterSlice1 = createSlice({
  name: "counter",
  initialState,
  reducers: {
    multiple: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value *= 2;
    },
    divisble: (state) => {
      state.value /= 2;
    },
    operationByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { multiple, divisble, operationByAmount } = counterSlice1.actions;

export default counterSlice1.reducer;
