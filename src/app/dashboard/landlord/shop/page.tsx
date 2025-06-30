
"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Property Dealer",
    subtitle: "ANTHONY DIXON",
    price: "R 313.00",
    imageUrl: "https://placehold.co/350x450.png",
    aiHint: "book property deal",
  },
  {
    name: "Residential Lease Pack",
    subtitle: "Legal Documents",
    price: "R 250.00",
    imageUrl: "https://placehold.co/350x450.png",
    aiHint: "document contract",
  },
  {
    name: "Commercial Lease Pack",
    subtitle: "Legal Documents",
    price: "R 450.00",
    imageUrl: "https://placehold.co/350x450.png",
    aiHint: "office building",
  },
  {
    name: "Company Enquiry Report",
    subtitle: "Business Intelligence",
    price: "R 150.00",
    imageUrl: "https://placehold.co/350x450.png",
    aiHint: "business report",
  },
];

export default function ShopPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
         <h1 className="text-3xl font-bold font-headline">Shop</h1>
         <Button asChild variant="outline">
            <Link href="/dashboard/landlord/reports">View My Purchases</Link>
         </Button>
      </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
            <div key={product.name} className="text-center">
                <div className="relative overflow-hidden group rounded-md">
                    <Link href="#" className="block">
                        <Image
                            src={product.imageUrl}
                            width={350}
                            height={450}
                            alt={product.name}
                            className="w-full object-cover"
                            data-ai-hint={product.aiHint}
                        />
                         <div className="absolute inset-x-0 bottom-0 bg-stone-800/75 p-3 text-white flex items-center justify-center gap-2 cursor-pointer">
                            <ShoppingCart className="h-5 w-5" />
                            <span className="font-semibold">Add to cart</span>
                        </div>
                    </Link>
                     <div className="absolute top-3 left-3 bg-white p-1.5 rounded-full shadow-md">
                        <Heart className="h-5 w-5 text-black fill-current" />
                    </div>
                </div>
                <div className="pt-4">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.subtitle}</p>
                    <p className="text-2xl font-black mt-2">{product.price}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
}
