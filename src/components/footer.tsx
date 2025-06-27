import Link from 'next/link';
import { Landmark } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1 flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Landmark className="h-8 w-8" />
              <span className="text-xl font-bold">Zim TPN</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Connecting landlords and tenants in Zimbabwe.
            </p>
            <p className="text-sm text-primary-foreground/80">
              &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold tracking-wider uppercase">ABOUT US</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="#" className="hover:text-primary-foreground hover:underline transition-colors">Mission</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground hover:underline transition-colors">Vision</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground hover:underline transition-colors">CSI</Link></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold tracking-wider uppercase">GET HELP</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/dashboard/support" className="hover:text-primary-foreground hover:underline transition-colors">Support</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground hover:underline transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold tracking-wider uppercase">TERMS OF USE</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/terms" className="hover:text-primary-foreground hover:underline transition-colors">Terms and conditions</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground hover:underline transition-colors">Fees</Link></li>
              <li><Link href="/privacy" className="hover:text-primary-foreground hover:underline transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
