import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";

const Product = ({ product }) => {
  const { id, title, description, sticker, price } = product;
  const priceDollars=price/100;
  return (
    <Link to={`products/${id}`}>
      <div className=" rounded shadow-lg mx-auto border border-light ">
        <div className=" border-b-2 border-primary relative">
          <img src={`http://localhost:9000/images/${sticker}`} alt={title} />
        </div>
        <div className="p-2 relative">
          <div className="text-primary text-lg pt-2 px-2 font-semibold">
            {title}
          </div>
          <div className="text-base text-gray-600 p-1 ">{description}</div>
          <div className="flex justify-end items-center">
            <NumericFormat
              value={priceDollars}
              prefix={"$ "}
              displayType={"text"}
              thousandSeparator={true}
              className="text-dark font-semibold  bg-lighter rounded-md px-4 py-1"
              
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Product;
