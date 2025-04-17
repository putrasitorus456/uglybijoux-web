// "use client" must stay at the top
"use client";

import React, { Suspense } from "react";
import ProductPageContent from "./ProductPageContent"; // ⬅️ new file/component

// Top-level component
export default function ProductPage() {
  return (
    <main className="pt-32 bg-white text-black font-anodina">
      {/* Hero Title Section */}
      {/* Suspense-wrapped dynamic content */}
      <Suspense fallback={<p className="text-center">Loading products...</p>}>
        <ProductPageContent />
      </Suspense>
    </main>
  );
}