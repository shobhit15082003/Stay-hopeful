import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = editorSlice.actions;
export default editorSlice.reducer;
