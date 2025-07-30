// hooks/useCartCount.ts
'use client';

import { useEffect, useState } from 'react';

export function useCartCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const guest_id = typeof window !== 'undefined' ? localStorage.getItem('guest_id') : null;
    if (!guest_id) return;

    const fetchCart = async () => {
      const res = await fetch(`/api/cart?guest_id=${guest_id}`);
      const data = await res.json();
      const totalQty = data.reduce((sum: number, item: any) => sum + item.quantity, 0);
      setCount(totalQty);
    };

    fetchCart();
  }, []);

  return count;
}