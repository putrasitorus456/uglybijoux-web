"use client";

import * as React from "react";
import ValueCard from "./value-card";

export default function ValueSection() {
  return (
    <section className="bg-white px-6 sm:px-10 md:px-20 py-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <div className="mb-16">
          <h2 className="uppercase text-[10px] sm:text-xs tracking-[0.25em] text-neutral-400 font-medium">
            Core Values
          </h2>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Why Choose Us
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 sm:gap-16">
          <ValueCard
            overlayImage="/images/values-overlay-1.png"
            iconImage="/images/values-icon-1.png"
            title="Bold & Experimental Aesthetic"
            description="Unconventional pieces for those who don’t conform."
          />
          <ValueCard
            overlayImage="/images/values-overlay-2.png"
            iconImage="/images/values-icon-2.png"
            title="Handmade & Made-to-Order"
            description="Crafted one by one. There’s no such thing as mass-made here."
          />
          <ValueCard
            overlayImage="/images/values-overlay-3.png"
            iconImage="/images/values-icon-3.png"
            title="Custom Jewelry"
            description="You imagine, we create — wearable art that’s personal."
          />
        </div>
      </div>
    </section>
  );
}