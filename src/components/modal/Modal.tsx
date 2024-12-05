import React from "react";
import { BsBagX } from "react-icons/bs";
import { useCart } from "../../hooks/useCart"; // Hook do carrinho

interface CartModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, closeModal }) => {
  const { cart } = useCart(); // Obtém os itens do carrinho

  if (!isOpen) return null; // Não renderiza o modal se não estiver aberto

  // Calcula o subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed top-0 right-0 m-6 bg-white shadow-lg rounded-md w-[400px] h-[746px] p-4 z-10">
      {/* Botão de fechar no canto superior direito */}
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 p-2 rounded-full focus:outline-none"
      >
        <BsBagX size={24} />
      </button>

      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

      {/* Lista de itens no carrinho */}
      <div className="mt-4 space-y-4 overflow-y-auto h-[500px]">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <div className="flex items-center gap-4">
                {/* Imagem do produto */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
              <span className="font-bold">Rp {item.price.toLocaleString()}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        )}
      </div>
      {/* Subtotal */}
      {cart.length > 0 && (
        <div className="mt-4 flex justify-between border-b pb-4">
        <span className="font-bold text-lg">Subtotal</span>
          <span className="font-bold text-lg">
            Rp {subtotal.toLocaleString()}
          </span>
        </div>
      )}


      {/* Botões de ação */}
      <div className="mt-6 flex justify-between">
        <button className="border border-black pt-[6px] pb-[6px] w-[87px] m-auto h-[30px] rounded-[50px] text-[12px] ">
          Cart
        </button>
        <button className="border border-black pt-[6px] pb-[6px] w-[118px] m-auto h-[30px] rounded-[50px] text-[12px] ">
          Checkout
        </button>
        <button className="border border-black w-[135px] h-[30px] rounded-[50px]">
          Comparison
        </button>
      </div>
    </div>
  );
};

export default CartModal;
