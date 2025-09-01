
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, PlayCircle, User, Users } from "lucide-react";
import Link from "next/link";

const guides = [
  {
    title: "Getting Started for Landlords",
    description: "A step-by-step walkthrough on setting up your account, listing your first property, and inviting tenants.",
    category: "Landlords",
    icon: <User className="h-6 w-6 text-primary" />
  },
  {
    title: "Understanding Your Tenant Profile",
    description: "Learn how to build a strong profile that stands out to landlords and gets you approved faster.",
    category: "Tenants",
    icon: <User className="h-6 w-6 text-primary" />
  },
  {
    title: "How to Use the AI Insights Feature",
    description: "Unlock the power of AI to analyze profiles and find the perfect match, whether you're a landlord or tenant.",
    category: "AI & Features",
     icon: <PlayCircle className="h-6 w-6 text-primary" />
  },
  {
    title: "Managing Multiple Properties as an Agent",
    description: "Best practices for property managers to efficiently handle tenant screening, rent collection, and reporting.",
    category: "Agents",
    icon: <Users className="h-6 w-6 text-primary" />
  },
  {
    title: "Creating & E-Signing a Lease Agreement",
    description: "A complete guide to drafting a compliant lease and getting it securely signed by all parties online.",
    category: "Legal & Compliance",
    icon: <PlayCircle className="h-6 w-6 text-primary" />
  },
    {
    title: "Navigating the Dispute Resolution Process",
    description: "Learn how to correctly file a data dispute if you find an inaccuracy on your profile.",
    category: "Tenants",
    icon: <User className="h-6 w-6 text-primary" />
  },
];

export default function TutorialsGuidesPage() {
  return (
    <div className="container mx-auto py-12 md:py-16">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
          Tutorials & Guides
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know to get the most out of the Zimbabwe Landlord and Tenants Network platform.
        </p>
      </div>
      
      <div className="mb-12 max-w-lg mx-auto">
        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search for a guide..." className="pl-10 h-12 text-lg" />
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <Link key={guide.title} href="#" className="block group">
            <Card className="flex flex-col h-full hover:border-primary hover:shadow-lg transition-all">
                <CardHeader className="flex-row items-center gap-4">
                    {guide.icon}
                    <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
                        {guide.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">{guide.description}</p>
                </CardContent>
                 <CardContent>
                    <p className="text-xs font-semibold text-primary">{guide.category}</p>
                </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
