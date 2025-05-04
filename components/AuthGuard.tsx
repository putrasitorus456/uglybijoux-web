'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    const isLoginPage = pathname === '/admin-uglybijoux-2025/login';

    if (!isAdmin && !isLoginPage) {
      router.replace('/admin-uglybijoux-2025/login');
    } else {
      setAuthorized(true);
    }
  }, [pathname, router]);

  if (!authorized) return null;

  return <>{children}</>;
}