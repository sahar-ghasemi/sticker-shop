import { useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../slices/productApi";
import Product from "./Product";

const Products = () => {
  const status = useSelector((state) => state.Products);
  const { data, error, isLoading, isSuccess } = useGetAllProductsQuery();
  console.log(status);
  return (
    <div className="p-2 mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6">
      {isLoading && <p>Loading...</p>}
      {error && <p>There is something wrong</p>}
      {isSuccess &&
        data.map((item, index) => <Product key={index} product={item} />)}
    </div>
  );
};
export default Products;
