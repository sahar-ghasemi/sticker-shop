import Product from "./Product";

const Products = ({currentProducts,status}) => {
  // const { data, error, isLoading, isSuccess } = useGetAllProductsQuery();
  return (
    <div className="p-2 mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6">
    {status === "success" ? (
                <>
                    {currentProducts?.map((product, index) => (
                        <Product key={index} product={product} />
                    ))}
                </>
            ) : status === "pending" ? (
                <p>در حال بارگذاری</p>
            ) : (
                <p>مشکلی پیش آمده...</p>
            )}
    </div>
  );
};
export default Products;
