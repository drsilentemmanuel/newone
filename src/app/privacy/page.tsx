
"use client"
import { useState, useEffect } from 'react';

export default function PrivacyPage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    // This will only run on the client, after hydration
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="container mx-auto max-w-4xl py-12 md:py-16">
      <div className="space-y-6 prose prose-lg dark:prose-invert max-w-none">
        <h1 className="font-headline">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: {lastUpdated || '...'}</p>
        <p>When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.</p>
        
        <h2>1. Information We Collect</h2>
        <p>We collect information to provide better services to all our users. The types of information we collect depend on how you use our services. This includes:</p>
        <ul>
          <li><strong>Information you create or provide to us:</strong> When you create an account, you provide us with personal information that includes your name, email, and a password. You can also choose to add a phone number or payment information to your account.</li>
          <li><strong>Information we collect as you use our services:</strong> We collect information about the apps, browsers, and devices you use to access our services, which helps us provide features like automatic product updates.</li>
          <li><strong>Your activity:</strong> We collect information about your activity in our services, which we use to do things like recommend a feature you might like.</li>
        </ul>

        <h2>2. Why We Collect Data</h2>
        <p>We use the data we collect for the following purposes:</p>
        <ul>
            <li><strong>Provide our services:</strong> We use your information to deliver our services, like processing your searches in order to return results or helping you share content by suggesting recipients from your contacts.</li>
            <li><strong>Maintain & improve our services:</strong> We also use your information to ensure our services are working as intended, such as tracking outages or troubleshooting issues that you report to us.</li>
            <li><strong>Develop new services:</strong> We use the information we collect in existing services to help us develop new ones.</li>
            <li><strong>Measure performance:</strong> We use data for analytics and measurement to understand how our services are used.</li>
            <li><strong>Communicate with you:</strong> We use information we collect, like your email address, to interact with you directly.</li>
        </ul>
        
        <h2>3. Sharing Your Information</h2>
        <p>We do not share your personal information with companies, organizations, or individuals outside of Zimbabwe Landlord and Tenants Network except in the following cases:</p>
        <ul>
          <li><strong>With your consent:</strong> We’ll share personal information outside of Zimbabwe Landlord and Tenants Network when we have your explicit consent. For example, when you authorize us to share your tenant profile with a landlord.</li>
          <li><strong>For external processing:</strong> We provide personal information to our affiliates and other trusted businesses or persons to process it for us, based on our instructions and in compliance with our Privacy Policy and any other appropriate confidentiality and security measures.</li>
          <li><strong>For legal reasons:</strong> We will share personal information outside of our company if we have a good-faith belief that access, use, preservation, or disclosure of the information is reasonably necessary to meet any applicable law, regulation, legal process, or enforceable governmental request.</li>
        </ul>

        <h2>4. Security</h2>
        <p>We work hard to protect you and our company from unauthorized access, alteration, disclosure, or destruction of information we hold. We use encryption to keep your data private while in transit and we review our information collection, storage, and processing practices, including physical security measures, to prevent unauthorized access to our systems.</p>

        <h2>5. Your Controls</h2>
        <p>You have choices regarding the information we collect and how it's used. Your dashboard provides a range of tools to review and update your information, as well as to delete your account entirely. You can also manage your consent for data sharing with specific third parties through our Consent Management page.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, you can contact us at <a href="mailto:privacy@truststamp.co.zw">privacy@truststamp.co.zw</a>.</p>
      </div>
    </div>
  );
}
