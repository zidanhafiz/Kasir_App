import { Button } from '@mui/material';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/server';

const getData = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: products } = await supabase.from('products').select('*');

  return products;
};

export default async function Home() {
  const collection = await getData();

  console.log(collection);
  return (
    <main className='main'>
      <h1>Home</h1>
      {collection?.map((c) => (
        <div key={c.id}>
          <p>{c.name}</p>
          <p>{c.price}</p>
          <p>{c.category}</p>
        </div>
      ))}
      <Link href='/login'>
        <Button variant='contained'>Login</Button>
      </Link>
    </main>
  );
}
