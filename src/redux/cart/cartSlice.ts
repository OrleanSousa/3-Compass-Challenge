import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from './cartTypes';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      
      if (existingItem) {
        // Se o item já existe, apenas atualiza a quantidade
        existingItem.quantity += action.payload.quantity;
      } else {
        // Se o item não existe, adiciona ao carrinho
        state.items.push({ ...action.payload, quantity: action.payload.quantity });
      }
      
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      // Remove um item pelo ID
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      // Remove todos os itens do carrinho
      state.items = [];
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        // Atualiza a quantidade
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
