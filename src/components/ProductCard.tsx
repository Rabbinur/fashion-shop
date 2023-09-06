"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type ProductCardProps = {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
};

const ProductCard = (props: ProductCardProps) => {
  const { img, title, desc, rating, price } = props;
  const [isHovered, setIsHovered] = useState(false);
  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className="flex gap-1 text-[20px] text-[#FF9529]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );

      default:
        return null;
    }
  };
  return (
    <div>
      {" "}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="px-4  border group border-gray-200 overflow-hidden rounded-xl max-w-[400px] cursor-pointer"
      >
        <div className="image">
          <Image
            className="w-full scale-110 h-auto mainImg group-hover:scale-75 group-hover:duration-300 duration-300"
            src={img}
            width={200}
            height={300}
            alt={title}
          />
        </div>

        <div className="space-y-2 py-2">
          <h2 className="text-accent font-medium uppercase">{title}</h2>
          <p className="text-gray-500 max-w-[150px]">{desc}</p>
          <div>{generateRating(rating)}</div>

          <div className="font-bold flex gap-4  justify-between items-center">
            <p className="group-hover:text-accent">
              {" "}
              ${price}
              <del className="text-gray-500 font-normal">
                ${parseInt(price) + 50}.00
              </del>
            </p>
            {isHovered ? (
              <button className="px-3 py-2 bg-accent text-white rounded  transition duration-300">
                Order Now
              </button>
            ) : (
              <button className="px-3 py-2 bg-accent text-white rounded  transition duration-300">
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
