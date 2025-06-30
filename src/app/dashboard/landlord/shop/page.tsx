
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Residential Lease Pack",
    format: "PDF",
    price: "R 250.00",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "document contract",
    description: "Comprehensive residential lease agreement template. Legally vetted and easy to use."
  },
  {
    name: "Residential Lease Pack",
    format: "Word",
    price: "R 350.00",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "document paper",
    description: "A fully editable Word version of our comprehensive residential lease agreement."
  },
  {
    name: "Commercial Lease Pack",
    format: "PDF",
    price: "R 450.00",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "office building",
    description: "Detailed commercial lease agreement for your business property needs."
  },
  {
    name: "Company Enquiry Report",
    format: "Report",
    price: "R 150.00",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "business report",
    description: "In-depth credit and background report for potential business tenants."
  },
];

export default function ShopPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
         <h1 className="text-3xl font-bold font-headline">Shop</h1>
         <Button asChild variant="outline">
            <Link href="/dashboard/landlord/shop/reports">View My Purchases</Link>
         </Button>
      </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
            <Card key={`${product.name}-${product.format}`} className="flex flex-col">
                <div className="overflow-hidden rounded-t-lg">
                <Image
                    src={product.imageUrl}
                    width={600}
                    height={400}
                    alt={product.name}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-300 hover:scale-105"
                    data-ai-hint={product.aiHint}
                />
                </div>
                <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-sm font-semibold">{product.format}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                <p className="text-lg font-bold text-primary">{product.price}</p>
                <Button>
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
