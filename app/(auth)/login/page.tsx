'use client';
import { Typography, TextField, Button, Box, Link } from '@mui/material';
import styles from '../auth.module.css';
import { useRouter } from 'next/navigation';

function Login() {
  const router = useRouter();
  return (
    <>
      <form className={styles.form}>
        <Typography
          variant='h1'
          sx={{ fontSize: 24, fontWeight: 500 }}
          marginBottom={2}
          textAlign={'center'}
        >
          Masuk
        </Typography>
        <TextField
          id='username'
          label='Username'
          variant='standard'
          type='text'
          margin='dense'
          fullWidth
          required
        />
        <TextField
          id='password'
          label='Password'
          variant='standard'
          type='password'
          margin='dense'
          fullWidth
          required
        />
      </form>
      <Box
        marginTop={5}
        display={'flex'}
        justifyContent={'space-around'}
        alignItems={'center'}
      >
        <Link
          sx={{ cursor: 'pointer' }}
          onClick={() => router.push('/login')}
        >
          Lupa password?
        </Link>
        <Button variant='contained'>Masuk</Button>
      </Box>
    </>
  );
}

export default Login;
