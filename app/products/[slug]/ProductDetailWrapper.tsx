'use client';

import { useState } from 'react';
import ClientProductDetail from './ClientProductDetail';
import CartDrawer from '@/components/CartDrawer';

export default function ProductDetailWrapper({ product }: { product: any }) {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <>
      <ClientProductDetail
        product={product}
        onAddToCartSuccess={() => setCartOpen(true)}
      />
      <CartDrawer isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}