import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookiesStore = cookies();
  const supabase = createClient(cookiesStore);
  const { data: products, error } = await supabase.from('products').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return NextResponse.json(products);
}
