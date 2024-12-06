import React from 'react';
import card1 from '../../assets/foto1.png';
import { IoMdShare } from "react-icons/io";
import { TbArrowsLeftRight } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux'; // Importando useDispatch do Redux
import { addToCart } from '../../redux/cart/cartSlice'; 
// Importando a ação addToCart

interface ProductCardProps {
  id: number;              // Alterando o tipo para número
  productName: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  isNew?: boolean;
  image?: string;          // A imagem continua sendo opcional
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  productName,
  description,
  price,
  originalPrice = 0,
  discount,
  isNew,
  image = card1, // Usamos uma imagem padrão caso nenhuma seja fornecida
}) => {
  const dispatch = useDispatch(); // Usando o dispatch do Redux



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
          src={image} // Corrigido para usar a prop 'image'
          alt={productName}
          className="w-[285px] h-[301px] object-cover"
        />
      </div>

      {/* hover */}
      <div
        className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300"
      >
        <button
          onClick={() => {
            console.log("Adding to cart:", id); // Verifique o id aqui
            dispatch(addToCart({
              id,
              productName,
              description,
              price,
              image,
              quantity: 1,
            }));
          
          }}
          className="bg-white text-buttonBord px-6 py-2 text-[16px] font-semibold mb-4 w-[202px] h-[48px]"
        >
          Add to cart
        </button>
        <div className="flex font-semibold text-white text-[16px] justify-between w-[252px] h-[24px]">
          <span className="cursor-pointer flex items-center gap-[2px]">
            <IoMdShare size={16} />
            Share
          </span>
          <span className="cursor-pointer flex items-center gap-[3px]">
            <TbArrowsLeftRight size={16} />
            Compare
          </span>
          <span className="cursor-pointer flex items-center gap-[3px]">
            <FaRegHeart size={16} />
            Like
          </span>
        </div>
      </div>

      <div className="p-4 text-start bg-gray-100">
        <h3 className="text-[24px] font-semibold text-textcard">{productName}</h3>
        <p className="text-[16px] text-textCardB mt-1">{description}</p>
        <div className="mt-2">
          <span className="text-black text-[20px] font-bold">
            Rp {(price ?? 0).toLocaleString()}
          </span>
          {originalPrice > 0 && (
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
