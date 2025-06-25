import Link from 'next/link';
import { Landmark } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center gap-2">
            <Landmark className="h-6 w-6 text-primary" />
            <span className="font-bold">Zim TPN</span>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
