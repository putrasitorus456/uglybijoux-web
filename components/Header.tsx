"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CartDrawer from '@/components/CartDrawer';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileShop, setShowMobileShop] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('guest_id')) {
      const id = crypto.randomUUID();
      localStorage.setItem('guest_id', id);
    }
  }, []);

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-30 px-4 sm:px-6 transition-all duration-300">
      <div className="max-w-screen-xl mx-auto h-16 grid grid-cols-3">
        {/* Left - Menu (mobile) */}
        <div className="md:hidden absolute left-3 top-5 text-sm uppercase font-medium tracking-wide text-left hover:underline">
          <button onClick={() => setIsMobileMenuOpen(true)}>MENU</button>
        </div>

        {/* Left - Nav (desktop) */}
        <nav className="hidden md:flex flex-wrap gap-x-10 gap-y-2 text-[13px] text-black font-medium uppercase tracking-wide font-medium absolute top-5 left-3">
          <Link href="/" className="hover:underline">Home</Link>

          {/* Shop Dropdown - Hover */}
          <div className="relative group">
            <Link
              href="/products"
              className="hover:underline uppercase text-[13px] font-medium tracking-wide"
            >
              SHOP
            </Link>

            {/* Dropdown */}
            <div className="absolute left-0 top-full bg-white border border-gray-200 shadow-lg rounded-md p-3 z-50 w-48 hidden group-hover:block">
              <ul className="text-xs font-normal space-y-1 text-black">
                <li className="hover:underline"><Link href="/products">All</Link></li>
                <li className="hover:underline"><Link href="/products?filter=necklaces">Necklaces</Link></li>
                <li className="hover:underline"><Link href="/products?filter=bracelets">Bracelets</Link></li>
                <li className="hover:underline"><Link href="/products?filter=charms">Charms</Link></li>
                <li className="hover:underline"><Link href="/products?filter=rings">Rings</Link></li>
                <li className="hover:underline"><Link href="/collections">Shop by Collection</Link></li>
              </ul>
            </div>
          </div>
          <Link href="/gallery" className="hover:underline">Gallery</Link>
          <Link href="/about" className="hover:underline">About</Link>
        </nav>

        {/* Center - Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link href="/">
            <img
              src="/icon/logo-black.png"
              alt="Logo"
              className="w-12 sm:w-12 md:w-14 h-auto object-contain"
            />
          </Link>
        </div>

        {/* Right - Cart */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="block absolute top-5 right-3 text-sm font-medium text-black tracking-wide uppercase"
        >
          Cart
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
      className={`md:hidden fixed inset-0 z-40 bg-white px-6 py-6 overflow-auto transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } flex flex-col text-left`}
    >

        {/* Tombol Close */}
        <div className="mb-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-sm font-semibold uppercase tracking-wide"
          >
            Close
          </button>
        </div>

        {/* Logo + Brand Name */}
        <div className="flex items-center gap-3 mb-6">
          <img src="/icon/logo-black.png" alt="Logo" className="w-12 h-auto" />
          <span className="text-2xl font-bold tracking-wider">Uglybijoux</span>
        </div>

        {/* Navigation dengan garis atas dan bawah */}
        <nav className="flex flex-col text-sm font-medium uppercase tracking-wide text-black w-full border-y border-gray-600 divide-y divide-gray-600">

          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-4 hover:underline"
          >
            Home
          </Link>

          {/* SHOP Dropdown */}
          <div className="py-4">
            <button
              onClick={() => setShowMobileShop(!showMobileShop)}
              className="w-full flex items-center uppercase justify-between hover:underline"
            >
              <span>Shop</span>
              <span>{showMobileShop ? "▲" : "▼"}</span>
            </button>

            {showMobileShop && (
              <div className="mt-2 ml-2 flex flex-col gap-2 text-xs">
                <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">All</Link>
                <Link href="/products?filter=necklaces" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">Necklaces</Link>
                <Link href="/products?filter=bracelets" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">Bracelets</Link>
                <Link href="/products?filter=charms" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">Charms</Link>
                <Link href="/products?filter=rings" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">Rings</Link>
                <Link href="/collections" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">Shop by Collection</Link>
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-4 hover:underline"
          >
            Gallery
          </Link>

          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="py-4 hover:underline"
          >
            About
          </Link>
        </nav>
      </div>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}