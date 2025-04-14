"use client";
import * as React from "react";
import ProductCard from "../../components/ProductCard";
import products from "@/lib/product-landing";
import Link from "next/link";

export default function ProductSection() {
  return (
    <section className="bg-white px-2 sm:px-4 md:px-6 pb-16">
      <div className="w-full overflow-hidden">
        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
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