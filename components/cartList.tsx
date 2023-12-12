'use client';
import { ListItem, ListItemText, IconButton, Typography, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from 'react';
import { toRupiah } from '@/lib/toRupiah';
import { useCartContext } from '@/context/CartContext';
import ModalEditItem from './modalEditItem';

function ChangeQt() {
  const { updateCartItem } = useCartContext();
  return (
    <>
      <IconButton
        edge='end'
        aria-label='edit'
        sx={{ mr: 1 }}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        edge='end'
        aria-label='delete'
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
}

type Props = CartProduct & {
  index: number;
};

export default function CartList({
  index,
  id,
  name,
  quantity,
  price,
  total_price,
}: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { deleteCartItem } = useCartContext();
  const priceRp = toRupiah(total_price);
  const product = {
    index,
    id,
    name,
    quantity,
    price,
    total_price,
  };

  return (
    <>
      <ModalEditItem
        open={open}
        handleClose={handleClose}
        product={product}
      />
      <ListItem
        key={id}
        sx={{ borderBottom: 1, borderColor: 'rgba(0,0,0, 0.3)' }}
        secondaryAction={
          <>
            <IconButton
              edge='end'
              aria-label='edit'
              sx={{ mr: 1 }}
              onClick={handleOpen}
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
        <Typography sx={{ mr: 2, fontWeight: 500 }}>{`x${quantity}`}</Typography>
        <ListItemText
          primary={name}
          secondary={priceRp}
        />
      </ListItem>
    </>
  );
}
