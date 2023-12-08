'use client';
import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

type Product = {
  id: number;
  name: string;
  harga: number;
  quantity: number;
  hargaSatuan: number;
};

type CartContextProps = {
  cartProducts: Product[];
  setCartProducts: Dispatch<SetStateAction<Product[]>>;
  toRupiah: (harga: number) => string;
};

const CartContext = createContext({} as CartContextProps);

const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within CartContextProvider');
  }
  return context;
};

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartProducts, setCartProducts] = useState([] as Product[]);

  const toRupiah = (harga: number) => {
    return harga.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });
  };

  const value: CartContextProps = {
    cartProducts,
    setCartProducts,
    toRupiah,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContextProvider, useCartContext };
