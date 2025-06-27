'use client';

import { usePathname } from 'next/navigation';
import { Header } from "@/components/header";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith('/dashboard');

  if (isDashboard) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        {children}
      </main>
    </>
  );
}
