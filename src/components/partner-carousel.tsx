'use client';

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const partners = [
  { name: 'Old Mutual', logo: '/old-mutual.png' },
  { name: 'CBZ Bank', logo: '/cbz.png' },
  { name: 'CABS', logo: '/cabs.png' },
  { name: 'FBC Bank', logo: '/fbc.png' },
  { name: 'Zimre Properties', logo: '/zimre.png' },
  { name: 'Knight Frank', logo: '/knight-frank.png' },
  { name: 'Seeff', logo: '/seeff.png' },
  { name: 'Pam Golding', logo: '/pam-golding.png' },
];

export function PartnerCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {partners.map((partner, index) => (
          <CarouselItem key={index} className="basis-1/2 md:basis-1/4 lg:basis-1/6">
            <div className="p-1">
              <div className="flex aspect-[2.5/1] items-center justify-center p-6 grayscale opacity-60 transition-opacity hover:opacity-100">
                <Image
                  src={partner.logo}
                  width="200"
                  height="80"
                  alt={`${partner.name} Logo`}
                  className="object-contain"
                  data-ai-hint="company logo"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
