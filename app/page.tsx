import { Button } from '@mui/material';
import Link from 'next/link';

export default async function Home() {
  return (
    <main className='main'>
      <h1>Home</h1>
      <Link href='/login'>
        <Button variant='contained'>Login</Button>
      </Link>
    </main>
  );
}
