import { configureStore } from '@reduxjs/toolkit';
import editorReducer from './editorSlice';
import historyReducer from './historySlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    editor: editorReducer,
    history: historyReducer,
    theme: themeReducer,
  },
});

export default store;
