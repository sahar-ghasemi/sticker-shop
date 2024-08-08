import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import ProductForm from "./ProductForm";


const ProductDetails=()=>{
    const {id}=useParams();
    const product=useSelector((state)=>state.products.items.find(p=>p.id===id));
    if(!product){
        return <p>loading</p>
    }
    const priceDollars=product.price/100;

    return(
        <div className="mt-4 flex flex-col align-middle justify-center
        items-center md:flex-row md:items-start 
        space-y-20 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
       <Helmet>
           <title>{product.title}</title>
       </Helmet>

       <div className="w-full md:w-1/2 max-w-md border border-light bg-white rounded shadow-lg ml-5">
           <div className="relative h-96">
               <img src={`http://localhost:9000/images/${product.sticker}`} alt={product.title} />
           </div>
       </div>

       <div className="flex flex-col justify-between h-full w-full
                    md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
           <Link to="/" className="border border-primary text-primary text-lg font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
             justify-center items-center focus:ring-1 focus:ring-light focus:outline-none 
             w-full hover:bg-lighter rounded-sm">Back to Products</Link>
           
           <div>
               <h1 className="leading-relaxed font-extrabold text-3xl text-primary py-2 sm:py-4">{product.title}</h1>
               <p>{product.description}</p>
               <div className="text-xl py-4 px-1">
                   <NumericFormat
                       value={priceDollars}
                       prefix={"$ "}
                       displayType={"text"}
                       thousandSeparator={true}
                       className="text-dark font-semibold bg-lighter rounded-md px-4 py-1"
                   />
               </div>
           </div>
           
           <ProductForm product={product} />
       </div>
   </div>
    )
}

export default ProductDetails;