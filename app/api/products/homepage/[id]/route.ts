// app/api/products/homepage/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;
const API_KEY = process.env.INTERNAL_API_KEY!;

export async function POST(req: NextRequest, context: any) {
  const id = context.params.id;

  try {
    const res = await fetch(`${BASE_URL}/products/homepage/${id}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error('[API_POST_HOMEPAGE_ID]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, context: any) {
  const id = context.params.id;

  try {
    const res = await fetch(`${BASE_URL}/products/homepage/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error('[API_DELETE_HOMEPAGE_ID]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}