import { configureStore } from "@reduxjs/toolkit";
import { shoppingCartReducer } from "../features/shopping_cart/shopping_cart";

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer
  }
});
