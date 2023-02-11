import { configureStore } from '@reduxjs/toolkit';
import stateReducer from './slice';

const store = configureStore({
  reducer: stateReducer,
});

export default store;
