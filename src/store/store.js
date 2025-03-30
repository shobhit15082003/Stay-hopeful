import { configureStore } from '@reduxjs/toolkit';
import editorReducer from './editorSlice';
import historyReducer from './historySlice';
import themeReducer from './themeSlice';
import favoriteReducer from './favoriteSlice';

export const store = configureStore({
  reducer: {
    editor: editorReducer,
    history: historyReducer,
    theme: themeReducer,
    favorite:favoriteReducer,
  },
});

export default store;
