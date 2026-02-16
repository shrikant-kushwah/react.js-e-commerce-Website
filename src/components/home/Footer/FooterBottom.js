import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20 px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-titleFont font-normal text-center flex flex-col sm:flex-row items-center justify-center text-lightText duration-200 text-xs sm:text-sm gap-1"
        >
          <span className="text-sm sm:text-md mr-1 text-center inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2025 | Orebi shopping | All Rights Reserved 
        </motion.p>
      </div>
    </div>
  );
};

export default FooterBottom;
