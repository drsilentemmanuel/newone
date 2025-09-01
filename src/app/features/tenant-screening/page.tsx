
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, FileText, BarChart, Clock } from "lucide-react";
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

export default function TenantScreeningFeaturePage() {
  return (
    <div className="space-y-16 py-12 md:py-24">
        <section className="container mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
                Comprehensive Tenant Screening
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                Make informed decisions with our fast, reliable, and compliant tenant screening services. Go beyond the surface to find tenants you can trust.
            </p>
            <Button size="lg" asChild>
                <Link href="/signup">Screen a Tenant Now</Link>
            </Button>
        </section>

        <section className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
                <FeaturePoint 
                    icon={<ShieldCheck className="h-7 w-7" />} 
                    title="Verify Identity & Reduce Risk"
                    description="Confirm your applicant is who they say they are with robust identity verification checks."
                />
                <FeaturePoint 
                    icon={<FileText className="h-7 w-7" />} 
                    title="In-Depth Credit Reports"
                    description="Access detailed credit histories to assess financial responsibility and payment behavior."
                />
                <FeaturePoint 
                    icon={<BarChart className="h-7 w-7" />} 
                    title="Rental History Analysis"
                    description="Review past rental performance, including payment records and references from previous landlords."
                />
                 <FeaturePoint 
                    icon={<Clock className="h-7 w-7" />} 
                    title="Fast & Efficient"
                    description="Receive comprehensive reports in minutes, not days, allowing you to fill vacancies faster."
                />
            </div>
             <div>
                <Image
                    src="https://placehold.co/600x600.png"
                    width={600}
                    height={600}
                    alt="A sample tenant screening report"
                    className="rounded-lg shadow-xl border"
                    data-ai-hint="report document"
                />
            </div>
        </section>
        
        <section className="bg-muted/50 py-12 md:py-20">
            <div className="container mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold font-headline">How Our Screening Process Works</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-8">
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">1</div>
                        <h3 className="text-xl font-semibold">Invite Your Applicant</h3>
                        <p className="text-muted-foreground">Enter the tenant's name and contact details. We'll send them a secure link to authorize the screening.</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">2</div>
                        <h3 className="text-xl font-semibold">Applicant Gives Consent</h3>
                        <p className="text-muted-foreground">The applicant reviews the request and provides their consent and necessary information through our secure portal.</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">3</div>
                        <h3 className="text-xl font-semibold">Receive Your Report</h3>
                        <p className="text-muted-foreground">You get a detailed, easy-to-read report directly in your dashboard, empowering you to make the best choice.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
