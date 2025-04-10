"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileShop, setShowMobileShop] = useState(false);
  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowShopDropdown(false);
      }
    };

    if (showShopDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showShopDropdown]);

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-30 px-4 sm:px-6 transition-all duration-300">
      <div className="max-w-screen-xl mx-auto h-16 grid grid-cols-3">
        {/* Left - Menu (mobile) */}
        <div className="md:hidden absolute left-3 top-3 text-m uppercase font-medium tracking-wide text-left">
          <button onClick={() => setIsMobileMenuOpen(true)}>MENU</button>
        </div>

        {/* Left - Nav (desktop) */}
        <nav className="hidden md:flex flex-wrap gap-x-10 gap-y-2 text-m text-black uppercase tracking-wide font-medium absolute top-3 left-3">
          <Link href="/" className="hover:underline">Home</Link>

          {/* Shop Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowShopDropdown(!showShopDropdown)}
              className="hover:underline cursor-pointer uppercase text-m font-medium tracking-wide"
            >
              SHOP
            </button>

            {showShopDropdown && (
              <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 shadow-lg rounded-md p-3 z-50 w-48">
                <ul className="text-sm font-normal space-y-1 text-black">
                  <li className="hover:underline"><Link href="/products">All</Link></li>
                  <li className="hover:underline"><Link href="/products?filter=necklaces">Necklaces</Link></li>
                  <li className="hover:underline"><Link href="/products?filter=bracelets">Bracelets</Link></li>
                  <li className="hover:underline"><Link href="/products?filter=charms">Charms</Link></li>
                  <li className="hover:underline"><Link href="/products?filter=rings">Rings</Link></li>
                  <li className="hover:underline"><Link href="/collections">Shop by Collection</Link></li>
                </ul>
              </div>
            )}
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
              className="w-12 sm:w-112 md:w-14 h-auto object-contain"
            />
          </Link>
        </div>

        {/* Right - Cart */}
        <div className="absolute top-3 right-3 text-m font-medium text-black tracking-wide uppercase">
          Cart (1)
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white px-6 py-6 overflow-auto">
          <div className="flex justify-between items-center mb-6">
            <span className="text-m font-semibold uppercase tracking-wide">MENU</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-2xl leading-none">
              &times;
            </button>
          </div>

          <nav className="flex flex-col gap-4 text-m font-medium uppercase tracking-wider text-black">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">
              Home
            </Link>

            {/* Mobile Dropdown SHOP */}
            <div>
              <button
                onClick={() => setShowMobileShop(!showMobileShop)}
                className="w-full text-left flex items-center justify-between hover:underline"
              >
                <span>SHOP</span>
                <span>{showMobileShop ? "▲" : "▼"}</span>
              </button>

              {showMobileShop && (
                <div className="mt-2 ml-4 flex flex-col gap-2 text-xs">
                  <Link className="hover:underline" href="/products" onClick={() => setIsMobileMenuOpen(false)}>All</Link>
                  <Link className="hover:underline" href="/products?filter=necklaces" onClick={() => setIsMobileMenuOpen(false)}>Necklaces</Link>
                  <Link className="hover:underline" href="/products?filter=bracelets" onClick={() => setIsMobileMenuOpen(false)}>Bracelets</Link>
                  <Link className="hover:underline" href="/products?filter=charms" onClick={() => setIsMobileMenuOpen(false)}>Charms</Link>
                  <Link className="hover:underline" href="/products?filter=rings" onClick={() => setIsMobileMenuOpen(false)}>Rings</Link>
                  <Link className="hover:underline" href="/collections" onClick={() => setIsMobileMenuOpen(false)}>Shop by Collection</Link>
                </div>
              )}
            </div>

            <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">
              Gallery
            </Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:underline">
              About
            </Link>

            <div className="mt-6 text-sm uppercase font-semibold">Cart (1)</div>
          </nav>
        </div>
      )}
    </header>
  );
}