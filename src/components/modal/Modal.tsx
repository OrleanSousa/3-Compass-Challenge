import React from "react";
import { BsBagX } from "react-icons/bs"; // Close/remove icon
import { useDispatch, useSelector } from "react-redux"; // Importing useDispatch and useSelector
import { IoIosCloseCircle } from "react-icons/io"; // Icon to remove item from cart
import { Link } from "react-router-dom"; // For navigation to other pages
import { removeFromCart } from "../../redux/cart/cartSlice"; // Importing the removeFromCart action
import card1 from '../../assets/foto1.png'; // Default product image
import { CartItem } from "../../redux/cart/cartTypes"; // CartItem type
import { RootState } from "../../redux/store"; // Importing the global state type

interface CartModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();
  
  // Selecting cart items from Redux state
  const cart = useSelector((state: RootState) => state.cart.items);

  if (!isOpen) return null; // Don't render the modal if it's not open

  // Calculating subtotal
  const subtotal = cart.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed top-0 right-0 m-6 bg-white shadow-lg rounded-md w-[400px] h-[746px] p-4 z-10">
      {/* Close button at the top right */}
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 p-2 rounded-full focus:outline-none"
      >
        <BsBagX size={24} />
      </button>

      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

      {/* List of items in the cart */}
      <div className="mt-4 space-y-4 overflow-y-auto h-[500px]">
        {cart.length > 0 ? (
          cart.map((item: CartItem, index: number) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-[32px]">
                {/* Product image */}
                <img
                  src={item.image || card1} // Use the product image, if not, use the default image
                  alt={item.productName}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex flex-col justify-center h-[56px] w-[130px]">
                  {/* Product name */}
                  <p className="font-semibold text-start">{item.productName}</p>
                  {/* Quantity and price */}
                  <div className="flex items-center text-sm text-gray-500 justify-between">
                    <span className="text-[16px]">{item.quantity}</span>
                    <span>x</span>
                    <span className="text-textOrange font-medium">Rp {(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Icon to remove the item */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))} // Dispatching removeFromCart action
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

      {/* Action buttons */}
      <div className="mt-6 flex justify-between">
        <Link to="/cart">
          <button onClick={closeModal} className="border border-black pt-[6px] pb-[6px] w-[87px] m-auto h-[30px] rounded-[50px] text-[12px]">
            Cart
          </button>
        </Link>
        <Link to='/checkout'>
          <button className="border border-black pt-[6px] pb-[6px] w-[118px] m-auto h-[30px] rounded-[50px] text-[12px]">
            Checkout
          </button>
        </Link>
        <button className="border border-black w-[135px] h-[30px] rounded-[50px] text-[12px]">
          Comparison
        </button>
      </div>
    </div>
  );
};

export default CartModal;
