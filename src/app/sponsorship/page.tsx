
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Benefit = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
        <span className="text-muted-foreground">{children}</span>
    </li>
);

export default function SponsorshipPage() {
  return (
    <div className="space-y-16 py-12 md:py-24">
        <section className="container mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
                Sponsor Our Mission
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                Align your brand with trust, transparency, and innovation in Zimbabwe's rental market. Partner with us to reach a dedicated audience of landlords, agents, and tenants.
            </p>
        </section>

        <section className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold font-headline">Why Sponsor Us?</h2>
                <p className="text-muted-foreground">
                    Zimbabwe Landlord and Tenants Network is at the forefront of modernizing the rental industry in Zimbabwe. By sponsoring us, you gain a unique opportunity to connect with a highly engaged community and demonstrate your commitment to a fairer, more efficient property market.
                </p>
                <ul className="space-y-4">
                    <Benefit>
                        <strong>Brand Visibility:</strong> Showcase your brand to thousands of property owners, managers, and tenants across the country.
                    </Benefit>
                    <Benefit>
                        <strong>Targeted Reach:</strong> Directly engage with key decision-makers in the real estate sector.
                    </Benefit>
                    <Benefit>
                        <strong>Community Impact:</strong> Support a platform that empowers individuals and professionalizes the rental ecosystem.
                    </Benefit>
                    <Benefit>
                        <strong>Positive Association:</strong> Align your company with our values of trust, security, and innovation.
                    </Benefit>
                </ul>
            </div>
            <div>
                <Image
                    src="https://placehold.co/600x450.png"
                    width={600}
                    height={450}
                    alt="Professionals collaborating"
                    className="rounded-lg shadow-xl border"
                    data-ai-hint="business meeting"
                />
            </div>
        </section>

        <section className="bg-muted/50 py-12 md:py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold font-headline mb-8">Our Sponsorship Packages</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle>Bronze Partner</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-2">
                           <p>Logo placement on our partners page.</p>
                           <p>Mention in our monthly newsletter.</p>
                        </CardContent>
                        <CardContent>
                           <Button variant="outline" className="w-full">Enquire Now</Button>
                        </CardContent>
                    </Card>
                     <Card className="flex flex-col border-primary shadow-lg">
                        <CardHeader>
                            <CardTitle>Silver Partner</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-2">
                           <p>Prominent logo placement on our homepage.</p>
                           <p>Featured blog post or webinar sponsorship.</p>
                           <p>Social media shout-outs.</p>
                        </CardContent>
                         <CardContent>
                           <Button className="w-full">Become a Partner</Button>
                        </CardContent>
                    </Card>
                     <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle>Gold Partner</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-2">
                           <p>All Silver benefits, plus:</p>
                           <p>Co-branded marketing materials.</p>
                           <p>Exclusive sponsorship of a platform feature.</p>
                        </CardContent>
                         <CardContent>
                           <Button variant="outline" className="w-full">Enquire Now</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
        
        <section className="container mx-auto text-center space-y-4">
             <h2 className="text-3xl font-bold font-headline">Ready to Make an Impact?</h2>
             <p className="text-muted-foreground max-w-xl mx-auto">Let's discuss how we can create a sponsorship package that aligns with your brand's goals.</p>
             <Button asChild size="lg">
                <Link href="/contact">Contact Our Partnerships Team</Link>
             </Button>
        </section>
    </div>
  );
}
