import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

// POST: Tambahkan item ke keranjang
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Request body:', body); // Debugging line

    const res = await fetch(`${BASE_URL}/api/cart/add`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.INTERNAL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error('[API_POST_CART]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// PUT: Update kuantitas item
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    const res = await fetch(`${BASE_URL}/api/cart/update`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${process.env.INTERNAL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error('[API_PUT_CART]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE: Hapus satu item dari keranjang
export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();

    const res = await fetch(`${BASE_URL}/api/cart/remove`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${process.env.INTERNAL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error('[API_DELETE_CART]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}