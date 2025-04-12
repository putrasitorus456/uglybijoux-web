"use client";

import React from "react";
import ProductSection from "./landing/product-section";

export default function HomePage() {
  return (
    <>
      <main className="relative w-full bg-white min-h-screen overflow-hidden pt-16">
        {/* Background Image */}
        <div className="absolute inset-0 min-h-[600px]">
          <img
            src="/images/background-landing.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content 
        <div className="relative z-10 px-6 md:px-12 pt-28 pb-32 max-w-7xl mx-auto">
          <FadeIn yOffset={20}>
            <div className="bg-white text-black w-fit px-6 py-6 sm:px-10 sm:py-8 shadow-xl max-w-md sm:max-w-lg">
              <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl font-medium tracking-wide font-gilroy">
                Indonesian made
                <br />
                <span className="block">Experimental Accessories</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-black">
                We handcraft pieces you’ll love to wear —<br />
                and love more to show off.
              </p>

              <Link href="/products" passHref>
                <button className="mt-6 group inline-flex items-center gap-3 px-6 py-2 border border-black text-black uppercase tracking-wide font-medium hover:bg-black hover:text-white transition-all duration-300">
                  <span className="text-sm sm:text-base">Shop now</span>
                  <img
                    src="/icon/shopping-cart.png"
                    alt="Cart"
                    className="w-4 h-4 group-hover:invert transition-transform"
                  />
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>*/}
      </main>
      <ProductSection />
      <main className="relative w-full bg-white min-h-screen overflow-hidden pt-16">
        <div className="absolute inset-0 min-h-[600px]">
          <img
            src="/images/campaign-1.jpg"
            alt="campaign"
            className="w-full h-full object-cover"
          />
        </div>
      </main>
      <ProductSection />
    </>
  );
}