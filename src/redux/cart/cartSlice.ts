import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Tipos para os itens do carrinho e o estado do carrinho
interface CartItem {
  id: string; // ID único do produto
  name: string; // Nome do produto
  price: number; // Preço do produto
  quantity: number; // Quantidade do produto no carrinho
  image?: string; // (Opcional) Imagem do produto
}

interface CartState {
  items: CartItem[]; // Lista de itens no carrinho
  totalAmount: number; // Valor total dos itens no carrinho
}

// Estado inicial do carrinho
const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

// Criação do slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Adiciona um item ao carrinho
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    // Remove um item do carrinho
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    // Atualiza a quantidade de um item no carrinho
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity = action.payload.quantity;
      }

      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    // Limpa todo o carrinho
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

// Exporta as ações e o reducer
export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
