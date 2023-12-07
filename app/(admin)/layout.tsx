import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import { OpenDrawerProvider } from '@/context/OpenDrawer';
import { Box } from '@mui/material';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OpenDrawerProvider>
        <Box
          component='div'
          display={'flex'}
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
                py: 4,
                px: 4,
                bgcolor: 'aliceblue',
                minHeight: '100vh',
                maxHeight: '100vh',
              }}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </OpenDrawerProvider>
    </>
  );
}
