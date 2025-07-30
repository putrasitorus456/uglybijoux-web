'use client';

import { useEffect, useState } from 'react';

type CartItem = {
  id: number;
  product_id: number;
  title: string;
  price: string;
  image1: string;
  quantity: number;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartDrawer({ isOpen, onClose }: Props) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [guestId, setGuestId] = useState<string | null>(null);

  useEffect(() => {
  if (typeof window !== 'undefined') {
    const id = localStorage.getItem('guest_id');
    if (id) setGuestId(id);
  }
  }, []);

  const fetchCart = async () => {
    setLoading(true);
    const res = await fetch(`/api/cart/${guestId}`);
    const data = await res.json();
    setItems(data);
    console.log('Cart items:', data);
    setLoading(false);
  };

  useEffect(() => {
    if (guestId && isOpen) fetchCart();
  }, [guestId, isOpen]);

  function parsePrice(priceString: string): number {
    return parseInt(priceString.replace(/[^\d]/g, ''), 10);
  }

  const total = items.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Cart</h2>
          <button onClick={onClose} className="text-sm uppercase font-medium">Close</button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-64px)]">
          {loading ? (
            <p>Loading...</p>
          ) : items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 items-start">
                <img src={item.image1} alt={item.title} className="w-16 h-16 object-cover rounded" />
                <div className="flex flex-col text-sm">
                  <span className="font-medium">{item.title}</span>
                  <span className="text-gray-500">Rp{item.price.toLocaleString()}</span>
                  <span className="text-gray-600">Qty: {item.quantity}</span>
                </div>
              </div>
            ))
          )}

          {items.length > 0 && (
            <div className="border-t pt-4 font-semibold text-sm">
              Total: Rp{total.toLocaleString()}
            </div>
          )}
        </div>
      </div>
    </>
  );
}