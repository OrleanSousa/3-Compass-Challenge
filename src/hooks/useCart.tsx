import { createContext, useContext, useState } from 'react';

interface CartItem {
  id:string,
  name: string;
  productName: string;
  description: string;
  price: number;
  image?: string;
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productName: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      // Verifica se o item já está no carrinho
      const existingItem = prevCart.find((cartItem) => cartItem.productName === item.productName);
  
      if (existingItem) {
        // Se o item já existir, aumenta a quantidade
        return prevCart.map((cartItem) =>
          cartItem.productName === item.productName
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        // Se o item não existir, adiciona o item ao carrinho
        return [...prevCart, item];
      }
    });
  };

  const removeFromCart = (productName: string) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.productName !== productName));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
