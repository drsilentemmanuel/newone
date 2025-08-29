
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, UserPlus, DollarSign } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Step = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
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


export default function AffiliateProgramPage() {
    return (
        <div className="space-y-16 py-12 md:py-24">
            <section className="container mx-auto text-center space-y-6">
                 <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
                    Join Our Affiliate Program
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                    Partner with Zimbabwe Landlord and Tenants Network and earn rewards for helping us grow our community of trusted landlords and tenants.
                </p>
                <div className="flex justify-center">
                    <Button asChild size="lg" className="rounded-full px-8 h-12 text-lg font-semibold shadow-lg transition-transform hover:scale-105">
                        <Link href="/signup">Become an Affiliate <ArrowRight className="ml-2 h-5 w-5" /></Link>
                    </Button>
                </div>
            </section>

            <section className="container mx-auto">
                 <div className="text-center space-y-3 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                        How It Works
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    <Step
                        icon={<UserPlus className="h-8 w-8" />}
                        title="1. Sign Up"
                        description="Create an account and get your unique referral link to share with your network."
                    />
                    <Step
                        icon={<Gift className="h-8 w-8" />}
                        title="2. Refer Users"
                        description="Share your link with landlords, agents, and tenants who could benefit from our platform."
                    />
                     <Step
                        icon={<DollarSign className="h-8 w-8" />}
                        title="3. Earn Rewards"
                        description="Get rewarded for every new user that signs up and uses our services through your link."
                    />
                </div>
            </section>
            
            <section className="bg-muted/50 py-12 md:py-20">
                <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold font-headline">Why Partner With Us?</h2>
                         <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold text-xl mt-1">&bull;</span>
                                <div>
                                    <h4 className="font-semibold">Competitive Commissions</h4>
                                    <p className="text-muted-foreground">Earn attractive commissions for every successful referral.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold text-xl mt-1">&bull;</span>
                                <div>
                                    <h4 className="font-semibold">Trusted Platform</h4>
                                    <p className="text-muted-foreground">Promote a service that provides real value and builds trust in the rental market.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3">
                                <span className="text-primary font-bold text-xl mt-1">&bull;</span>
                                <div>
                                    <h4 className="font-semibold">Full Support</h4>
                                    <p className="text-muted-foreground">Get access to marketing materials and a dedicated support team to help you succeed.</p>
                                </div>
                            </li>
                        </ul>
                        <Button asChild size="lg">
                            <Link href="/signup">Get Started Now</Link>
                        </Button>
                    </div>
                     <div>
                        <Image
                            src="https://placehold.co/600x450.png"
                            width={600}
                            height={450}
                            alt="People shaking hands"
                            className="rounded-lg shadow-xl border"
                            data-ai-hint="partnership handshake"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
