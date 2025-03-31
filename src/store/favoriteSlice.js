import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    //   if (state.favorites.length > 10) {   /.to store only 10 favorites
    //     state.favorites.shift(); 
    //   }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(item => item !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
