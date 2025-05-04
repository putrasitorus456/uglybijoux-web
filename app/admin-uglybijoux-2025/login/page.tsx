'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (password === 'bijoux2025') {
      localStorage.setItem('isAdmin', 'true');
      router.push('/admin-uglybijoux-2025');
    } else {
      setError('Password salah');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white p-6 shadow rounded w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Login Admin</h2>
        <input
          type="password"
          className="w-full border px-3 py-2 mb-4"
          placeholder="Masukkan password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}