import React from "react";
import { motion } from "framer-motion";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  const _id = props.productName;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);

  const navigate = useNavigate();
  const productItem = props;
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="w-full relative group"
    >
      <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
        <div>
          <Image className="w-full h-full" imgSrc={props.img} />
        </div>
        <div className="absolute top-6 left-8">
          {props.badge && <Badge text="New" />}
        </div>
        <motion.div
          initial={{ y: 0 }}
          whileHover={{ y: 0 }}
          className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700"
        >
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
            <motion.li
              whileHover={{ x: -5 }}
              className="text-[#767676] hover:text-primeColor text-xs sm:text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Compare
              <span>
                <GiReturnArrow />
              </span>
            </motion.li>
            <motion.li
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: props._id,
                    name: props.productName,
                    quantity: 1,
                    image: props.img,
                    badge: props.badge,
                    price: props.price,
                    colors: props.color,
                  })
                )
              }
              className="text-[#767676] hover:text-primeColor text-xs sm:text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Add to Cart
              <span>
                <FaShoppingCart />
              </span>
            </motion.li>
            <motion.li
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleProductDetails}
              className="text-[#767676] hover:text-primeColor text-xs sm:text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              View Details
              <span className="text-base sm:text-lg">
                <MdOutlineLabelImportant />
              </span>
            </motion.li>
            <motion.li
              whileHover={{ x: -5 }}
              className="text-[#767676] hover:text-primeColor text-xs sm:text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
            >
              Add to Wish List
              <span>
                <BsSuitHeartFill />
              </span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
      <div className="max-w-80 py-4 sm:py-6 flex flex-col gap-1 border-[1px] border-t-0 px-3 sm:px-4">
        <div className="flex items-center justify-between font-titleFont gap-2">
          <h2 className="text-base sm:text-lg text-primeColor font-bold truncate flex-1">
            {props.productName}
          </h2>
          <p className="text-[#767676] text-xs sm:text-[14px] flex-shrink-0">{props.price}₹</p>
        </div>
        <div>
          <p className="text-[#767676] text-xs sm:text-[14px]">{props.color}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
