import { useState } from "react";
import Products from "../Products";
import ReactPaginate from "react-paginate"
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

const PaginateItems=({productPerPage,products,isLoading,isSuccess})=>{
    const [itemOffset,setItemOffset]=useState(0);
    const endOffset=itemOffset+productPerPage;
  
    if (!products) {
      return <p>there is no products</p>;
    }
    const currentProducts=products.slice(itemOffset,endOffset);
    const pageCount=Math.ceil(products.length/productPerPage);
  
    const handlePageClick=(e)=>{
      const newOffset=e.selected*productPerPage;
  document.documentElement.scrollTo({top:0, behavior:'smooth'});
      setItemOffset(newOffset);
    }
    return(
      <>
      <Products currentProducts={currentProducts} isLoading={isLoading} isSuccess={isSuccess} />
      <ReactPaginate
      containerClassName="flex justify-center items-center mt-8 mb-4"
      pageClassName="block border border-solid border-gray-100  w-10 h-10 flex items-center justify-center rounded-md mr-2 hover:bg-light hover:cursor-pointer"
      activeClassName="bg-primary text-light hover:bg-primary hover:text-light"
      breakLabel="..."
      onPageChange={handlePageClick}
      pageRangeDisplayed={4}
      pageCount={pageCount}
      previousLabel={<MdOutlineNavigateBefore size={27} className="bg-light text-gray-900 rounded-full mr-2"/>}
      nextLabel={<MdOutlineNavigateNext size={27} className="bg-light text-gray-900 rounded-full"/>}
      renderOnZeroPageCount={null}
      />
      </>
    )
  }
  export default PaginateItems;