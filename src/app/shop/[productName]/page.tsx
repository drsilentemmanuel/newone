
"use client";

import { notFound } from "next/navigation";
import type { Product } from "@/app/shop/page";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { ShopProductCard } from "@/components/shop-product-card";

// In a real app, this data would likely come from a CMS or database
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


export default function ProductDetailPage({ params }: { params: { productName: string } }) {
  const { toast } = useToast();
  const product = products.find((p) => p.slug === params.productName);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    toast({
      title: "Item Added to Cart",
      description: `${product.name} has been successfully added to your cart.`,
    });
  };

  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center text-sm mb-8 text-muted-foreground">
        <Link href="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/shop" className="hover:text-primary">Shop</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="font-medium text-foreground">{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="sticky top-28">
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
          
           <Button variant="outline" className="w-full justify-center text-center py-6">
            <div>
              <p className="text-base font-semibold">Learn about</p>
              <p className="text-lg font-bold text-primary">tpn esign</p>
            </div>
           </Button>

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
    </div>
  );
}
