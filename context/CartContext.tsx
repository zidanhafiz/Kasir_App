'use client';
import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

type CartContextProps = {
  cartProducts: CartProduct[];
  setCartProducts: Dispatch<SetStateAction<CartProduct[]>>;
  addCartItem: (product: CartProduct) => void;
  updateCartItem: (product: CartProduct, index: number) => void;
  deleteCartItem: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext({} as CartContextProps);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartProducts, setCartProducts] = useState([] as CartProduct[]);

  const addCartItem = (product: CartProduct) => {
    setCartProducts([...cartProducts, product]);
  };

  const updateCartItem = (product: CartProduct, index: number) => {
    const temp = [...cartProducts];
    temp[index] = { ...product };
    setCartProducts(temp);
  };

  const deleteCartItem = (id: string) => {
    const temp = cartProducts.filter((p) => p.id !== id);
    setCartProducts(temp);
  };

  const clearCart = () => {
    setCartProducts([]);
  };

  const value: CartContextProps = {
    cartProducts,
    setCartProducts,
    addCartItem,
    updateCartItem,
    deleteCartItem,
    clearCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within CartContextProvider');
  }
  return context;
};

export { CartContextProvider, useCartContext };
