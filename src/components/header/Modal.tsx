import React from 'react';
import { BsBagX } from "react-icons/bs";

interface CartModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null; // Não renderiza o modal se não estiver aberto

  return (
    <div className="fixed top-0 right-0 m-6 bg-white shadow-lg rounded-md w-[400px] h-[746px] p-4">
      {/* Botão de fechar no canto superior direito */}
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 p-2 rounded-full focus:outline-none"
      >
        <BsBagX size={24} />
      </button>

      <h2 className="text-xl font-bold">Shopping Cart</h2>

      {/* Lista de itens no carrinho */}
      <div className="mt-4">
        <div className="flex justify-between">
          <span>Asgaard sofa</span>
          <span>Rs. 250,000.00</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Casaliving Wood</span>
          <span>Rs. 270,000.00</span>
        </div>
      </div>

      {/* Subtotal */}
      <div className="mt-4 flex justify-between">
        <span className="font-bold">Subtotal</span>
        <span className="font-bold">Rs. 520,000.00</span>
      </div>

      {/* Botões de ação */}
      <div className="mt-6 flex flex-row justify-between w-[368px] self-end border-t-gray50">
        <button className="border border-black flex justify-center items-center  w-[87px] h-[30px] rounded-[50px]">Cart</button>
        <button className="border border-black flex justify-center items-center  w-[118px] h-[30px] rounded-[50px]">Checkout</button>
        <button className="border border-black flex justify-center items-center  w-[135px] h-[30px] rounded-[50px]">Comparison</button>
      </div>
      
    </div>
  );
};

export default CartModal;
