import React from "react";
import { motion } from "framer-motion";
import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";

const BannerBottom = () => {
  return (
    <div className="w-full bg-white border-b-[1px] py-4 sm:py-6 border-b-gray-200 px-4">
      <div className="max-w-container mx-auto min-h-20 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto sm:min-w-[200px] lg:w-72 shadow-sm hover:shadow-md duration-300 p-3 sm:p-0 rounded-lg sm:rounded-none"
        >
          <span className="font-bold font-titleFont w-6 sm:w-8 text-center text-lg sm:text-xl">2</span>
          <p className="text-lightText text-sm sm:text-base">Two years warranty</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto sm:min-w-[200px] lg:w-72 shadow-sm hover:shadow-md duration-300 p-3 sm:p-0 rounded-lg sm:rounded-none"
        >
          <span className="text-lg sm:text-xl text-center w-6 sm:w-8 ml-1">
            <MdLocalShipping />
          </span>
          <p className="text-lightText text-sm sm:text-base">Free shipping</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto sm:min-w-[200px] lg:w-72 shadow-sm hover:shadow-md duration-300 p-3 sm:p-0 rounded-lg sm:rounded-none"
        >
          <span className="text-xl sm:text-2xl text-center w-6 sm:w-8">
            <CgRedo />
          </span>
          <p className="text-lightText text-sm sm:text-base">Return policy in 30 days</p>
        </motion.div>
      </div>
    </div>
  );
};

export default BannerBottom;
