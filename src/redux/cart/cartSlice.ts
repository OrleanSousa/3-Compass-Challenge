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
        // If the item already exists, just update the quantity
        existingItem.quantity += action.payload.quantity;
      } else {
        //If the item does not exist, add it to the cart
        state.items.push({ ...action.payload, quantity: action.payload.quantity });
      }
      
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      // Remove an item by ID
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      // Remove all items from the cart
      state.items = [];
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        // Update quantity
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
