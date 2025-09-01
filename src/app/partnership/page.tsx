
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Handshake, Bot, BarChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PartnershipBenefit = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex flex-col items-center text-center gap-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
            {icon}
        </div>
        <div className="space-y-1">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    </div>
);

export default function PartnershipPage() {
  return (
    <div className="space-y-16 py-12 md:py-24">
        <section className="container mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
                Partner with Us
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                Collaborate with Zimbabwe Landlord and Tenants Network to integrate powerful tools, access unique data, and create new value for your clients and our community.
            </p>
        </section>

        <section className="container mx-auto">
             <div className="text-center space-y-3 mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                    Opportunities for Collaboration
                </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                <PartnershipBenefit
                    icon={<Handshake className="h-8 w-8" />}
                    title="Integration Partners"
                    description="Embed our tenant screening and verification tools directly into your own platform or service via our secure API."
                />
                <PartnershipBenefit
                    icon={<BarChart className="h-8 w-8" />}
                    title="Data & Analytics Partners"
                    description="Leverage our anonymized, aggregated market data to gain insights and build innovative products for the real estate sector."
                />
                <PartnershipBenefit
                    icon={<Bot className="h-8 w-8" />}
                    title="Technology Partners"
                    description="Work with us to develop and deploy cutting-edge solutions, from AI-driven analytics to blockchain-based verification systems."
                />
            </div>
        </section>

        <section className="bg-muted/50 py-12 md:py-20">
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                 <div>
                    <Image
                        src="https://placehold.co/600x450.png"
                        width={600}
                        height={450}
                        alt="Developers working on API integration"
                        className="rounded-lg shadow-xl border"
                        data-ai-hint="API integration code"
                    />
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold font-headline">A Partnership Built for Growth</h2>
                    <p className="text-muted-foreground">
                        We believe in the power of collaboration to drive innovation. Our partnership program is designed to be flexible and mutually beneficial, providing you with the resources and support you need to succeed.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>Access to robust, well-documented APIs.</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>Dedicated technical and strategic support.</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>Flexible revenue sharing and commercial models.</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>Joint marketing and co-branding opportunities.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="container mx-auto text-center space-y-4">
             <h2 className="text-3xl font-bold font-headline">Let's Build the Future of Real Estate Together</h2>
             <p className="text-muted-foreground max-w-xl mx-auto">If you have an idea for a partnership, we'd love to hear it. Get in touch with our team to start the conversation.</p>
             <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
             </Button>
        </section>
    </div>
  );
}
