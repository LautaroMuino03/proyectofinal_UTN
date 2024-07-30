
import { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCount(count + 1);
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    const index = cartItems.findIndex(item => item.id === product.id);
    if (index !== -1) {
      setCount(count - 1);
      setCartItems(cartItems.filter((_, i) => i !== index));
    }
  };

  return (
    <CartContext.Provider value={{ count, setCount, cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
