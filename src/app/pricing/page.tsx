import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="container max-w-4xl py-12 md:py-16">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-muted-foreground">
          Choose a plan that works for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="border-primary border-2 shadow-lg">
           <CardHeader>
            <CardTitle className="text-2xl">For Tenants</CardTitle>
            <CardDescription>Everything you need to find your next home.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 flex flex-col">
            <p className="text-4xl font-bold">Free</p>
            <p className="text-muted-foreground flex-grow">Our services for tenants are, and always will be, completely free.</p>
            <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />Create a detailed profile</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />Get verified</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />Search listings</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />Connect with landlords</li>
            </ul>
             <Button asChild className="w-full mt-4">
              <Link href="/signup">Get Started</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
           <CardHeader>
            <CardTitle className="text-2xl">For Landlords & Agents</CardTitle>
            <CardDescription>Powerful tools to manage your properties and find tenants.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 flex flex-col">
             <p className="text-4xl font-bold">Coming Soon</p>
             <p className="text-muted-foreground flex-grow">We are finalizing our landlord plans. Sign up to be notified when we launch!</p>
             <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />List properties</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />View tenant profiles</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />AI-powered matching</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />Secure messaging</li>
            </ul>
            <Button asChild className="w-full mt-4" variant="secondary">
              <Link href="/signup">Join Waitlist</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
