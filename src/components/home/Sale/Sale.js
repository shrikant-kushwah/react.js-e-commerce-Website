import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";

const Sale = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-10">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-2/3 lg:w-1/2 h-full"
      >
        <Link to="/shop">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <Image className="h-full w-full object-cover rounded-lg overflow-hidden" imgSrc={saleImgOne} />
          </motion.div>
        </Link>
      </motion.div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 sm:gap-6 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-1/2 w-full"
        >
          <Link to="/shop">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Image className="h-full w-full object-cover rounded-lg overflow-hidden" imgSrc={saleImgTwo} />
            </motion.div>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-1/2 w-full"
        >
          <Link to="/shop">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Image
                className="h-full w-full object-cover rounded-lg overflow-hidden"
                imgSrc={saleImgThree}
              />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Sale;
