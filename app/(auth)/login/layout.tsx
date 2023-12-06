import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Aplikasi Kasir',
  description: 'Aplikasi Kasir - Untuk menghitung dan mencatat barang belanjaan',
};

export default function LoginPage({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
