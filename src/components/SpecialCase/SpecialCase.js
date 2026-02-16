import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdSwitchAccount } from "react-icons/md";
import { useSelector } from "react-redux";

const SpecialCase = () => {
  const products = useSelector((state) => state.orebiReducer.products);
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-40 sm:top-52 right-2 sm:right-4 z-20 hidden md:flex flex-col gap-2"
    >
      <Link to="/signin">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white w-14 sm:w-16 h-[60px] sm:h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer"
        >
          <div className="flex justify-center items-center">
            <MdSwitchAccount className="text-xl sm:text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />

            <MdSwitchAccount className="text-xl sm:text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-xs font-semibold font-titleFont">Profile</p>
        </motion.div>
      </Link>
      <Link to="/cart">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white w-14 sm:w-16 h-[60px] sm:h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative"
        >
          <div className="flex justify-center items-center">
            <RiShoppingCart2Fill className="text-xl sm:text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />

            <RiShoppingCart2Fill className="text-xl sm:text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-xs font-semibold font-titleFont">Buy Now</p>
          {products.length > 0 && (
            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center font-semibold"
            >
              {products.length}
            </motion.p>
          )}
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default SpecialCase;
