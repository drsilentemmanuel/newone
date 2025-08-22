
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ConditionalLayout } from '@/components/conditional-layout';
import { UserProvider } from '@/context/user-context';

export const metadata: Metadata = {
  title: 'Zimbabwe Rent Book - Tenant & Landlord Network',
  description: 'Connecting landlords and tenants in Zimbabwe.',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">
        <UserProvider>
          <ConditionalLayout>
              {children}
          </ConditionalLayout>
          <Toaster />
        </UserProvider>
      </body>
    </html>
  );
}
