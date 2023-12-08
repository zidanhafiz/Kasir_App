'use client';
import { Typography, ListItem, ListItemText, Button } from '@mui/material';
import { useCartContext } from '@/context/CartContext';

type Props = {
  number: number;
  id: number;
  name: string;
  harga: number;
  hargaSatuan: number;
  children?: React.ReactNode;
};

export default function ProductCardList({ number, id, name, harga, hargaSatuan }: Props) {
  const title = `${name} (${id})`;
  const { cartProducts, setCartProducts, toRupiah } = useCartContext();
  const hargaRp = toRupiah(harga);

  const addToCartHandler = () => {
    let isExist = false;
    const products = [...cartProducts];
    products.map((p) => {
      if (p.id === id) {
        p.quantity = p.quantity + 1;
        p.harga = hargaSatuan * p.quantity;
        isExist = true;
      }
    });

    if (!isExist) {
      const product = {
        id,
        name,
        harga,
        hargaSatuan,
        quantity: 1,
      };
      products.push(product);
    }
    setCartProducts(products);
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
