'use client';
import { Typography, TextField, Button, Box, Link } from '@mui/material';
import styles from '../auth.module.css';
import { useRouter } from 'next/navigation';

function Register() {
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
          Daftar Akun Baru
        </Typography>
        <TextField
          id='alamat_email'
          label='Alamat Email'
          variant='standard'
          type='email'
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
        <TextField
          id='ulangi_password'
          label='Ulangi Password'
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
          Sudah punya akun?
        </Link>
        <Button variant='contained'>Buat Akun</Button>
      </Box>
    </>
  );
}

export default Register;
