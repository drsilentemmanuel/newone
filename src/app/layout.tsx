import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ConditionalLayout } from '@/components/conditional-layout';
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: 'Zim TPN - Tenant Profiling Network',
  description: 'Connecting landlords and tenants in Zimbabwe.',
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
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <div className="flex flex-col flex-1">
            <ConditionalLayout>
                {children}
            </ConditionalLayout>
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
