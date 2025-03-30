import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: null,
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setResult: (state, action) => {
      state.result = action.payload;
    },
    clearResult: (state) => {
      state.result = null;
    },
  },
});

export const { setResult, clearResult } = resultSlice.actions;
export default resultSlice.reducer;
