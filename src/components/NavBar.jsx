import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAll } from "../slices/cartSlice";

const NavBar = () => {
  const cart=useSelector(selectAll);
  return (
    <header className="border-b border-light sticky top-0 z-20 bg-white ">
      <div className="flex items-center justify-between max-w-full px-6 pb-2 pt-4 md:pt-6 mx-5">
        <Link to="/" className="cuesor-pointer">
          <h1 className="flex no-underline">
            <span className="text-2xl font-bold tracking-tight pt-1">
               <span className="text-primary mr-1">Sticker</span>Shop
            </span>
          </h1>
        </Link>
        <Link to="/cart" className="relative ">
        <FaCartArrowDown size="2em" className="text-primary mr-2"/>
        {cart.length===0?null:(   <div className="absolute top-0 right-0 text-xs bg-yellow text-gray-900 font-semibold rounded-full px-2 py-1 transform translate-x-4 -translate-y-2">
           { cart.length}
          </div>)}
       
        </Link>
      </div>
    </header>
  );
};
export default NavBar;
