import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;
const API_KEY = process.env.INTERNAL_API_KEY!;

export async function GET() {
  try {
    const res = await fetch(`${BASE_URL}/products/shop`, {
      headers: { Authorization: `Bearer ${API_KEY}`, },
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error('[GET_SHOP]', err);
    return NextResponse.json({ error: 'Failed to fetch shop data' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const res = await fetch(`${BASE_URL}/products/shop`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        // Content-Type otomatis ditentukan oleh FormData
      },
      body: formData,
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error('[POST_SHOP]', err);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}