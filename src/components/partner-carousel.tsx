'use client';

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

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
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 md:basis-1/4 lg:basis-1/6">
            <div className="p-1">
              <div className="flex aspect-[2.5/1] items-center justify-center p-6 grayscale opacity-60 transition-opacity hover:opacity-100">
                <Image
                  src={`https://placehold.co/150x60.png`}
                  width="150"
                  height="60"
                  alt={`Partner Logo ${index + 1}`}
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
