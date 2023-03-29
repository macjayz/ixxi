import { createContext, useState } from "react";

const CartContext = createContext();
const { Provider } = CartContext;

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return <Provider value={{ cart, setCart }}>{children}</Provider>;
};

export { CartContext, CartProvider };
