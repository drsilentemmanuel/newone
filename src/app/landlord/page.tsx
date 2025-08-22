
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LandlordPage() {
  return (
    <div className="container mx-auto py-12 md:py-24 flex items-center justify-center">
      <Card className="max-w-2xl text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold font-headline md:text-4xl">
            Never Worry About Bad Tenants Again.
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">Screen tenants instantly, verify payment history, and protect your property income with Zimbabwe Landlord and tenants network.</p>
        </CardContent>
        <CardFooter className="justify-center">
            <Button asChild size="lg">
                <Link href="/signup">Sign Up & Screen Your First Tenant <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
