
"use client";

import type { Product } from "@/app/shop/page";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Plus, Minus, Heart, Home, Building, BookOpen, Search, FileSearch } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const productThemes: { [key: string]: { card: string; icon: React.ReactNode } } = {
  "Residential Lease Pack": {
    card: "from-emerald-700 to-green-500",
    icon: <Home className="h-24 w-24" />,
  },
  "Property Dealer": {
    card: "from-amber-600 to-yellow-400",
    icon: <BookOpen className="h-24 w-24" />,
  },
  "Commercial Lease Pack": {
    card: "from-blue-800 to-sky-500",
    icon: <Building className="h-24 w-24" />,
  },
  "Company Enquiry Report": {
    card: "from-purple-800 to-violet-500",
    icon: <Search className="h-24 w-24" />,
  },
  "Deeds Search": {
    card: "from-teal-700 to-cyan-500",
    icon: <FileSearch className="h-24 w-24" />,
  },
};


export function ProductDetailClient({ product }: { product: Product }) {
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const theme = productThemes[product.name] || { card: "from-gray-700 to-gray-500", icon: <div/> };
  
  const handleAddToCart = () => {
    toast({
      title: "Item Added to Cart",
      description: `${quantity} x ${product.name} has been successfully added to your cart.`,
    });
  };

  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  }

  return (
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="sticky top-28 space-y-6">
            <div className="group">
                <div className={cn(
                    "relative overflow-hidden rounded-md border text-white aspect-[3/4] flex flex-col p-4 bg-gradient-to-br transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-xl",
                    theme.card
                )}>
                    <div className="flex justify-between items-start">
                        <div className="font-bold text-sm bg-white/20 px-3 py-1 rounded-full">Trust Stamp</div>
                        {product.bestSeller && (
                        <div className="text-xs font-semibold bg-amber-400 text-amber-900 px-2 py-0.5 rounded-full">
                            Best Seller
                        </div>
                        )}
                    </div>
                    <div className="flex-grow flex flex-col items-center justify-center text-center">
                        <h3 className="text-2xl font-bold text-shadow-md leading-tight">{product.name}</h3>
                        <p className="text-sm mt-1 opacity-80">{product.category}</p>
                    </div>
                    <div className="absolute bottom-0 right-0 opacity-10">
                        {theme.icon}
                    </div>
                    <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 text-white border-0"
                    >
                    <Heart className="h-5 w-5" />
                    </Button>
                </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline">{product.category}</Badge>
                {product.bestSeller && <Badge variant="destructive">Best Seller</Badge>}
              </div>
              <CardTitle className="!mt-4 text-3xl font-bold tracking-tight">{product.name}</CardTitle>
              {product.partner && (
                <CardDescription>
                  In partnership with {product.partner}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent className="space-y-6">
              <Separator />
               <div className="space-y-4">
                  <h3 className="text-base font-semibold text-muted-foreground">About this product</h3>
                  <div className="prose prose-sm text-foreground space-y-4">
                      <p>{product.description}</p>
                      <p>{product.subscriptionInfo}</p>
                      <p>{product.format}</p>
                  </div>
              </div>

              <Separator />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <p className="text-3xl font-bold">{product.price}</p>
                    <p className="text-sm text-muted-foreground">/ YEAR</p>
                  </div>
                   <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                        <Minus className="h-4 w-4" />
                    </Button>
                    <Input type="number" value={quantity} readOnly className="w-16 text-center" />
                    <Button variant="outline" size="icon" onClick={() => handleQuantityChange(1)}>
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>
              </div>
             
              <Button size="lg" onClick={handleAddToCart} className="w-full text-lg h-12 rounded-full">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
  );
}
