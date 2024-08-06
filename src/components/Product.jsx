import { Link } from "react-router-dom";

const Product=({product})=>{
    const{id, title, description, sticker, price}=product;
    return(
<Link to={`products/${id}`}>
<div className=" rounded shadow-lg mx-auto border border-light ">
    <div className=" border-b-2 border-primary relative">
        <img  src={`http://localhost:9000/images/${sticker}`} alt={title} />
    </div>
    <div className="p-2 relative">
        <div className="text-primary text-lg pt-2 px-2 font-semibold">{title}</div>
        <div className="text-base text-gray-600 p-1 ">{description}</div>
        <div className="flex justify-end items-center">
  <span className="text-dark font-semibold  bg-lighter rounded-md px-4 py-1">
    ${price}
  </span>
</div>    </div>
</div>
</Link>
    )
}
export default Product;