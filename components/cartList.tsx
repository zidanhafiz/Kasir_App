'use client';
import { ListItem, ListItemText, IconButton, Typography, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from 'react';
import { toRupiah } from '@/lib/toRupiah';
import { useCartContext } from '@/context/CartContext';

type Props = {
  id: string;
  name: string;
  quantity: number;
  totalPrice: number;
};

export default function CartList({ id, name, quantity, totalPrice }: Props) {
  const changeQt = false;
  const price = toRupiah(totalPrice);
  const { deleteCartItem } = useCartContext();

  return (
    <ListItem
      key={id}
      sx={{ borderBottom: 1, borderColor: 'rgba(0,0,0, 0.3)' }}
      secondaryAction={
        <>
          <IconButton
            edge='end'
            aria-label='edit'
            sx={{ mr: 1 }}
            onClick={() => deleteCartItem(id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            edge='end'
            aria-label='delete'
            onClick={() => deleteCartItem(id)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      {changeQt ? (
        <form>
          <TextField
            variant='filled'
            label='qt'
            type='number'
            sx={{ width: '70px', mr: 1 }}
            size='small'
          />
        </form>
      ) : (
        <Typography sx={{ mr: 2, fontWeight: 500 }}>{`x${quantity}`}</Typography>
      )}
      <ListItemText
        primary={name}
        secondary={price}
      />
    </ListItem>
  );
}
