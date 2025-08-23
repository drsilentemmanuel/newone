
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ConditionalLayout } from '@/components/conditional-layout';
import { UserProvider } from '@/context/user-context';

const siteConfig = {
  name: "Zimbabwe Landlord and Tenants Network",
  description: "Connecting landlords and tenants in Zimbabwe with tools for tenant screening, rent collection, and legal compliance.",
  url: "https://www.truststamp.co.zw/",
  ogImage: "https://www.truststamp.co.zw/zimbabwe-landlord-tenants-network-logo-fixed-blue.png",
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  manifest: '/manifest.json',
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: '/zimbabwe-landlord-tenants-network-logo-fixed-blue.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
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
