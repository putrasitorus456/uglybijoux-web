import { NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;
const API_KEY = process.env.INTERNAL_API_KEY!;

export async function DELETE(_req: Request, context: any) {
  const guest_id = context.params.guest_id;

  try {
    const res = await fetch(`${BASE_URL}/api/cart/clear/${guest_id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error('[API_CLEAR_CART]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}