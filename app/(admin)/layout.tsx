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
            {children}
          </Box>
        </Box>
      </OpenDrawerProvider>
    </>
  );
}
