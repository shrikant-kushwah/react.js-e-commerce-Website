import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsGridFill } from "react-icons/bs";
import { ImList } from "react-icons/im";
import { GoTriangleDown } from "react-icons/go";

const ProductBanner = ({ itemsPerPageFromBanner }) => {
  //   const [selected, setSelected] = useState("");
  const [girdViewActive, setGridViewActive] = useState(true);
  const [listViewActive, setListViewActive] = useState(false);
  useEffect(() => {
    const gridView = document.querySelector(".gridView");
    const listView = document.querySelector(".listView");

    if (gridView && listView) {
      gridView.addEventListener("click", () => {
        setListViewActive(false);
        setGridViewActive(true);
      });
      listView.addEventListener("click", () => {
        setGridViewActive(false);
        setListViewActive(true);
      });
    }

    return () => {
      if (gridView && listView) {
        gridView.removeEventListener("click", () => {});
        listView.removeEventListener("click", () => {});
      }
    };
  }, [girdViewActive, listViewActive]);

  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4">
      {/* =========================================================
                            Left Part Start here
        ======================================================== */}

      <div className="flex items-center gap-3 sm:gap-4">
        <motion.span
          whileTap={{ scale: 0.9 }}
          className={`${
            girdViewActive
              ? "bg-primeColor text-white"
              : "border-[1px] border-gray-300 text-[#737373]"
          } w-8 h-8 sm:w-9 sm:h-9 text-base sm:text-lg flex items-center justify-center cursor-pointer gridView rounded transition-colors`}
        >
          <BsGridFill />
        </motion.span>
        <motion.span
          whileTap={{ scale: 0.9 }}
          className={`${
            listViewActive
              ? "bg-primeColor text-white"
              : "border-[1px] border-gray-300 text-[#737373]"
          } w-8 h-8 sm:w-9 sm:h-9 text-sm sm:text-base flex items-center justify-center cursor-pointer listView rounded transition-colors`}
        >
          <ImList />
        </motion.span>
      </div>
      {/* =========================================================
                            Left Part End here
        ======================================================== */}
      {/* =========================================================
                            Right Part STart here
        ======================================================== */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 md:gap-6">
        <div className="flex items-center gap-2 text-sm sm:text-base text-[#767676] relative">
          <label className="block whitespace-nowrap">Sort by:</label>
          <select
            // onChange={(e) => setSelected(e.target.value)}
            id="countries"
            className="w-full sm:w-32 md:w-52 border-[1px] border-gray-200 py-2 sm:py-1 px-3 sm:px-4 cursor-pointer text-primeColor text-sm sm:text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor rounded"
          >
            <option value="Best Sellers">Best Sellers</option>
            <option value="New Arrival">New Arrival</option>
            <option value="Featured">Featured</option>
            <option value="Final Offer">Final Offer</option>
          </select>
          <span className="absolute text-xs sm:text-sm right-2 md:right-4 top-3 sm:top-2.5 pointer-events-none">
            <GoTriangleDown />
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm sm:text-base text-[#767676] relative">
          <label className="block whitespace-nowrap">Show:</label>
          <select
            onChange={(e) => itemsPerPageFromBanner(+e.target.value)}
            id="countries"
            className="w-full sm:w-16 md:w-20 border-[1px] border-gray-200 py-2 sm:py-1 px-3 sm:px-4 cursor-pointer text-primeColor text-sm sm:text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor rounded"
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
          </select>
          <span className="absolute text-xs sm:text-sm right-2 sm:right-3 top-3 sm:top-2.5 pointer-events-none">
            <GoTriangleDown />
          </span>
        </div>
      </div>
      {/* =========================================================
                            Right Part End here
        ======================================================== */}
    </div>
  );
};

export default ProductBanner;
