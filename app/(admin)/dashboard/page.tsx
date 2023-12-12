'use client';
import ProductCardList from '@/components/productCardList';
import { Box, TextField, Typography, Paper, List, Button } from '@mui/material';
import Cart from '@/components/cart';
import SearchProduct from '@/components/searchProduct';
import { useEffect, useState } from 'react';
import LoadingBar from '@/components/loadingBar';

function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState({ name: '', category: 'Semua' } as Filter);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const { name, category } = filter;
      try {
        const res = await fetch(
          `http://localhost:3000/api/products?name=${name}&category=${category}`
        );
        const data = await res.json();

        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    getData();
  }, [filter]);

  return (
    <Box sx={{ display: 'flex', columnGap: 4, mt: 2 }}>
      <Box sx={{ flexGrow: 8 }}>
        <SearchProduct setFilter={setFilter} />
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
            <ProductsRender
              loading={loading}
              products={products}
            />
          </List>
        </Box>
      </Box>
      <Box sx={{ maxHeight: '70vh', flexGrow: 1 }}>
        <Cart />
      </Box>
    </Box>
  );
}

type ProductRender = {
  loading: boolean;
  products: Product[];
};

function ProductsRender({ loading, products }: ProductRender) {
  if (loading) {
    return <LoadingBar />;
  }
  if (products.length === 0) {
    return (
      <Typography
        fontStyle='italic'
        textAlign='center'
      >
        Produk tidak ada
      </Typography>
    );
  }
  return products.map((p, i) => (
    <ProductCardList
      key={p.id}
      number={i + 1}
      id={p.id}
      name={p.name}
      price={p.price}
    />
  ));
}

export default Dashboard;
