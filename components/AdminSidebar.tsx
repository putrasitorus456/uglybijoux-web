'use client';

import { useRouter, usePathname } from 'next/navigation';
import { LogOut, LayoutGrid, Home } from 'lucide-react';

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    router.push('/admin-uglybijoux-2025/login');
  };

  const navItems = [
    {
      label: 'Produk Shop',
      href: '/admin-uglybijoux-2025/shop',
      icon: LayoutGrid,
    },
    {
      label: 'Produk Homepage',
      href: '/admin-uglybijoux-2025/homepage',
      icon: Home,
    },
  ];

  return (
    <aside className="w-64 min-h-screen border-r bg-white px-6 py-8 shadow-sm">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          UglyBijoux Admin
        </h1>
        <p className="text-sm text-gray-500">Kelola produk dan konten</p>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map(({ label, href, icon: Icon }) => (
          <a
            key={href}
            href={href}
            className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium
              ${
                pathname === href
                  ? 'bg-black text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </a>
        ))}
      </nav>

      <div className="mt-10">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}