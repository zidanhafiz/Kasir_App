'use client';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { useOpenDrawer } from '@/context/OpenDrawer';
import { usePathname } from 'next/navigation';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Navbar() {
  const { toggleOpen, open } = useOpenDrawer();
  const [name, setName] = useState<string>('');
  const pathName = usePathname();

  useEffect(() => {
    const names = pathName.split('/');
    setName(names[1].toLocaleUpperCase());
  }, [pathName]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='fixed'
        open={open}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={toggleOpen}
              edge='start'
              sx={{
                marginRight: 3,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              noWrap
              component='div'
            >
              {name}
            </Typography>
          </Box>
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
