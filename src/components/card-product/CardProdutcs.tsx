import card1 from '../../assets/foto1.png';

import React from 'react';

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
    <div className="relative bg-white overflow-hidden w-[285px] h-[446px] group">
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

      {/* Informações no hover */}
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
        <button className="bg-white text-black px-6 py-2 text-sm font-semibold rounded-full mb-4">
          Add to cart
        </button>
        <div className="flex gap-4 text-white text-sm">
          <span className="cursor-pointer">Share</span>
          <span className="cursor-pointer">Compare</span>
          <span className="cursor-pointer">Like</span>
        </div>
      </div>

      <div className="p-4 text-start bg-gray-100">
        <h3 className="text-lg font-semibold">{productName}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <div className="mt-2">
          <span className="text-black text-[20px] font-bold">
            Rp {price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-gray-500 line-through ml-2">
              Rp {originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
