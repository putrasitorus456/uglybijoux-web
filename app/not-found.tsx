"use client";

import Link from "next/link";

export default function NotFound() {

  return (
    <main className="flex flex-col items-center justify-center text-center h-[80vh] px-6">
      <h1 className="text-5xl sm:text-6xl font-bold text-slate-800 mb-4">404</h1>
      <p className="text-xl sm:text-2xl text-gray-600 mb-2 font-anodina">
        This page doesn’t exist
      </p>
      <p className="text-sm sm:text-base text-gray-500 max-w-lg">
        Maybe it’s been moved, renamed, or perhaps... it never existed at all 🤯
      </p>

      <Link
        href="/"
        className="mt-6 inline-block px-6 py-2 rounded-full bg-slate-900 text-white text-sm sm:text-base hover:bg-slate-800 transition"
      >
        Go Back Home
      </Link>
    </main>
  );
}