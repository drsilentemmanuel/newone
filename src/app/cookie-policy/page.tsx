
"use client"
import { useState, useEffect } from 'react';

export default function CookiePolicyPage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    // This will only run on the client, after hydration
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="container mx-auto max-w-4xl py-12 md:py-16">
      <div className="space-y-6 prose prose-lg dark:prose-invert max-w-none">
        <h1 className="font-headline">Cookie Policy</h1>
        <p className="text-muted-foreground">Last updated: {lastUpdated || '...'}</p>
        
        <p>This Cookie Policy explains how Zimbabwe Landlord and Tenants Network ("we," "us," or "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.</p>

        <h2>What are cookies?</h2>
        <p>A cookie is a small data file that is placed on your device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
        <p>Cookies set by us are called "first-party cookies." Cookies set by parties other than us are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).</p>

        <h2>Why do we use cookies?</h2>
        <p>We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our online properties. For example, we use cookies to:</p>
        <ul>
            <li>Remember your login status and preferences.</li>
            <li>Understand how you use our services to improve them.</li>
            <li>Provide a secure browsing experience.</li>
            <li>Deliver relevant advertising.</li>
        </ul>

        <h2>Types of Cookies We Use</h2>
        <dl>
            <dt>Essential Cookies</dt>
            <dd>These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.</dd>
            <dt>Performance and Functionality Cookies</dt>
            <dd>These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality (like remembering your login details) may become unavailable.</dd>
            <dt>Analytics and Customization Cookies</dt>
            <dd>These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.</dd>
        </dl>
        
        <h2>How can I control cookies?</h2>
        <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your web browser. Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser, and from version to version.</p>
        <p>Please note that if you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.</p>

        <h2>Changes to this Cookie Policy</h2>
        <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>
        
        <h2>Where can I get further information?</h2>
        <p>If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:privacy@truststamp.co.zw">privacy@truststamp.co.zw</a>.</p>
      </div>
    </div>
  );
}
