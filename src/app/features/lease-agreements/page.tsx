
import { Button } from "@/components/ui/button";
import { Check, FileSignature, Repeat, Download } from "lucide-react";
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

export default function LeaseAgreementsFeaturePage() {
  return (
    <div className="space-y-16 py-12 md:py-24">
        <section className="container mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
                Legally-Compliant Lease Agreements
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                Create, customize, and securely sign lease agreements online. Our templates are attorney-vetted to ensure compliance with Zimbabwean law.
            </p>
            <Button size="lg" asChild>
                <Link href="/signup">Create a Lease</Link>
            </Button>
        </section>

        <section className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
                <FeaturePoint 
                    icon={<Check className="h-7 w-7" />} 
                    title="Legally Vetted Templates"
                    description="Use our standard residential and commercial lease templates, crafted by legal experts to protect all parties."
                />
                <FeaturePoint 
                    icon={<FileSignature className="h-7 w-7" />} 
                    title="Secure E-Signatures"
                    description="Go paperless with legally-binding electronic signatures. Sign and store your leases securely in your dashboard."
                />
                <FeaturePoint 
                    icon={<Repeat className="h-7 w-7" />} 
                    title="Customizable Clauses"
                    description="Add or modify clauses to suit your specific property rules, from pet policies to maintenance responsibilities."
                />
                 <FeaturePoint 
                    icon={<Download className="h-7 w-7" />} 
                    title="Easy Access & Storage"
                    description="Both landlords and tenants can access the signed lease agreement anytime, anywhere from their dashboard."
                />
            </div>
             <div>
                <Image
                    src="https://placehold.co/600x600.png"
                    width={600}
                    height={600}
                    alt="A signed lease agreement document"
                    className="rounded-lg shadow-xl border"
                    data-ai-hint="document signature"
                />
            </div>
        </section>
        
        <section className="bg-muted/50 py-12 md:py-20">
            <div className="container mx-auto text-center max-w-4xl space-y-6">
                <h2 className="text-3xl font-bold font-headline">Protect Your Investment, Clarify Expectations</h2>
                <p className="text-muted-foreground text-lg">
                    A strong lease is the foundation of a good landlord-tenant relationship. Our tools remove the guesswork, ensuring all terms are clear, fair, and fully compliant with current regulations.
                </p>
                <Button variant="secondary" asChild>
                    <Link href="/pricing">Explore Pro Features</Link>
                </Button>
            </div>
        </section>
    </div>
  );
}
