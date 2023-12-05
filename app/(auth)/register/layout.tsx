import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register - Aplikasi Kasir',
  description: 'Aplikasi Kasir - Untuk menghitung dan mencatat barang belanjaan',
};

export default function RegisterPage({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
