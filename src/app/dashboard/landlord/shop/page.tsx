
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, ShieldCheck, BadgeCheck } from "lucide-react";
import Image from "next/image";
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

const products = [
  {
    name: "Residential Lease Pack",
    category: "Legal Documents",
    price: "R 250.00",
    imageUrl: "https://placehold.co/350x450.png",
    aiHint: "document contract",
    bestSeller: true,
  },
  {
    name: "Property Dealer",
    category: "Books",
    price: "R 313.00",
    imageUrl: "https://placehold.co/350x450.png",
    aiHint: "book property deal",
  },
  {
    name: "Commercial Lease Pack",
    category: "Legal Documents",
    price: "R 450.00",
    imageUrl: "https://placehold.co/350x450.png",
    aiHint: "office building",
  },
  {
    name: "Company Enquiry Report",
    category: "Business Intelligence",
    price: "R 150.00",
    imageUrl: "https://placehold.co/350x450.png",
    aiHint: "business report",
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
    <div className="space-y-6">
      <div className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10 py-4 border-b">
        <div className="container px-0 flex items-center justify-between">
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

      <div className="container px-0 space-y-6">
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
            <div key={product.name} className="group">
              <div className="relative overflow-hidden rounded-md border">
                <Image
                  src={product.imageUrl}
                  width={350}
                  height={450}
                  alt={product.name}
                  className="w-full object-cover aspect-[3/4]"
                  data-ai-hint={product.aiHint}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                {product.bestSeller && (
                  <Badge className="absolute top-3 left-3 bg-amber-400 text-amber-900 hover:bg-amber-400">
                    Best Seller
                  </Badge>
                )}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white text-black"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              <div className="pt-4 text-left">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {product.category}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-2xl font-black">{product.price}</p>
                  <Button onClick={handleAddToCart}>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to cart
                  </Button>
                </div>
                <div className="flex items-center justify-start gap-4 mt-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BadgeCheck className="h-4 w-4 text-emerald-500" />
                    <span>Instant Download</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
