"use client";

import React from "react";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white text-stone-900 font-anodina text-base leading-relaxed">

      {/* Hero Title Section */}
      <section className="text-center px-6 sm:px-10 md:px-20 pt-32 pb-24">
        <FadeIn yOffset={30}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight max-w-4xl mx-auto">
            UglyBijoux is an experimental jewelry brand from Indonesia.
          </h1>
        </FadeIn>
      </section>

      {/* Full Image Break */}
      <FadeIn yOffset={30}>
        <section>
          <img
            src="/images/about-full.png"
            alt="Uglybijoux Studio"
            className="w-full h-auto object-cover"
          />
        </section>
      </FadeIn>

      {/* Main Story Section */}
      <section className="py-28 px-6 sm:px-10 md:px-20 max-w-7xl mx-auto space-y-24">
        
        {/* Block 1 */}
        <FadeIn yOffset={30}>
          <div className="grid md:grid-cols-2 gap-12 text-[20px] items-center">
            <div>
              <p className="mb-5">
                We create pieces you’ll love wearing and love more to show off. Pieces that make you feel beautiful, precious and seen.
              </p>
              <p>
                The brand is a personal that started during Covid quarantine in our home atelier/office/packing centre in Yogyakarta, Indonesia.
              </p>
            </div>
            <img
              src="/images/about-1.png"
              alt="Uglybijoux Story"
              className="w-full h-auto object-cover"
            />
          </div>
        </FadeIn>

      {/* Statement Section */}
      <section className="px-6 sm:px-10 md:px-20 text-center py-20 border-y border-neutral-200 bg-[#fdfdfd]">
        <FadeIn yOffset={30}>
          <blockquote className="max-w-3xl mx-auto text-xl sm:text-2xl font-light leading-8 sm:leading-9 italic">
            “Run by us, two friends: Kome and Arya.”
          </blockquote>
        </FadeIn>
      </section>

        {/* Block 2 */}
        <FadeIn yOffset={30}>
          <div className="grid md:grid-cols-2 gap-12 text-[20px] items-center md:flex-row-reverse">
            <img
              src="/images/about-2.png"
              alt="Materials"
              className="w-full h-auto object-cover"
            />
            <div>
              <p className="mb-5">
                Our UglyBijoux are composed of materials and funky elements we found around us. Some were leftover beads from mom’s abandoned bead project, some were found in local shops nearby, and some were specially crafted by artisans in Java, Indonesia.
              </p>
              <p>
                UglyBijoux keeps us creatively stimulated. It’s essentially an exciting art initiative turned serious business.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Statement Section */}
      <section className="px-6 sm:px-10 md:px-20 text-center py-20 border-y border-neutral-200 bg-[#fdfdfd]">
        <FadeIn yOffset={30}>
          <blockquote className="max-w-3xl mx-auto text-xl sm:text-2xl font-light leading-8 sm:leading-9 italic">
            “But we have fun, always.”
          </blockquote>
        </FadeIn>
      </section>

      {/* Outro Content */}
      <section className="py-28 px-6 sm:px-10 md:px-20 max-w-4xl mx-auto space-y-6 text-lg leading-8">
        <FadeIn yOffset={30}>
          <p>
            The joy of running the brand is rooted in the creation process. And disrupting what’s normally considered ugly or pretty.
          </p>
          <p>
            We mix cheap and expensive materials, ignore the masculine–feminine silhouette, and design jewellery with a general fuck-it attitude.
          </p>
          <p>
            All while creating a funky and fabulous universe where you and I can actually enjoy ourselves.
          </p>
          <p>
            We’re really just making pieces that we love and adore — secretly hoping that you will too.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <p className="font-semibold text-xl">Let’s start!</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-3 px-6 py-2 border border-black text-black uppercase tracking-wide font-medium hover:bg-black hover:text-white transition-all duration-300"
            >
              <span className="text-sm sm:text-base">Shop now</span>
                <img
                  src="/icon/shopping-cart.png"
                  alt="Cart"
                  className="w-4 h-4 group-hover:invert transition-transform"
                />
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}