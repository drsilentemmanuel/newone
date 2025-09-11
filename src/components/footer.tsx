
"use client";

import Link from 'next/link';
import { ZimbabweRentBookLogo } from '@/components/zimbabwe-rent-book-logo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, Home } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';


const WhatsAppIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor">
        <title>WhatsApp</title>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.871 1.213 3.07c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
);

export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      toast({
        title: "Subscription Successful!",
        description: "Thanks for subscribing. You're on the list!",
      });
      setEmail('');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Subscription Failed",
        description: error.message || "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 py-12 text-center sm:text-left sm:grid-cols-2 md:grid-cols-5 md:py-16">
          <div className="space-y-4 flex flex-col items-center sm:items-start col-span-1 md:col-span-2">
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              Subscribe for the latest news and features. We won't share your email with anyone.
            </p>
             <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-sm space-y-2">
              <Input
                type="email"
                placeholder="Enter your email address*"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-primary-foreground/20 focus-visible:ring-primary-foreground"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                required
              />
              <Button type="submit" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shrink-0" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Submit
              </Button>
            </form>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold tracking-wider uppercase text-primary-foreground/70">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-primary-foreground/80 transition-colors">About Us</Link></li>
              <li><Link href="/partnership" className="hover:text-primary-foreground/80 transition-colors">Partnerships</Link></li>
              <li><Link href="/sponsorship" className="hover:text-primary-foreground/80 transition-colors">Sponsorship</Link></li>
              <li><Link href="/affiliate-program" className="hover:text-primary-foreground/80 transition-colors">Affiliate Program</Link></li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold tracking-wider uppercase text-primary-foreground/70">Help & Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/dashboard/support" className="hover:text-primary-foreground/80 transition-colors">Support</Link></li>
              <li><Link href="/dashboard/landlord/help" className="hover:text-primary-foreground/80 transition-colors">FAQs</Link></li>
              <li><Link href="/tutorials-guides" className="hover:text-primary-foreground/80 transition-colors">Tutorials & Guides</Link></li>
              <li><Link href="/contact" className="hover:text-primary-foreground/80 transition-colors">Contact Us</Link></li>
              <li>
                <a href="https://wa.me/263771501737" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center sm:justify-start gap-2 hover:text-primary-foreground/80 transition-colors">
                    <WhatsAppIcon />
                    <span>WhatsApp Chat</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold tracking-wider uppercase text-primary-foreground/70">Legal & Compliance</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="hover:text-primary-foreground/80 transition-colors">Terms of Use</Link></li>
              <li><Link href="/privacy" className="hover:text-primary-foreground/80 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-primary-foreground/80 transition-colors">Cookie Policy</Link></li>
              <li><Link href="/accessibility-statement" className="hover:text-primary-foreground/80 transition-colors">Accessibility Statement</Link></li>
              <li><Link href="/data-ethics-integrity" className="hover:text-primary-foreground/80 transition-colors">Data Ethics & Integrity</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-primary-foreground/10 py-6 space-y-6">
            <div className="text-center text-sm text-primary-foreground/70 space-y-4">
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                    <Link href="#" className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors">
                        <Home className="h-4 w-4" />
                        <span>Equal Housing Opportunity</span>
                    </Link>
                </div>
                <div>
                    <p>Zimbabwe Landlord and Tenants Network, © 2025</p>
                    <p>Created with Love by Silent Emmanuel</p>
                </div>
            </div>
        </div>

      </div>
    </footer>
  );
}
