import React from "react";
import { motion } from "framer-motion";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../../redux/orebiSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full grid grid-cols-1 mdl:grid-cols-5 mb-4 border py-2 sm:py-3 rounded-lg overflow-hidden"
    >
      <div className="flex col-span-1 mdl:col-span-2 items-center gap-2 sm:gap-4 px-2 sm:px-4 pb-2 mdl:pb-0 border-b mdl:border-b-0 border-gray-200">
        <ImCross
          onClick={() => dispatch(deleteItem(item._id))}
          className="text-primeColor hover:text-red-500 duration-300 cursor-pointer flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5"
        />
        <img className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded flex-shrink-0" src={item.image} alt="productImage" />
        <h1 className="font-titleFont font-semibold text-sm sm:text-base truncate flex-1">{item.name}</h1>
      </div>
      <div className="col-span-1 mdl:col-span-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between py-2 sm:py-4 mdl:py-0 px-2 sm:px-4 mdl:px-0 gap-3 sm:gap-6 mdl:gap-0">
        <div className="flex justify-between sm:justify-start items-center w-full sm:w-1/3 text-base sm:text-lg font-semibold">
          <span className="text-gray-500 mdl:hidden">Price:</span>
          <span>{item.price}₹</span>
        </div>
        <div className="flex justify-between sm:justify-start items-center w-full sm:w-1/3 gap-4 sm:gap-6 text-base sm:text-lg">
          <span className="text-gray-500 mdl:hidden">Quantity:</span>
          <div className="flex items-center gap-3 sm:gap-6">
            <motion.span
              whileTap={{ scale: 0.9 }}
              onClick={() => dispatch(drecreaseQuantity({ _id: item._id }))}
              className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 text-lg sm:text-xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 rounded"
            >
              -
            </motion.span>
            <p className="font-semibold min-w-[20px] text-center">{item.quantity}</p>
            <motion.span
              whileTap={{ scale: 0.9 }}
              onClick={() => dispatch(increaseQuantity({ _id: item._id }))}
              className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 text-lg sm:text-xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 rounded"
            >
              +
            </motion.span>
          </div>
        </div>
        <div className="flex justify-between sm:justify-start items-center w-full sm:w-1/3 font-titleFont font-bold text-base sm:text-lg">
          <span className="text-gray-500 mdl:hidden">Subtotal:</span>
          <p>{item.quantity * item.price}₹</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ItemCard;
