import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../slices/cartSlice";

const ProductForm = ({ product }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCard = (item) => {
    dispatch(addToCart(item));
    navigate(`/cart`);
  };
 
  const atcBtnStyle = `pt-3 pb-2 bg-palette-primary text-white w-full rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-green-400 bg-green-500
                       rounded-sm my-3`;
  return (
    <div>
      <div >
        <p className="text-green-600 ml-2">in stock</p>
      </div>
      <button
        className={atcBtnStyle}
        onClick={() => handleAddToCard({ ...product, cartQty: 1 })}
      >
        Add to cart
      </button>
    </div>
  );
};
export default ProductForm;
