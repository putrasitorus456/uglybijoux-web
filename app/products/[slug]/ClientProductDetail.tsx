"use client";

import { useState } from "react";
import Image from "next/image";

interface Product {
  id: string; // ✅ Tambahkan ini
  image1: string;
  image2: string;
  category: string;
  title: string;
  description: string;
  price: string;
  details?: string[] | string;
}

export default function ClientProductDetail({
    product,
    onAddToCartSuccess,
  }: {
    product: Product;
    onAddToCartSuccess?: () => void;
  }) {
  const images = [product.image1, product.image2];
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Parse details if it's stringified JSON
  let parsedDetails: string[] = [];
  try {
    parsedDetails =
      typeof product.details === "string"
        ? JSON.parse(product.details)
        : Array.isArray(product.details)
        ? product.details
        : [];
  } catch (err) {
    console.error("Gagal parsing product.details:", err);
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handleAddToCart = async () => {
    const guest_id = typeof window !== 'undefined' ? localStorage.getItem('guest_id') : null;
    if (!guest_id) {
      alert("Guest ID not found.");
      return;
    }

    try {
      const res = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          guest_id,
          product_id: product.id,
          quantity,
        }),
      });

      const data = await res.json();

    if (res.ok) {
      if (onAddToCartSuccess) onAddToCartSuccess(); // ✅ buka drawer jika disediakan
    } else {
      alert('Gagal menambahkan ke keranjang.');
    }
    } catch (err) {
      console.error('Error adding to cart:', err);
      alert('Terjadi kesalahan saat menambahkan ke keranjang.');
    }
  };

  return (
    <main className="pt-28 pb-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto font-anodina text-black">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="relative w-full">
          <div className="relative aspect-[3/4] w-full bg-neutral-100 overflow-hidden">
            <Image
              src={images[currentImage]}
              alt={product.title}
              fill
              className="object-cover transition-opacity duration-300"
            />
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white text-black px-3 py-1 border border-neutral-300 transition z-10"
              aria-label="Previous Image"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white text-black px-3 py-1 border border-neutral-300 transition z-10"
              aria-label="Next Image"
            >
              →
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-10 flex flex-col justify-start gap-8">
          <div>
            <h1 className="text-[20px] sm:text-[20px] md:text-[25px] font-medium uppercase">{product.title}</h1>
            <p className="text-sm text-neutral-500 uppercase mt-1 mb-4">{product.category}</p>
            <p className="text-[15px] leading-relaxed mb-6">{product.description}</p>
            <p className="text-[15px] font-semibold mb-6">{product.price}</p>

            {/* Details & Care */}
            {parsedDetails.length > 0 && (
              <div className="mt-10 text-sm sm:text-base mb-6">
                <h2 className="uppercase tracking-widest text-[18px] font-semibold mb-4">Details and Care</h2>
                <ul className="space-y-2 text-[15px] list-disc list-inside text-neutral-700">
                  {parsedDetails.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mt-20 flex items-center gap-4">
              <span className="text-sm font-medium uppercase tracking-wide">Quantity</span>
              <div className="flex items-center border border-neutral-300 px-3 py-1 text-sm">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-2 text-lg"
                >
                  –
                </button>
                <span className="px-3">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-2 text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="mt-6 w-full sm:w-fit px-6 py-3 bg-black text-white text-sm uppercase tracking-wide hover:bg-neutral-800 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}