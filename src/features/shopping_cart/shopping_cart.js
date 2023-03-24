import { createSlice } from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    value: JSON.parse(localStorage.getItem("SHOPPING_CART")) || []
  },
  reducers: {
    addItem: (state, action) => {
      const { id, name, price } = action.payload;
      const itemInCart = state.value.find(
        (item) => item.id === action.payload.id
      );
      if (!itemInCart) {
        state.value.push({ id, name, price, quantity: 1 });
        return;
      }
      itemInCart.quantity++;
    },
    removeItem: (state, action) => {
      const { id } = action.payload;

      const item = state.value.find((item) => item.id === id);
      item.quantity -= 1;

      if (item.quantity === 0) {
        state.value = state.value.filter((item) => item.id !== id);
      }
    }
  }
});

export const { addItem, removeItem } = shoppingCartSlice.actions;
export const shoppingCartReducer = shoppingCartSlice.reducer;
