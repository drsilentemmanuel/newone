"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
  }
];

export default function BlogPage() {
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

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.title} className="flex flex-col overflow-hidden group">
            <Link href={post.link} className="block overflow-hidden">
              <Image
                src={post.imageUrl}
                width={600}
                height={400}
                alt={post.title}
                className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint="blog post"
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
    </div>
  );
}
