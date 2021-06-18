import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './noteReducer';

const store = configureStore({
  reducer: noteReducer,
});

export default store;
