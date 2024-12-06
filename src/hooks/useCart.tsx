import { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  id: number;
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
  updateQuantity: (productName: string, quantity: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Carrega o carrinho do localStorage quando o componente é montado
  const loadCartFromLocalStorage = (): CartItem[] => {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
  };

  const [cart, setCart] = useState<CartItem[]>(loadCartFromLocalStorage);

  useEffect(() => {
    // Salva o carrinho no localStorage sempre que ele mudar
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('cart'); // Remove o carrinho se estiver vazio
    }
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.productName === item.productName);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.productName === item.productName
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
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

  const updateQuantity = (productName: string, quantity: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((cartItem) =>
          cartItem.productName === productName
            ? { ...cartItem, quantity: quantity > 0 ? quantity : 0 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0); // Remove os itens com quantidade 0
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
