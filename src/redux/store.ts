import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice'; // Importa o reducer do carrinho

// Configura o store
export const store = configureStore({
  reducer: {
    cart: cartReducer, // Adicione outros reducers se necessário
  },
});

// Tipos auxiliares para uso no app
export type RootState = ReturnType<typeof store.getState>; // Tipo para o estado global
export type AppDispatch = typeof store.dispatch; // Tipo para o dispatch
