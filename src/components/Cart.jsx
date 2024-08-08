import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import { RxCross2 } from "react-icons/rx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Cart</title>
      </Helmet>
      {cart.cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <h1 className="leading-relaxed font-extrabold text-4xl mt-2 sm:py-4 text-primary ml-4">
            Your Cart
          </h1>
          <div className="mb-6 max-w-2xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="uppercase text-sm">
                  <th className="px-6 py-3 text-left">Product</th>
                  <th className="px-6 py-3 text-center">Count</th>
                  <th className="px-6 py-3 text-center">Price</th>
                  <th className="px-6 py-3 text-center">Delete</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-light">
                {cart.cartItems.map((item) => (
                  <tr
                    key={item.id}
                    className="text-gray-600 text-center hover:bg-gray-50"
                  >
                    <td className="flex items-center font-medium px-6 py-4 text-start space-x-4">
                      <img
                        height={64}
                        width={64}
                        src={`http://localhost:9000/images/${item.sticker}`}
                        alt={item.name}
                        className="hidden sm:inline-flex rounded-lg"
                      />
                      <Link
                        to={`/products/${item.id}`}
                        className="hover:text-primary"
                      >
                        {item.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="number"
                        value="1"
                        inputMode="numeric"
                        id="variant-quantity"
                        name="variant-quantity"
                        min="1"
                        step="1"
                        className="text-gray-900 
                                border border-gray-300 rounded-sm focus:border-light
                                 focus:ring-light text-center w-10 sm:w-20"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <NumericFormat
                        value={item.price / 100}
                        prefix={"$ "}
                        displayType={"text"}
                        thousandSeparator={true}
                        className="text-base"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <button aria-label="delete-item">
                        <RxCross2 className="text-primary border border-primary rounded-sm hover:bg-lighter" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="max-w-sm mx-auto space-y-4 px-2">
            <Link
              to="/"
              className="bg-primary text-white text-lg 
            font-semibold p-2 leading-relaxed flex justify-center
            items-center focus:ring-1 focus:ring-light w-full rounded"
            >
              Confirm &nbsp;
               <FaArrowRight />
            </Link>
            <Link to="/" className="border border-primary text-primary text-lg
            font-semibold p-2 leading-relaxed flex justify-center items-center rounded
            focus:ring-light
            "><FaArrowLeft /> &nbsp;Back to Products</Link>
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
