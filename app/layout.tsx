import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import CssBaseline from '@mui/material/CssBaseline';

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Aplikasi Kasir',
  description: 'Aplikasi Kasir - Untuk menghitung dan mencatat barang belanjaan',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}
