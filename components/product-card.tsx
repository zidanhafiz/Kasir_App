import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {
  name: string;
  harga: number;
  children?: React.ReactNode;
};

export default function ProductCard({ name, harga, children }: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        alt='green iguana'
        height='140'
        image='/ayaka-1.jpeg'
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
        >
          {name}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
        >
          {harga}
        </Typography>
      </CardContent>
      {children ? (
        children
      ) : (
        <CardActions>
          <Button size='small'>Tambah ke keranjang</Button>
          <Button size='small'>Hapus</Button>
        </CardActions>
      )}
    </Card>
  );
}
