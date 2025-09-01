
import { notFound } from "next/navigation";
import type { Product } from "@/app/shop/page";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ProductDetailClient } from "./product-detail-client";

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

export default function ProductDetailPage({ params }: { params: { productName: string } }) {
  const { productName } = params;
  const product = products.find((p) => p.slug === productName);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center text-sm mb-8 text-muted-foreground">
        <Link href="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/shop" className="hover:text-primary">Shop</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="font-medium text-foreground">{product.name}</span>
      </div>
      <ProductDetailClient product={product} />
    </div>
  );
}
