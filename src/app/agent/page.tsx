
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AgentPage() {
  return (
    <div className="container mx-auto py-12 md:py-24 flex items-center justify-center">
      <Card className="max-w-2xl text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold font-headline md:text-4xl">
            Tenant Screening & Rent Tracking in Minutes, Not Days.
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">Automate tenant checks, manage leases, and save hours every week with tools built for property agents.</p>
        </CardContent>
        <CardFooter className="justify-center">
             <Button asChild size="lg">
                <Link href="/signup">Start Managing Multiple Properties Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
