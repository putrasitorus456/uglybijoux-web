"use client";

import products from "@/lib/product-all";
import ProductCard from "@/components/ProductCard";
import { useSearchParams } from "next/navigation";

export default function ProductPageContent() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");

  const filteredProducts = filter
    ? products.filter((product) =>
        product.category.toLowerCase() === filter.toLowerCase()
      )
    : products;

  return (
    <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 pb-24">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-6">
        {filteredProducts.map((product) => (
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