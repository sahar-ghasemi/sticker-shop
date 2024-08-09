import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../slices/cartSlice";

const ProductForm = ({ product }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCard = (item) => {
    dispatch(addToCart(item));
    navigate(`/cart`);
  };
  const updateQty = () => {
    setQty(qty + 1);
  };
  const atcBtnStyle = `pt-3 pb-2 bg-palette-primary text-white w-full rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-green-400 bg-green-500
                       rounded-sm my-3`;
  return (
    <div>
      <div >
        <div >
          <label className="text-gray-500 text-base">Count:</label>
          <input
            type="number"
            inputMode="numeric"
            min="1"
            step="1"
            value={qty}
            onChange={updateQty}
            className="text-gray-900 form-input border ml-6 rounded-sm w-20 
                     focus:border-light focus:ring-light text-center"
          />
        </div>
        <p className="text-green-600">in stock</p>
      </div>
      <button
        className={atcBtnStyle}
        onClick={() => handleAddToCard({ ...product, cartQty: qty })}
      >
        Add to cart
      </button>
    </div>
  );
};
export default ProductForm;
