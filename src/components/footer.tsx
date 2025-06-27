import Link from 'next/link';
import { Landmark } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Landmark className="h-8 w-8" />
              <span className="text-xl font-bold">Zim TPN</span>
            </Link>
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              Connecting landlords and tenants in Zimbabwe.
            </p>
            <p className="text-sm text-primary-foreground/80">
              &copy; 2025. All rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
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
      </div>
    </footer>
  );
}
