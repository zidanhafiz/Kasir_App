import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import { CartContextProvider } from '@/context/CartContext';
import { OpenDrawerProvider } from '@/context/OpenDrawer';
import { Box } from '@mui/material';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OpenDrawerProvider>
        <CartContextProvider>
          <Box
            component='div'
            display={'flex'}
            maxHeight={'100vh'}
            overflow='hidden'
          >
            <Sidebar />
            <Box
              component='div'
              width={'100%'}
            >
              <Navbar />
              <Box
                sx={{
                  display: 'flex',
                  columnGap: 4,
                  py: 4,
                  px: 4,
                  bgcolor: 'aliceblue',
                  height: '100vh',
                }}
              >
                {children}
              </Box>
            </Box>
          </Box>
        </CartContextProvider>
      </OpenDrawerProvider>
    </>
  );
}
