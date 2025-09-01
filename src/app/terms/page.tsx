
"use client"
import { useState, useEffect } from 'react';

export default function TermsPage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    // This will only run on the client, after hydration
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="container mx-auto max-w-4xl py-12 md:py-16">
      <div className="space-y-6 prose prose-lg dark:prose-invert max-w-none">
        <h1 className="font-headline">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: {lastUpdated || '...'}</p>
        <p>Welcome to Zimbabwe Landlord and Tenants Network. By using our services, you agree to these terms. Please read them carefully.</p>
        
        <h2>1. Using Our Services</h2>
        <p>You must follow any policies made available to you within the Services. Don’t misuse our Services. For example, don’t interfere with our Services or try to access them using a method other than the interface and the instructions that we provide. You may use our Services only as permitted by law, including applicable export and re-export control laws and regulations.</p>
        <p>Using our Services does not give you ownership of any intellectual property rights in our Services or the content you access. You may not use content from our Services unless you obtain permission from its owner or are otherwise permitted by law.</p>

        <h2>2. Your Zimbabwe Landlord and Tenants Network Account</h2>
        <p>You may need an account to use some of our Services. You are responsible for safeguarding your account, so use a strong password and limit its use to this account. We cannot and will not be liable for any loss or damage arising from your failure to comply with the above.</p>
        <p>To protect your account, keep your password confidential. You are responsible for the activity that happens on or through your account.</p>

        <h2>3. Privacy and Copyright Protection</h2>
        <p>Our privacy policies explain how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that we can use such data in accordance with our privacy policies.</p>
        <p>We respond to notices of alleged copyright infringement and terminate accounts of repeat infringers according to the process set out in local copyright law.</p>

        <h2>4. Your Content in our Services</h2>
        <p>Some of our Services allow you to upload, submit, store, send or receive content. You retain ownership of any intellectual property rights that you hold in that content. In short, what belongs to you stays yours.</p>
        <p>When you upload, submit, store, send or receive content to or through our Services, you give us (and those we work with) a worldwide license to use, host, store, reproduce, modify, and create derivative works for the limited purpose of operating, promoting, and improving our Services, and to develop new ones.</p>

        <h2>5. Modifying and Terminating our Services</h2>
        <p>We are constantly changing and improving our Services. We may add or remove functionalities or features, and we may suspend or stop a Service altogether. You can stop using our Services at any time, although we’ll be sorry to see you go. We may also stop providing Services to you, or add or create new limits to our Services at any time.</p>

        <h2>6. Disclaimers and Liability</h2>
        <p>We provide our Services using a commercially reasonable level of skill and care and we hope that you will enjoy using them. But there are certain things that we don’t promise about our Services.</p>
        <p>OTHER THAN AS EXPRESSLY SET OUT IN THESE TERMS OR ADDITIONAL TERMS, NEITHER ZIMBABWE LANDLORD AND TENANTS NETWORK NOR ITS SUPPLIERS OR DISTRIBUTORS MAKE ANY SPECIFIC PROMISES ABOUT THE SERVICES. FOR EXAMPLE, WE DON’T MAKE ANY COMMITMENTS ABOUT THE CONTENT WITHIN THE SERVICES, THE SPECIFIC FUNCTIONS OF THE SERVICES, OR THEIR RELIABILITY, AVAILABILITY, OR ABILITY TO MEET YOUR NEEDS. WE PROVIDE THE SERVICES “AS IS”.</p>
        
        <h2>7. About these Terms</h2>
        <p>We may modify these terms or any additional terms that apply to a Service to, for example, reflect changes to the law or changes to our Services. You should look at the terms regularly. We’ll post notice of modifications to these terms on this page. Changes will not apply retroactively and will become effective no sooner than fourteen days after they are posted. However, changes addressing new functions for a Service or changes made for legal reasons will be effective immediately.</p>
      </div>
    </div>
  );
}
