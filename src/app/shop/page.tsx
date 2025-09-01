
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ShopProductCard } from "@/components/shop-product-card";

export interface Product {
  name: string;
  category: string;
  price: string;
  bestSeller?: boolean;
  slug: string;
  partner?: string;
  description: string;
  subscriptionInfo: string;
  format: string;
  documentCount: number;
}

const products: Product[] = [
  {
    name: "Residential Lease Pack",
    category: "Legal Documents",
    price: "$ 250.00",
    bestSeller: true,
    slug: "residential-lease-pack",
    partner: "Fullard Mayer Morrison",
    description: "This LeasePack contains documentation relevant for estate agents, managing agents or property managers who lease residential properties. Landlords who manage their own properties use the TPN Residential LeasePack to ensure that they adhere with the latest in legal requirements.",
    subscriptionInfo: "This is an annual subscription which is renewed in the 13th month and is charged as a monthly fee from the date of agreement of renewal.",
    format: "This pack is available in a writable PDF version.",
    documentCount: 15,
  },
  {
    name: "Property Dealer",
    category: "Books",
    price: "$ 313.00",
    slug: "property-dealer",
    description: "A comprehensive guide for property dealers in Zimbabwe, covering all aspects of the business from legal requirements to market analysis and client management.",
    subscriptionInfo: "This is a one-time purchase.",
    format: "This book is available in physical and PDF formats.",
    documentCount: 22,
  },
  {
    name: "Commercial Lease Pack",
    category: "Legal Documents",
    price: "$ 450.00",
    slug: "commercial-lease-pack",
    partner: "Fullard Mayer Morrison",
    description: "This LeasePack contains documentation relevant for estate agents, managing agents or property managers who lease commercial properties. Landlords who manage their own properties use the TPN Commercial LeasePack to ensure that they adhere with the latest in legal requirements.",
    subscriptionInfo: "This is an annual subscription which is renewed in the 13th month and is charged as a monthly fee from the date of agreement of renewal.",
    format: "This pack is available in a writable PDF version.",
    documentCount: 28,
  },
  {
    name: "Company Enquiry Report",
    category: "Business Intelligence",
    price: "$ 150.00",
    slug: "company-enquiry-report",
    description: "Gain critical insights into any registered company in Zimbabwe. This report includes directorship, registration details, and other vital business intelligence.",
    subscriptionInfo: "This is a per-report purchase.",
    format: "This report is delivered as a secure PDF.",
    documentCount: 12,
  },
  {
    name: "Deeds Search",
    category: "Verification Services",
    price: "$ 50.00",
    slug: "deeds-search",
    description: "Verify property ownership and check for any encumbrances with an official Deeds Office search. Essential for due diligence before any property transaction.",
    subscriptionInfo: "This is a per-search purchase.",
    format: "Results are delivered as a secure PDF report.",
    documentCount: 18,
  },
];

const categories = ["All Categories", ...new Set(products.map((p) => p.category))];

export default function ShopPage() {
  const [cartCount, setCartCount] = useState(0);
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
    toast({
      title: "Item Added to Cart",
      description: "The item has been successfully added to your cart.",
    });
  };
  
  const filteredProducts =
    selectedCategory === "All Categories"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-6 container mx-auto py-8">
      <div className="sticky top-[4rem] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10 py-4 border-b">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold font-headline">Shop</h1>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline">
              <Link href="/dashboard/landlord/reports">View My Purchases</Link>
            </Button>
            <div className="relative">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-3 h-5 w-5 justify-center p-0 rounded-full text-xs"
                >
                  {cartCount}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex justify-end">
          <div className="flex items-center gap-2">
            <Label htmlFor="category-filter" className="text-sm font-medium">Filter by:</Label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger id="category-filter" className="w-[200px]">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
             <ShopProductCard key={product.name} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}
