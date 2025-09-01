
"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, ShieldCheck, BadgeCheck, Home, Building, FileSearch, Search, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

type Product = {
  name: string;
  category: string;
  price: string;
  bestSeller?: boolean;
};

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

interface ShopProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

export function ShopProductCard({ product, onAddToCart }: ShopProductCardProps) {
  const theme = productThemes[product.name] || { card: "from-gray-700 to-gray-500", icon: <div/> };

  return (
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

      <div className="pt-4 text-left">
        <div className="flex justify-between items-center mt-1">
          <p className="text-2xl font-black">{product.price}</p>
          <Button onClick={onAddToCart}>
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
  );
}

