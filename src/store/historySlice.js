import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  history: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addToHistory: (state, action) => {
      state.history.unshift(action.payload);
      if (state.history.length > 10) {
        state.history.pop(); // Remove the oldest entry to keep only 10 items
      }
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});
// console.log("Exported actions from historySlice:", historySlice.actions);

export const { addToHistory, clearHistory } = historySlice.actions;
export default historySlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const historySlice = createSlice({
//   name: "history",
//   initialState: {
//     queries: [],
//   },
//   reducers: {
//     addQuery: (state, action) => {
//       state.queries.unshift(action.payload); // Newest query on top
//     },
//   },
// });

// export const { addQuery } = historySlice.actions;
// export default historySlice.reducer;
