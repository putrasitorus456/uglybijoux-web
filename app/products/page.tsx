// "use client" must stay at the top
"use client";

import React, { Suspense } from "react";
import ProductPageContent from "./ProductPageContent"; // ⬅️ new file/component
import FadeIn from "@/components/FadeIn";

// Top-level component
export default function ProductPage() {
  return (
    <main className="bg-white text-black font-anodina">
      {/* Hero Title Section */}
      <section className="text-center px-6 sm:px-10 md:px-20 pt-32 pb-12">
        <FadeIn yOffset={30}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight max-w-4xl mx-auto">
            Explore UglyBijoux.
          </h1>
        </FadeIn>
      </section>

      {/* Suspense-wrapped dynamic content */}
      <Suspense fallback={<p className="text-center">Loading products...</p>}>
        <ProductPageContent />
      </Suspense>
    </main>
  );
}