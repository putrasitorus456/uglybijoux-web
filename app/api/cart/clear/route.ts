// app/api/cart/clear/route.ts
import { NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;
const API_KEY = process.env.INTERNAL_API_KEY!;

// DELETE /api/cart/clear
export async function DELETE(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(`${BASE_URL}/cart/clear`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error('[API_CART_CLEAR]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}