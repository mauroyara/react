// estado global
import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // count es contador
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  //abajo mostar los producrtos seleccionados
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
