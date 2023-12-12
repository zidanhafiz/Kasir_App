import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const cookiesStore = cookies();
  const supabase = createClient(cookiesStore);

  const searchParams = request.nextUrl.searchParams;
  const name = searchParams.get('name');
  const category = searchParams.get('category');

  if (name === null || category === null) {
    const { data: products, error } = await supabase.from('products').select('*');

    if (error) {
      throw new Error(error.message);
    }
    return NextResponse.json(products);
  }

  if (name === '') {
    if (category === 'Semua') {
      const { data: products, error } = await supabase.from('products').select('*');

      if (error) {
        throw new Error(error.message);
      }
      return NextResponse.json(products);
    }
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .eq('category', category);
    if (error) {
      throw new Error(error.message);
    }
    return NextResponse.json(products);
  }

  if (category === 'Semua') {
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .or(`name.ilike.%${name}%,id.eq.${name}`);
    if (error) {
      throw new Error(error.message);
    }
    return NextResponse.json(products);
  }

  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .or(`name.ilike.%${name}%,id.eq.${name}`)
    .eq('category', category);
  if (error) {
    throw new Error(error.message);
  }
  return NextResponse.json(products);
}
