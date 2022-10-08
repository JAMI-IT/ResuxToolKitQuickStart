import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  names: "",
  userData: {},
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    update: (state, action) => {
      state.names = action.payload;
    },
    user: (state, action) => {
      state.userData = action.payload;
      console.log(state.userData);
    },
  },
});

// Action creators are generated for each case reducer function

export const { update, user } = counterSlice.actions;

export default counterSlice.reducer;
