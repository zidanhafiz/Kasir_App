'use client';
import ProductCardList from '@/components/productCardList';
import { Box, TextField, Typography, Paper, List, Button } from '@mui/material';
import { useState } from 'react';
import { products } from '@/lib/products';
import { useCartContext } from '@/context/CartContext';
import Cart from '@/components/cart';

function Dashboard() {
  const [name, setName] = useState<string | number>('');

  return (
    <>
      <Box sx={{ flexGrow: 8 }}>
        <form>
          <TextField
            id='cari-produk'
            label='Cari produk'
            variant='standard'
            type='text'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        <Box
          sx={{
            mt: 4,
            display: 'flex',
            justifyContent: 'start',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <List
            dense={false}
            sx={{ overflowY: 'scroll', width: '100%', maxHeight: '70vh' }}
          >
            {products.map((p, i) => (
              <ProductCardList
                key={p.id}
                number={i + 1}
                id={p.id}
                name={p.name}
                harga={p.harga}
                hargaSatuan={p.harga}
              />
            ))}
          </List>
        </Box>
      </Box>
      <Box sx={{ maxHeight: '75vh', flexGrow: 1 }}>
        <Cart />
      </Box>
    </>
  );
}

export default Dashboard;
