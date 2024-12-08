import React from "react";
import { BsBagX } from "react-icons/bs"; // Ícone de fechar/remover
import { useDispatch, useSelector } from "react-redux"; // Importando useDispatch e useSelector
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../redux/cart/cartSlice"; // Importando a ação removeFromCart
import card1 from '../../assets/foto1.png'; // Imagem padrão para o produto
import { CartItem } from "../../redux/cart/cartTypes";
import { RootState } from "../../redux/store"; // Importando a tipagem do estado global

interface CartModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();
  
  // Tipagem do estado global para o uso do useSelector
  const cart = useSelector((state: RootState) => state.cart.items); // Selecionando os itens do carrinho do Redux

  if (!isOpen) return null; // Não renderiza o modal se não estiver aberto

  // Calcula o subtotal
  const subtotal = cart.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0);

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
          cart.map((item: CartItem, index: number) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-[32px]">
                {/* Imagem do produto */}
                <img
                  src={item.image || card1} // Usando a imagem do produto, se não, usa a imagem padrão
                  alt={item.productName}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex flex-col justify-center h-[56px] w-[130px]">
                  {/* Nome do produto */}
                  <p className="font-semibold text-start">{item.productName}</p>
                  {/* Quantidade e valor */}
                  <div className="flex items-center text-sm text-gray-500 justify-between">
                    <span className="text-[16px]">{item.quantity}</span>
                    <span>x</span>
                    <span className="text-textOrange font-medium">Rp {(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Ícone para remover o item */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))} // Disparando a ação removeFromCart
                className="text-gray50 hover:text-red-700"
              >
                <IoIosCloseCircle size={20} />
              </button>
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
        <Link to="/cart">
          <button onClick={closeModal} className="border border-black pt-[6px] pb-[6px] w-[87px] m-auto h-[30px] rounded-[50px] text-[12px]">
            Cart
          </button>
        </Link>
        <button className="border border-black pt-[6px] pb-[6px] w-[118px] m-auto h-[30px] rounded-[50px] text-[12px]">
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
