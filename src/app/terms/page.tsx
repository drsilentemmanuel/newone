"use client"
import { useState, useEffect } from 'react';

export default function TermsPage() {
  const [dateString, setDateString] = useState<string>('');
  
  useEffect(() => {
    setDateString(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="container mx-auto max-w-4xl py-12 md:py-16">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Terms of Service</h1>
        <div className="space-y-4 text-muted-foreground">
          <p className="font-medium">Last updated: {dateString || '...'}</p>
          <p>Welcome to Zim TPN - Tenant Profiling Network. By using our services, you agree to these terms. Please read them carefully.</p>
          <h2 className="text-2xl font-semibold text-foreground pt-4">1. Using Our Services</h2>
          <p>You must follow any policies made available to you within the Services. Don’t misuse our Services. For example, don’t interfere with our Services or try to access them using a method other than the interface and the instructions that we provide.</p>
          <h2 className="text-2xl font-semibold text-foreground pt-4">2. Your Zim TPN Account</h2>
          <p>You may need a Zim TPN Account in order to use some of our Services. You are responsible for safeguarding your account, so use a strong password and limit its use to this account. We cannot and will not be liable for any loss or damage arising from your failure to comply with the above.</p>
          <h2 className="text-2xl font-semibold text-foreground pt-4">3. Privacy and Copyright Protection</h2>
          <p>Zim TPN’s privacy policies explain how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that Zim TPN can use such data in accordance with our privacy policies.</p>
          <p className="text-sm font-medium pt-8 text-center">This is a placeholder document. The actual Terms of Service will be provided upon launch.</p>
        </div>
      </div>
    </div>
  );
}
