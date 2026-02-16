import React from "react";

const Image = ({ imgSrc, className }) => {
  return (
    <img
      className={`${className || ""} max-w-full h-auto`}
      src={imgSrc}
      alt={imgSrc}
      loading="lazy"
    />
  );
};

export default Image;
