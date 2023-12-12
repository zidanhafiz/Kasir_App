'use client';
import { Typography, ListItem, ListItemText, Button } from '@mui/material';
import { useCartContext } from '@/context/CartContext';
import { useEffect, useState } from 'react';
import { toRupiah } from '@/lib/toRupiah';

type Props = {
  number: number;
  id: string;
  name: string;
  price: number;
  children?: React.ReactNode;
};

export default function ProductCardList({ number, id, name, price }: Props) {
  const { cartProducts, updateCartItem, addCartItem } = useCartContext();
  const hargaRp = toRupiah(price);
  const title = `${name} (${id})`;

  const addToCartHandler = async () => {
    let isExist = false;
    cartProducts.map((p, i) => {
      if (p.id === id) {
        const quantity = p.quantity + 1;
        const newProduct = {
          id,
          name,
          price,
          quantity,
          total_price: quantity * price,
        };
        updateCartItem(newProduct, i);
        return (isExist = true);
      }
    });
    if (!isExist) {
      const quantity = 1;
      const newProduct = {
        id,
        name,
        price,
        quantity,
        total_price: quantity * price,
      };
      return addCartItem(newProduct);
    }
  };
  return (
    <ListItem
      sx={{ borderBottom: 1, borderColor: 'rgba(0,0,0, 0.3)' }}
      secondaryAction={
        <>
          <Button
            variant='text'
            size='small'
            color='secondary'
            sx={{ mr: 2 }}
          >
            Detail
          </Button>
          <Button
            variant='contained'
            size='small'
            onClick={addToCartHandler}
          >
            Masukkan Keranjang
          </Button>
        </>
      }
    >
      <Typography
        mr={2}
        color='rgba(0,0,0, 0.7)'
      >
        #{number}
      </Typography>
      <ListItemText
        primary={title}
        secondary={hargaRp}
      />
    </ListItem>
  );
}
