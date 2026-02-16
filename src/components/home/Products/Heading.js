import React from "react";
import { motion } from "framer-motion";

const Heading = ({ heading }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-2xl sm:text-3xl lg:text-4xl font-semibold pb-4 sm:pb-6"
    >
      {heading}
    </motion.div>
  );
};

export default Heading;
