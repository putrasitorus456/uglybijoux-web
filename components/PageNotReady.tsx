"use client";

import React from "react";
import Link from "next/link";

export default function PageNotReady() {
  return (
    <main className="font-anodina flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-anodina font-bold text-black mb-4">
        Page not ready yet...
      </h1>
      <p className="text-base sm:text-lg text-gray-400 max-w-md">
        We’re still polishing this page to make it look fabulous. Please come back later!
      </p>
      <Link
        href="/"
        className="mt-6 inline-block text-sm sm:text-base px-5 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition"
      >
        Back to Home
      </Link>
    </main>
  );
}