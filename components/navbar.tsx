'use client';
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { useOpenDrawer } from '@/context/OpenDrawer';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { toggleOpen } = useOpenDrawer();
  const [name, setName] = useState<string>('');
  const pathName = usePathname();

  useEffect(() => {
    const names = pathName.split('/');
    setName(names[1].toLocaleUpperCase());
  }, [pathName]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={toggleOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            {name}
          </Typography>
          <Button
            color='inherit'
            variant='outlined'
          >
            Keluar
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
