
"use client";

import type { Product } from "@/app/shop/page";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ShopProductCard } from "@/components/shop-product-card";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Input } from "@/components/ui/input";


export function ProductDetailClient({ product }: { product: Product }) {
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  
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
            <ShopProductCard product={product} onAddToCart={() => {}} />
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
