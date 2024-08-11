import { createSlice ,createEntityAdapter} from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartAdapter=createEntityAdapter();
const initialState=cartAdapter.getInitialState({
  //ids[],emtities:{}
  cartTotalAmount:0,
  cartTotalQty:0
})

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    populateCart(state,action){
      if(localStorage.getItem("cartItems")!= null){
        cartAdapter.setAll(state,JSON.parse(localStorage.getItem("cartItems")));
      }
    },
    addToCart(state, action) {
      const product=state.entities[action.payload.id];
      if (product) {
        product.cartQty+=1;
        toast.info("count added", { position: "top-center" });
      } else {
     cartAdapter.addOne(state, action.payload);
        toast.success("Item added to cart", { position: "top-center" });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.entities));
    },
    getTotals(state, action) {
      let { total, qty } = Object.values(state.entities).reduce(
        (cartTotal, cartItem) => {
          const { price, cartQty } = cartItem;
          const itemTotal = price * cartQty;

          cartTotal.total += itemTotal;
          cartTotal.qty += cartQty;

          return cartTotal;
        },
        { total: 0, qty: 0 }
      );
      total = parseFloat(total.toFixed(1));
      state.cartTotalQty = qty;
      state.cartTotalAmount = total;
    },
    decreaseCart(state, action) {
      const product =state.entities[action.payload.id];
      if (product.cartQty > 1) {
        product.cartQty -= 1;
        toast.error("count decreased", { position: "top-center" });
      } else if( product.cartQty === 1) {
       cartAdapter.removeOne(state,action.payload.id);
        toast.error("Item removed from cart", { position: "top-center" });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.entities));
    },
    removeFromCart(state, action) {
     cartAdapter.removeOne(state, action.payload.id);
    
      toast.error("Item removed from cart", { position: "top-center" });
    
      localStorage.setItem("cartItems", JSON.stringify(state.entities));
    },
  },
});
export const {selectAll}=cartAdapter.getSelectors(state=>state.cart)
export const {populateCart, addToCart, decreaseCart, removeFromCart, getTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
