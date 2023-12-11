'use client';
import { Box, Button, List, Paper, Typography } from '@mui/material';
import CartList from './cartList';
import { useCartContext } from '@/context/CartContext';
import { useState, useEffect } from 'react';
import { toRupiah } from '@/lib/toRupiah';

function Cart() {
  const { cartProducts, clearCart } = useCartContext();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const temp = cartProducts.reduce((prev, product) => prev + product.total_price, 0);
    setTotal(temp);
  }, [cartProducts]);

  return (
    <Paper
      sx={{
        width: '100%',
        py: 4,
        px: 4,
        height: 'auto',
        maxHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant='h2'
        fontSize='20px'
        fontWeight={500}
        textAlign='center'
        mb={2}
      >
        Keranjang
      </Typography>
      <List
        dense={true}
        sx={{ overflowY: 'scroll' }}
      >
        {cartProducts.length === 0 ? (
          <Typography sx={{ textAlign: 'center', my: 2, fontStyle: 'italic' }}>
            Keranjang Kosong
          </Typography>
        ) : (
          cartProducts?.map((p) => (
            <CartList
              key={p.id}
              id={p.id}
              name={p.name}
              quantity={p.quantity}
              totalPrice={p.total_price}
            />
          ))
        )}
      </List>
      <Box sx={{ my: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ fontSize: '18px' }}>Total Harga:</Typography>
        <Typography sx={{ fontSize: '22px', fontWeight: '600' }}>
          {toRupiah(total)}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Button
          variant='contained'
          color='error'
          onClick={clearCart}
          disabled={cartProducts.length === 0}
        >
          Hapus Barang
        </Button>
        <Button
          variant='contained'
          disabled={cartProducts.length === 0}
        >
          Simpan transaksi
        </Button>
      </Box>
    </Paper>
  );
}

export default Cart;
