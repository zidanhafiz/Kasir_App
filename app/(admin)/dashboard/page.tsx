'use client';
import ProductCard from '@/components/product-card';
import {
  Box,
  TextField,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

const dummyProducts = [
  { id: 1, name: 'Produk A', harga: 100 },
  { id: 2, name: 'Produk B', harga: 150 },
  { id: 3, name: 'Produk C', harga: 200 },
  { id: 4, name: 'Produk D', harga: 75 },
  { id: 5, name: 'Produk E', harga: 32 },
  { id: 6, name: 'Produk F', harga: 324 },
  { id: 7, name: 'Produk G', harga: 922 },
  { id: 8, name: 'Produk H', harga: 100 },
];

function Dashboard() {
  const [name, setName] = useState<string | number>('');
  return (
    <>
      <Box>
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
          {dummyProducts.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name}
              harga={p.harga}
            ></ProductCard>
          ))}
        </Box>
      </Box>
      <Box sx={{ width: '800px' }}>
        <Paper sx={{ width: '100%', py: 4, px: 4 }}>
          <Typography
            variant='h2'
            fontSize='24px'
            fontWeight={500}
          >
            Keranjang
          </Typography>
          <List>
            {dummyProducts.map((p) => (
              <ListItem
                key={p.id}
                secondaryAction={
                  <IconButton
                    edge='end'
                    aria-label='delete'
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={p.name}
                  secondary={p.harga}
                />
              </ListItem>
            ))}
          </List>
          <Typography>Total Harga:</Typography>
          <Box>
            <Button
              variant='contained'
              color='error'
            >
              Hapus Barang
            </Button>
            <Button variant='contained'>Simpan transaksi</Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default Dashboard;
