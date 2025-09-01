
"use client"
import { useState, useEffect } from 'react';

export default function CookiePolicyPage() {
  const [dateString, setDateString] = useState<string>('');
  
  useEffect(() => {
    setDateString(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="container mx-auto max-w-4xl py-12 md:py-16">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Cookie Policy</h1>
        <div className="space-y-4 text-muted-foreground">
          <p className="font-medium">Last updated: {dateString || '...'}</p>
          <p>This Cookie Policy explains how we use cookies and similar technologies to recognize you when you visit our website.</p>
          <p className="text-sm font-medium pt-8 text-center">This is a placeholder document. The actual Cookie Policy content will be provided later.</p>
        </div>
      </div>
    </div>
  );
}
