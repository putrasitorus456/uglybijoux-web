'use client';

import { useSearchParams } from 'next/navigation';
import useSWR from 'swr';
import axios from 'axios';
import ProductCard from '@/components/ProductCard';
import { useMemo } from 'react';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export default function ProductPageContent() {
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter');

  const { data: products, error, isLoading } = useSWR('uglybijoux-backend-production.up.railway.app/products/shop', fetcher);

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return filter
      ? products.filter((product: any) =>
          product.category.toLowerCase() === filter.toLowerCase()
        )
      : products;
  }, [products, filter]);

  if (isLoading) {
    return <div className="p-6 text-center">Memuat produk...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-600">Gagal memuat produk.</div>;
  }

  return (
    <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 pb-24">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-6">
        {filteredProducts.map((product: any) => (
          <div key={product.slug} className="border border-black">
            <ProductCard
              image1={product.image1}
              image2={product.image2}
              category={product.category}
              title={product.title}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
}