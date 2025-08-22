
"use client"
import { useState, useEffect } from 'react';

export default function PrivacyPage() {
  const [dateString, setDateString] = useState<string>('');
  
  useEffect(() => {
    setDateString(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="container mx-auto max-w-4xl py-12 md:py-16">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Privacy Policy</h1>
        <div className="space-y-4 text-muted-foreground">
          <p className="font-medium">Last updated: {dateString || '...'}</p>
          <p>When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.</p>
          <h2 className="text-2xl font-semibold text-foreground pt-4">1. Information we collect</h2>
          <p>We collect information to provide better services to all our users. The types of information we collect depend on how you use our services. When you create an account, you provide us with personal information that includes your name and a password.</p>
          <h2 className="text-2xl font-semibold text-foreground pt-4">2. Sharing your information</h2>
          <p>We do not share your personal information with companies, organizations, or individuals outside of Zimbabwe Landlord and tenants network except in the following cases: with your consent, with domain administrators, for external processing, for legal reasons.</p>
          <p className="text-sm font-medium pt-8 text-center">This is a placeholder document. The actual Privacy Policy will be provided upon launch.</p>
        </div>
      </div>
    </div>
  );
}
