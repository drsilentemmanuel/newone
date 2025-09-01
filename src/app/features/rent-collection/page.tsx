
import { Button } from "@/components/ui/button";
import { Check, DollarSign, Calendar, Bell, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeaturePoint = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex gap-4">
        <div className="flex-shrink-0 text-primary">{icon}</div>
        <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    </div>
);

export default function RentCollectionFeaturePage() {
  return (
    <div className="space-y-16 py-12 md:py-24">
        <section className="container mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
                Effortless & Secure Rent Collection
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                Automate your rent collection process, get paid on time, and give your tenants a convenient way to pay.
            </p>
            <Button size="lg" asChild>
                <Link href="/signup">Get Started for Free</Link>
            </Button>
        </section>

        <section className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
                <Image
                    src="https://placehold.co/600x600.png"
                    width={600}
                    height={600}
                    alt="Dashboard showing rent payments"
                    className="rounded-lg shadow-xl border"
                    data-ai-hint="payment dashboard"
                />
            </div>
            <div className="space-y-8">
                <FeaturePoint 
                    icon={<DollarSign className="h-7 w-7" />} 
                    title="Multiple Payment Options"
                    description="Accept payments via bank transfer, mobile money, and other popular methods, all through one platform."
                />
                <FeaturePoint 
                    icon={<Calendar className="h-7 w-7" />} 
                    title="Automated Billing"
                    description="Set up recurring rent invoices that are sent to your tenants automatically each month."
                />
                <FeaturePoint 
                    icon={<Bell className="h-7 w-7" />} 
                    title="Automatic Reminders"
                    description="Reduce late payments with automated reminders sent to tenants before their rent is due."
                />
                 <FeaturePoint 
                    icon={<Shield className="h-7 w-7" />} 
                    title="Secure & Reliable"
                    description="All transactions are processed through a secure system, protecting you and your tenants' financial data."
                />
            </div>
        </section>
        
        <section className="bg-muted/50 py-12 md:py-20">
            <div className="container mx-auto text-center max-w-4xl space-y-6">
                <h2 className="text-3xl font-bold font-headline">Full Transparency for Landlords and Tenants</h2>
                <p className="text-muted-foreground text-lg">
                    Both landlords and tenants get access to a clear payment history, including dates, amounts, and receipt generation. No more disputes over whether rent was paid. Our system provides a single source of truth for all rental transactions.
                </p>
                <Button variant="secondary" asChild>
                    <Link href="/pricing">View Pricing Plans</Link>
                </Button>
            </div>
        </section>
    </div>
  );
}
