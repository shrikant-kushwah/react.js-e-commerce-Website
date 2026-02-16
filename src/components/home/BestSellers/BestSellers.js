import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-12 sm:pb-16 lg:pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Flower Base"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="Consider the item packaging traditionally seen in brick-and-mortar stores."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="New Backpack"
          price="180.00"
          color="Gray"
          badge={false}
          des="Consider the item packaging traditionally seen in brick-and-mortar stores."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Household materials"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Consider the item packaging traditionally seen in brick-and-mortar stores."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Travel Bag"
          price="220.00"
          color="Black"
          badge={false}
          des="Consider the item packaging traditionally seen in brick-and-mortar stores."
        />
      </div>
    </div>
  );
};

export default BestSellers;
