import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQty: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQty: state.cartItems[existingIndex].cartQty + 1,
        };
        toast.info("count added", { position: "top-center" });
      } else {
        let tempProductItem = {
          ...action.payload,
          cartQty: action.payload.cartQty,
        };
        state.cartItems.push(tempProductItem);
        toast.success("Item added to cart", { position: "top-center" });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotal(state,action){
        let {total,qty}=state.cartItems.reduce((cartTotal,cartItem)=>{
            const {price,cartQty}=cartItem;
            const itemTotal=price*cartQty;

            cartTotal.total+=itemTotal;
            cartTotal.qty+=cartQty;

            return cartTotal;
        },{total:0,qty:0});
        total=parseFloat(total).toFixed(2);
        state.cartTotalQty=qty;
        state.cartTotalAmount=total;
    }
  },
});

export const { addToCart, getTotal } = cartSlice.actions;
export default cartSlice.reducer;