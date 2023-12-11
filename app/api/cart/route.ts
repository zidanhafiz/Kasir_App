import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const cookiesStore = cookies();
  const supabase = createClient(cookiesStore);
  const body = await request.json();
  const product = {
    ...body,
    total_price: body.price * body.quantity,
  };

  const { data, error } = await supabase.from('cart').insert(product);

  if (error) {
    throw new Error(error.message);
  }

  return NextResponse.json(data);
}

export async function GET() {
  const cookiesStore = cookies();
  const supabase = createClient(cookiesStore);
  const { data: carts, error } = await supabase.from('cart').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return NextResponse.json(carts);
}
