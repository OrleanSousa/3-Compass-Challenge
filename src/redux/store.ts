// store.ts ou onde você configurar sua store
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Tipagem do estado global

export default store;
