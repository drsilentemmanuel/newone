
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

const products = [
  {
    name: "Residential Lease Pack",
    category: "Legal Documents",
    price: "$ 250.00",
    bestSeller: true,
  },
  {
    name: "Property Dealer",
    category: "Books",
    price: "$ 313.00",
  },
  {
    name: "Commercial Lease Pack",
    category: "Legal Documents",
    price: "$ 450.00",
  },
  {
    name: "Company Enquiry Report",
    category: "Business Intelligence",
    price: "$ 150.00",
  },
  {
    name: "Deeds Search",
    category: "Verification Services",
    price: "$ 50.00",
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
