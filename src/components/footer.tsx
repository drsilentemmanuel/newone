import Link from 'next/link';
import { Landmark } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1 flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Landmark className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Zim TPN</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting landlords and tenants in Zimbabwe.
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-foreground tracking-wider uppercase">ABOUT US</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Mission</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Vision</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">CSI</Link></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-foreground tracking-wider uppercase">GET HELP</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/dashboard/support" className="hover:text-primary transition-colors">Support</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-foreground tracking-wider uppercase">TERMS OF USE</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms and conditions</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Fees</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
