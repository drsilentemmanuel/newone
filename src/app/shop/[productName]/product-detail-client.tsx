
"use client";

import type { Product } from "@/app/shop/page";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ShopProductCard } from "@/components/shop-product-card";

const ProductImage = ({ product }: { product: Product }) => {
    const { toast } = useToast();
    const handleAddToCart = () => {
        toast({
        title: "Item Added to Cart",
        description: `${product.name} has been successfully added to your cart.`,
        });
    };
    // Re-use the ShopProductCard for the main image to keep it consistent
    return <ShopProductCard product={product} onAddToCart={handleAddToCart} />;
};


export function ProductDetailClient({ product }: { product: Product }) {
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    toast({
      title: "Item Added to Cart",
      description: `${product.name} has been successfully added to your cart.`,
    });
  };

  return (
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="sticky top-28 space-y-6">
            <ProductImage product={product} />
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
            {product.partner && (
              <p className="text-sm text-muted-foreground">
                IN PARTNERSHIP WITH {product.partner.toUpperCase()}
              </p>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="text-2xl font-bold py-2 px-6 rounded-lg bg-amber-100 text-amber-800 border-amber-200">
              {product.price.split('.')[0]}
              <span className="text-lg font-semibold text-amber-700">.{product.price.split('.')[1]}</span>
              <span className="text-sm font-normal ml-2 text-amber-600">/ YEAR</span>
            </Badge>
            <Button size="lg" onClick={handleAddToCart} className="bg-sky-500 hover:bg-sky-600 text-white rounded-full">
              <ShoppingCart className="mr-2 h-5 w-5" />
              ADD TO CART
            </Button>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">QUICK OVERVIEW</h2>
            <div className="prose prose-sm text-muted-foreground space-y-4">
                <p>{product.description}</p>
                <p>{product.subscriptionInfo}</p>
                <p>{product.format}</p>
            </div>
          </div>
        </div>
      </div>
  );
}
