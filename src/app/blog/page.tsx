"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search } from "lucide-react";

const blogPosts = [
  {
    title: "The Ultimate Guide to Tenant Screening in Zimbabwe",
    description: "Learn the best practices for vetting tenants to protect your investment and ensure a steady rental income.",
    imageUrl: "/Gemini_Generated_Image_e5w6jve5w6jve5w6.png",
    link: "#",
    date: "July 26, 2024",
    category: "Landlords"
  },
  {
    title: "Building a Strong Tenant Profile: Your Key to a Better Rental",
    description: "Discover how a comprehensive TPN profile can help you stand out and secure your dream rental property.",
    imageUrl: "/Gemini_Generated_Image_swidg9swidg9swid.png",
    link: "#",
    date: "July 22, 2024",
    category: "Tenants"
  },
  {
    title: "Navigating Rental Laws in Zimbabwe: What Every Landlord Should Know",
    description: "A deep dive into the legal landscape of rentals in Zimbabwe to help you stay compliant and avoid legal pitfalls.",
    imageUrl: "/Gemini_Generated_Image_9i81uk9i81uk9i81.png",
    link: "#",
    date: "July 18, 2024",
    category: "Legal"
  },
   {
    title: "Maximizing Your Business's Real Estate",
    description: "Strategies for finding and negotiating the best commercial properties for your business needs.",
    imageUrl: "https://placehold.co/600x400.png",
    link: "#",
    date: "July 16, 2024",
    category: "Business",
    "data-ai-hint": "office building"
  },
  {
    title: "Understanding Commercial Leases",
    description: "A guide to commercial leases for business owners and property managers.",
    imageUrl: "https://placehold.co/600x400.png",
    link: "#",
    date: "July 15, 2024",
    category: "Commercial Property",
    "data-ai-hint": "building blueprint"
  },
  {
    title: "Tips for First-Time Residential Landlords",
    description: "Essential advice for managing your first residential property and finding great tenants.",
    imageUrl: "https://placehold.co/600x400.png",
    link: "#",
    date: "July 12, 2024",
    category: "Residential Property",
    "data-ai-hint": "house keys"
  },
  {
    title: "The Importance of School Proximity in Rentals",
    description: "How school districts affect rental property value and tenant interest for families.",
    imageUrl: "https://placehold.co/600x400.png",
    link: "#",
    date: "July 10, 2024",
    category: "Schools",
    "data-ai-hint": "school building"
  }
];

const categories = [
  "All",
  "Landlords",
  "Tenants",
  "Legal",
  "Business",
  "Commercial Property",
  "Residential Property",
  "Schools"
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPosts = blogPosts.filter(post => 
    (activeFilter === 'All' || post.category === activeFilter) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
          Our Blog
        </h1>
        <p className="text-xl text-muted-foreground">
          Insights, news, and tips for tenants and landlords in Zimbabwe.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-12">
        <aside className="md:col-span-1 space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Search Articles</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Filter Articles</h3>
            <div className="flex flex-col space-y-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "secondary" : "ghost"}
                  className="justify-start"
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </aside>

        <main className="md:col-span-3">
          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2">
              {filteredPosts.map((post) => (
                <Card key={post.title} className="flex flex-col overflow-hidden group">
                  <Link href={post.link} className="block overflow-hidden">
                    <Image
                      src={post.imageUrl}
                      width={600}
                      height={400}
                      alt={post.title}
                      className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={post['data-ai-hint'] || "blog post"}
                    />
                  </Link>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-primary font-semibold">{post.category}</span>
                      <span className="text-muted-foreground">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl leading-snug mt-2">
                      <Link href={post.link} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{post.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                      <Button variant="secondary" asChild>
                          <Link href={post.link}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
             <div className="flex flex-col items-center justify-center h-full rounded-lg bg-secondary/50 p-8 text-center">
              <h2 className="text-2xl font-semibold">No articles found</h2>
              <p className="text-muted-foreground mt-2">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
