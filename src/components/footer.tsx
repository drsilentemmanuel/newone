
import Link from 'next/link';
import { ZimbabweRentBookLogo } from '@/components/zimbabwe-rent-book-logo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Linkedin, Phone, Instagram, Youtube } from 'lucide-react';

const WhatsAppIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor">
        <title>WhatsApp</title>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.871 1.213 3.07c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
);

const YouTubeIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor">
        <title>YouTube</title>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
);

const TikTokIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor">
        <title>TikTok</title>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.8-1.59-1.87-2.32-4.2-1.86-6.45.54-2.66 2.75-4.72 5.5-5.37.58-.14 1.16-.22 1.75-.28v4.02c-1.14.02-2.28.05-3.42.08.06.87.24 1.73.54 2.54.51 1.38 1.66 2.49 3.04 2.96.95.31 1.95.37 2.92.2.85-.14 1.67-.47 2.39-.94.01-1.92.01-3.84.01-5.76-.01-1.19-.42-2.34-1.12-3.29-.81-1.09-2.02-1.74-3.34-1.91v-4.15c.44.02.88.04 1.32.06z" />
    </svg>
)

const XIcon = () => (
     <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor">
        <title>X</title>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.931ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
    </svg>
)


const AppStoreButton = () => (
    <a href="#" className="inline-block">
        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-10"/>
    </a>
)

const GooglePlayButton = () => (
    <a href="#" className="inline-block">
        <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-10"/>
    </a>
)

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 py-12 text-center sm:text-left sm:grid-cols-2 md:grid-cols-5 md:py-16">
          <div className="space-y-4 flex flex-col items-center sm:items-start col-span-1 md:col-span-2">
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              Subscribe for the latest news and features. We won't share your email with anyone.
            </p>
             <form className="flex w-full max-w-sm items-center space-x-2">
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
              <li><Link href="#" className="hover:text-primary-foreground/80 transition-colors">Our Team</Link></li>
              
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold tracking-wider uppercase text-primary-foreground/70">GET HELP</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/dashboard/support" className="hover:text-primary-foreground/80 transition-colors">Support</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground/80 transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground/80 transition-colors">Contact Us</Link></li>
              <li>
                  <a href="tel:+263771501737" className="flex items-center justify-center sm:justify-start gap-2 hover:text-primary-foreground/80 transition-colors">
                      <Phone className="h-4 w-4" />
                      <span>+263 771 501 737</span>
                    </a>
              </li>
              <li>
                <a href="https://wa.me/263771501737" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center sm:justify-start gap-2 hover:text-primary-foreground/80 transition-colors">
                    <WhatsAppIcon />
                    <span>WhatsApp Chat</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold tracking-wider uppercase text-primary-foreground/70">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="hover:text-primary-foreground/80 transition-colors">Terms and conditions</Link></li>
              <li><Link href="#" className="hover:text-primary-foreground/80 transition-colors">Fees</Link></li>
              <li><Link href="/privacy" className="hover:text-primary-foreground/80 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="space-y-4 flex flex-col items-center sm:items-start col-span-full md:col-span-1">
             <div className="flex justify-center sm:justify-start space-x-4">
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors">
                     <TikTokIcon />
                  </a>
                  <a href="https://www.linkedin.com/company/101651553/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://www.facebook.com/truststampzim/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://www.youtube.com/@TrustStamp" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors">
                    <Youtube className="h-5 w-5" />
                  </a>
                   <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors">
                    <XIcon />
                  </a>
              </div>
              <div className="flex flex-col space-y-4 items-center sm:items-start">
                    <AppStoreButton />
                    <GooglePlayButton />
              </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 py-6 text-center text-sm text-primary-foreground/70">
            <p className="font-bold text-base">Trust Stamp: Zimbabwe Rent Book</p>
            <p>Powered by Trust Stamp</p>
            <p className="mt-4 text-xs">© 2025 Zimbabwe Rent Book. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
