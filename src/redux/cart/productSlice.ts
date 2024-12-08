import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  id: number;
  product: {
    id: number;
    productName: string;
    image: string;
    description: string;
    price: number;
  } | null;
}

const initialState: ProductState = {
  product: null,
  id: 0
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
