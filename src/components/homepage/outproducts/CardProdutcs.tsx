import React from "react";

interface ProductCardProps {
  productName: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  isNew?: boolean;
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
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden ">
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
          src="https://via.placeholder.com/300x200"
          alt={productName}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{productName}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <div className="mt-2">
          {originalPrice && (
            <span className="text-gray-400 line-through mr-2">
              Rp {originalPrice.toLocaleString()}
            </span>
          )}
          <span className="text-gray-800 font-bold">
            Rp {price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
