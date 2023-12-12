'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from 'react';
import { useCartContext } from '@/context/CartContext';

type Props = {
  open: boolean;
  handleClose: () => void;
  product: CartProduct & { index: number };
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalEditItem({ open, handleClose, product }: Props) {
  const { index, id, name, price, quantity } = product;
  const [qt, setQt] = useState<number>(quantity);
  const { updateCartItem, deleteCartItem } = useCartContext();

  useEffect(() => {
    setQt(quantity);
  }, [product]);

  const changeQt = (e: React.FormEvent) => {
    e.preventDefault();
    if (qt < 1) {
      deleteCartItem(id);
      return handleClose();
    }
    const newP = {
      id,
      name,
      price,
      quantity: qt,
      total_price: qt * price,
    };
    updateCartItem(newP, index);
    return handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
          >
            {name}
          </Typography>
          <Typography
            id='modal-modal-description'
            sx={{ my: 2 }}
          >
            Masukkan jumlah yang diinginkan
          </Typography>
          <form onSubmit={changeQt}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton
                edge='end'
                aria-label='minus'
                onClick={() => qt > 0 && setQt(qt - 1)}
              >
                <RemoveIcon />
              </IconButton>
              <TextField
                label='qt'
                type='number'
                required
                size='small'
                sx={{ width: '80px' }}
                value={qt}
                onChange={(e) => setQt(parseInt(e.target.value))}
              />
              <IconButton
                edge='end'
                aria-label='plus'
                onClick={() => qt >= 0 && setQt(qt + 1)}
              >
                <AddIcon />
              </IconButton>
            </Box>
            <Box sx={{ mt: 5, display: 'flex', justifyContent: 'start', gap: 1 }}>
              <Button
                variant='outlined'
                color='error'
                onClick={handleClose}
              >
                Batalkan
              </Button>
              <Button
                variant='contained'
                type='submit'
              >
                Simpan
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
