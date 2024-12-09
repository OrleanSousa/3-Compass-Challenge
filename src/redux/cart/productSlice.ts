import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  product: {
    id: number;
    productName: string;
    image: string;
    description: string;
    price: number;
    quantity: number
  };
}

const initialState: ProductState = {
  product: {
    id: 0,
    productName: '',
    image: '',
    description: '',
    price: 0,
    quantity: 1
  }
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<typeof initialState.product>) => {
      state.product = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
