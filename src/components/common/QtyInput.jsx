import { FaMinus, FaPlus } from "react-icons/fa";

const QtyInput = ({incrementQty,qty,decrementQty}) => {
  return (
    <div className="flex flex-row rounded-lg relative mt-1 ">
      <button onClick={incrementQty} className="bg-gray-100 text-gray-600 hover:text-gray-700
       hover:bg-gray-200 rounded-full p-1"><FaPlus/></button>
      <input type="text" value={qty} name="quantity" className="focus:outline-none
       text-center bg-gray-200 rounded font-semibold
     text-gray-700 w-10 mx-1" />
      <button onClick={decrementQty} className="bg-gray-100 text-gray-600 hover:text-gray-700
       hover:bg-gray-200 rounded-full p-1"><FaMinus/></button>
    </div>
  );
};
export default QtyInput;
