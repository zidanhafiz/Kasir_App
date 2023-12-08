'use client';
import { ListItem, ListItemText, IconButton, Typography, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCartContext } from '@/context/CartContext';
import { useState, useEffect } from 'react';

type Props = {
  id: number;
  name: string;
  quantity: number;
  harga: number;
};

export default function CartList({ id, name, quantity, harga }: Props) {
  const [changeQt, setChangeQt] = useState<boolean>(false);
  const [qt, setQt] = useState<number>(0);
  const { toRupiah, cartProducts, setCartProducts } = useCartContext();
  const hargaRp = toRupiah(harga);

  useEffect(() => {
    setQt(quantity);
  }, [cartProducts]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const products = [...cartProducts];
    products.map((p) => {
      if (p.id === id) {
        p.quantity = qt;
        p.harga = p.hargaSatuan * p.quantity;
      }
    });
    setCartProducts(products);
    setChangeQt(false);
  };

  const onChangeQt = (e: number) => {
    if (e > 0) {
      setQt(e);
    }
  };

  const deleteItem = () => {
    const products = cartProducts.filter((p) => p.id !== id);
    setCartProducts(products);
  };

  return (
    <ListItem
      key={id}
      sx={{ borderBottom: 1, borderColor: 'rgba(0,0,0, 0.3)' }}
      secondaryAction={
        <IconButton
          edge='end'
          aria-label='delete'
          onClick={deleteItem}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      {changeQt ? (
        <form onSubmit={submit}>
          <TextField
            variant='filled'
            label='qt'
            type='number'
            sx={{ width: '70px', mr: 1 }}
            size='small'
            value={qt}
            onChange={(e) => onChangeQt(Number(e.target.value))}
          />
        </form>
      ) : (
        <Typography
          sx={{ mr: 2, fontWeight: 500 }}
          onClick={() => setChangeQt(true)}
        >{`x${quantity}`}</Typography>
      )}
      <ListItemText
        primary={name}
        secondary={hargaRp}
      />
    </ListItem>
  );
}
