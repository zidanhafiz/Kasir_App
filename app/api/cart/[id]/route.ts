import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  const cookiesStore = cookies();
  const supabase = createClient(cookiesStore);

  const { data, error } = await supabase.from('cart').select('*').eq('id', id);

  if (error) {
    throw new Error(error.message);
  }

  return NextResponse.json(data);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  const cookiesStore = cookies();
  const supabase = createClient(cookiesStore);
  const body = await request.json();

  const { data, error } = await supabase
    .from('cart')
    .update({ quantity: body.quantity, total_price: body.price * body.quantity })
    .eq('id', id)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return NextResponse.json(data);
}
