import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between  max-w-full px-6 pb-2 pt-4 md:pt-6 mx-5">
        <Link to="/" className="cuesor-pointer">
          <h1 className="flex no-underline">
            <span className="text-2xl font-bold tracking-tight pt-1">
              Sticker Shop
            </span>
          </h1>
        </Link>
        <Link to="/cart" className="relative">
        <FaCartArrowDown size="2em"/>
          <div className="absolute top-0 right-0 text-xs bg-yellow-500 text-gray-900 font-semibold rounded-full p-1 transform translate-x-5 -translate-y-2">
            10
          </div>
        </Link>
      </div>
    </header>
  );
};
export default NavBar;
