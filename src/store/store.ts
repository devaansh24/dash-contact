import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';


export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;
