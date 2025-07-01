import Link from 'next/link';
import { Landmark } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-12 md:py-16 px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <p className="text-sm text-primary-foreground/80 max-w-xs">
                Stay up to date on the latest features and releases by joining our newsletter.
            </p>
             <form className="flex w-full items-center space-x-2">
              <Input
                type="email"
                placeholder="Enter your email address*"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-primary-foreground/20 focus-visible:ring-primary-foreground"
              />
              <Button type="submit" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shrink-0">
                Submit
              </Button>
            </form>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold tracking-wider uppercase text-primary-foreground/70">ABOUT US</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary-foreground/80 transition-colors">Mission</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground/80 transition-colors">Vision</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground/80 transition-colors">CSI</Link></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold tracking-wider uppercase text-primary-foreground/70">GET HELP</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/dashboard/support" className="hover:text-primary-foreground/80 transition-colors">Support</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground/80 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold tracking-wider uppercase text-primary-foreground/70">TERMS OF USE</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="hover:text-primary-foreground/80 transition-colors">Terms and conditions</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground/80 transition-colors">Fees</Link></li>
              <li><Link href="/privacy" className="hover:text-primary-foreground/80 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
