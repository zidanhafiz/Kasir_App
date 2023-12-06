'use client';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
import { useOpenDrawer } from '@/context/OpenDrawer';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from 'next/navigation';

const list = [
  { name: 'Dashboard', link: '/dashboard', icon: [<HomeIcon />] },
  { name: 'Produk', link: '/produk', icon: [<InventoryIcon />] },
  { name: 'Riwayat', link: '/riwayat', icon: [<HistoryIcon />] },
  { name: 'Pengaturan', link: '/pengaturan', icon: [<SettingsIcon />] },
];

function Sidebar() {
  const { open, toggleOpen, widthDrawer } = useOpenDrawer();
  const router = useRouter();
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: widthDrawer,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: widthDrawer,
          boxSizing: 'border-box',
        },
      }}
      variant='permanent'
      anchor='left'
      open={open}
    >
      <Box textAlign={'right'}>
        <IconButton onClick={toggleOpen}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>
      <Divider />
      <List>
        {list.map((l) => (
          <ListItem
            key={l.name}
            disablePadding
            onClick={() => {
              router.push(l.link);
            }}
          >
            <ListItemButton>
              <ListItemIcon>{l.icon[0]}</ListItemIcon>
              <ListItemText primary={l.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
