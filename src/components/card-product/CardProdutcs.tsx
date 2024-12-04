import card1 from '../../assets/foto1.png'

import React from "react";

interface ProductCardProps {
  productName: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  isNew?: boolean;
  image?: string; 
}

const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  description,
  price,
  originalPrice,
  discount,
  isNew,
}) => {
  return (
    <div className="relative bg-white overflow-hidden w-[285px] h-[446px]">
      <div className="relative">
        {discount && (
          <span className="absolute top-[24px] right-[24px] bg-red-500 text-white text-sm px-2 py-1 rounded-full w-[48px] h-[48px] flex justify-center items-center">
            -{discount}%
          </span>
        )}
        {isNew && (
          <span className="absolute top-[24px] right-[24px] w-[48px] h-[48px] bg-green-500 flex justify-center items-center text-white text-sm px-2 py-1 rounded-full">
            New
          </span>
        )}
        <img
          src={card1}
          alt={productName}
          className="w-[285px] h-[301px] object-cover"
        />
      </div>
      <div className="p-4 text-start bg-backcard">
        <h3 className="text-lg font-semibold">{productName}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <div className="mt-2">
          <span className="text-textcard text-[20px] font-bold">
            Rp {price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-textcard  line-through ml-2">
              Rp {originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
