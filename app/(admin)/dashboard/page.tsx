import ProductCardList from '@/components/productCardList';
import { Box, TextField, Typography, Paper, List, Button } from '@mui/material';
import Cart from '@/components/cart';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/products', {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error('Failed get data');
  }
  return res.json();
};

async function Dashboard() {
  const products: Product[] = await getData();

  return (
    <Box sx={{ display: 'flex', columnGap: 4, mt: 2 }}>
      <Box sx={{ flexGrow: 8 }}>
        <form>
          <TextField
            id='cari-produk'
            label='Cari produk'
            variant='standard'
            type='text'
            required
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
            {products?.map((p, i) => (
              <ProductCardList
                key={p.id}
                number={i + 1}
                id={p.id}
                name={p.name}
                price={p.price}
              />
            ))}
          </List>
        </Box>
      </Box>
      <Box sx={{ maxHeight: '70vh', flexGrow: 1 }}>
        <Cart />
      </Box>
    </Box>
  );
}

export default Dashboard;
