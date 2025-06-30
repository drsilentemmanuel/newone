
"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Property Aspects of Intellectual Property",
    price: "R 4,105.00",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "book brain",
  },
  {
    name: "Residential Lease Pack",
    price: "R 250.00",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "document contract",
  },
  {
    name: "Commercial Lease Pack",
    price: "R 450.00",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "office building",
  },
  {
    name: "Company Enquiry Report",
    price: "R 150.00",
    imageUrl: "https://placehold.co/600x400.png",
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
            <Card key={product.name} className="flex flex-col overflow-hidden group">
                <div className="relative">
                    <Link href="#" className="block overflow-hidden">
                    <Image
                        src={product.imageUrl}
                        width={600}
                        height={400}
                        alt={product.name}
                        className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={product.aiHint}
                    />
                    </Link>
                    <Button size="icon" variant="ghost" className="absolute top-2 left-2 bg-black/30 text-white hover:bg-black/50 hover:text-white rounded-full h-8 w-8">
                        <Heart className="h-4 w-4" />
                    </Button>
                </div>
                <CardContent className="p-4 text-center flex-grow flex flex-col justify-start">
                    <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
                </CardContent>
                <CardFooter className="flex-col items-center justify-center p-4 pt-0">
                    <p className="text-xl font-bold text-foreground mb-4">{product.price}</p>
                    <Button className="w-full">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                    </Button>
                </CardFooter>
            </Card>
            ))}
        </div>
    </div>
  );
}
