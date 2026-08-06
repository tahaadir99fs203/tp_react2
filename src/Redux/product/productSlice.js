import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: []
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.products.push(action.payload);
      },
      prepare(product) {
        return {
          payload: {
            id: nanoid(),
            ...product
          }
        };
      }
    },

    updateProduct(state, action) {
      const index = state.products.findIndex(
        p => p.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },

    deleteProduct(state, action) {
      state.products = state.products.filter(
        p => p.id !== action.payload
      );
    }
  }
});

export const { addProduct, updateProduct, deleteProduct } =
  productSlice.actions;

// ✅ OBLIGATOIRE
export default productSlice.reducer;