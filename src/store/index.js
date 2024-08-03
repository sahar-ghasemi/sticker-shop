import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import productsReducer, { fetchProducts } from "../slices/productSlice";
import cartReducer, { getTotals } from "../slices/cartSlice";
import { productApi } from "../slices/productApi";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
});

store.dispatch(fetchProducts());
store.dispatch(getTotals());
