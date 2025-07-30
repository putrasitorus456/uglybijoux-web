"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import axios from "axios";

export default function ProductSection() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // 🔁 Panggil API internal Next.js
        const res = await axios.get("/api/products/homepage");
        const data = res.data;
        setProducts(data);
      } catch (err) {
        console.error("Gagal mengambil data homepage products:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="bg-white px-2 sm:px-4 md:px-6 pb-16">
      <div className="w-full overflow-hidden">
        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px">
          {loading &&
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-100 h-64 rounded-sm" />
            ))}

          {!loading &&
            !error &&
            products.length > 0 &&
            products.map((product, index) => (
              <ProductCard key={index} {...getSafeProduct(product)} />
            ))}

          {!loading && products.length === 0 && (
            <p className="col-span-full text-center text-gray-500 py-12">
              Tidak ada produk untuk homepage.
            </p>
          )}

          {error && (
            <p className="col-span-full text-center text-red-600 py-12">
              Gagal memuat data produk.
            </p>
          )}
        </div>

        {/* Shop All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-block text-[10px] sm:text-[13px] font-medium uppercase tracking-wide px-4 py-2 border border-black hover:bg-black hover:text-white transition-all duration-200"
          >
            Shop all products
          </Link>
        </div>
      </div>
    </section>
  );
}

// Utility: fallback image dan safety
function getSafeProduct(product: any) {
  return {
    ...product,
    image1: product.image1 || "/images/fallback.png",
  };
}