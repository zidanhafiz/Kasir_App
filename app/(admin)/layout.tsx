import Navbar from '@/components/navbar';
import Sidebar, { DrawerHeader } from '@/components/sidebar';
import { CartContextProvider } from '@/context/CartContext';
import { OpenDrawerProvider } from '@/context/OpenDrawer';
import { Box } from '@mui/material';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OpenDrawerProvider>
        <CartContextProvider>
          <Box sx={{ display: 'flex' }}>
            <Navbar />
            <Sidebar />
            <Box
              component='main'
              sx={{ p: 3, width: '100%', bgcolor: 'aliceblue', minHeight: '100vh' }}
            >
              <DrawerHeader />
              {children}
            </Box>
          </Box>
        </CartContextProvider>
      </OpenDrawerProvider>
    </>
  );
}
