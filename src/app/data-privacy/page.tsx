"use client"
import { useState, useEffect } from 'react';

export default function DataPrivacyPage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    // This will only run on the client, after hydration
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="container mx-auto max-w-4xl py-12 md:py-16">
      <div className="space-y-6 prose prose-lg dark:prose-invert max-w-none">
        <h1 className="font-headline">Data Privacy</h1>
        <p className="text-muted-foreground">Last updated: {lastUpdated || '...'}</p>
        
        <p>Zimbabwe Landlord and Tenants Network is committed to protecting the privacy of your personal information. This notice outlines how we collect, use, disclose, and safeguard your data.</p>

        <h2>Your Data Privacy Rights</h2>
        <p>As a user of our platform, you have specific rights regarding your personal data:</p>
        <ul>
            <li><strong>The right to be informed:</strong> We will always be transparent about how we use your personal data.</li>
            <li><strong>The right of access:</strong> You have the right to access the personal data we hold about you.</li>
            <li><strong>The right to rectification:</strong> You have the right to have your personal data rectified if it is inaccurate or incomplete.</li>
            <li><strong>The right to erasure:</strong> You have the right to request the deletion or removal of your personal data where there is no compelling reason for its continued processing.</li>
            <li><strong>The right to restrict processing:</strong> You have a right to 'block' or suppress processing of your personal data.</li>
            <li><strong>The right to data portability:</strong> You have the right to obtain and reuse your personal data for your own purposes across different services.</li>
            <li><strong>The right to object:</strong> You have the right to object to us processing your personal data for direct marketing.</li>
        </ul>

        <h2>Data Collection and Use</h2>
        <p>We collect information that is essential for providing our services. This includes profile information (for landlords, agents, and tenants), rental history, and payment data. This data is used to facilitate tenant screening, lease management, rent collection, and to provide AI-powered insights as described in our services.</p>

        <h2>Data Sharing and Disclosure</h2>
        <p>Your data is only shared under specific conditions and with your explicit consent. For instance, a tenant's profile is shared with a landlord only when the tenant authorizes it for a rental application. We do not sell your personal data to third parties. We may share data with trusted service providers for processing purposes, under strict confidentiality agreements.</p>
        
        <h2>Data Security</h2>
        <p>We implement robust technical and organizational measures to protect your data. This includes encryption, access controls, and regular security audits to prevent unauthorized access, disclosure, alteration, or destruction of your personal information.</p>
        
        <h2>Cookies and Tracking Technologies</h2>
        <p>We use cookies to enhance your user experience, such as keeping you logged in and remembering your preferences. Our <a href="/cookie-policy">Cookie Policy</a> provides detailed information about the cookies we use and how you can manage them.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about our data privacy practices or wish to exercise any of your rights, please contact our Data Protection Officer at <a href="mailto:privacy@truststamp.co.zw">privacy@truststamp.co.zw</a>.</p>
      </div>
    </div>
  );
}
