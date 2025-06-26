'use client';

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const partners = [
  { name: 'CABS', logo: '/partners/cabs.jpg' },
  { name: 'Knight Frank', logo: '/partners/knightfrank.png' },
  { name: 'Rawson', logo: '/partners/rawson.png' },
  { name: 'Seef', logo: '/partners/seef.png' },
  { name: 'Old Mutual', logo: '/partners/oldmutual.png' },
  { name: 'RBZ', logo: '/partners/RBZ.jpg' },
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
              <div className="flex h-20 items-center justify-center p-4 grayscale opacity-60 transition-opacity hover:opacity-100">
                <Image
                  src={partner.logo}
                  width="200"
                  height="80"
                  alt={`${partner.name} Logo`}
                  className="object-contain h-full w-auto"
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
