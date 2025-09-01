
import { Button } from "@/components/ui/button";
import { Bot, Sparkles, UserCheck, Search } from "lucide-react";
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

export default function AiInsightsFeaturePage() {
  return (
    <div className="space-y-16 py-12 md:py-24">
        <section className="container mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
                AI-Powered Insights
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                Leverage the power of Artificial Intelligence to make smarter, faster, and more confident decisions in the rental market.
            </p>
            <Button size="lg" asChild>
                <Link href="/signup">Unlock Your Insights</Link>
            </Button>
        </section>

        <section className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
             <div>
                <Image
                    src="https://placehold.co/600x600.png"
                    width={600}
                    height={600}
                    alt="AI analyzing data points"
                    className="rounded-lg shadow-xl border"
                    data-ai-hint="abstract AI data"
                />
            </div>
            <div className="space-y-8">
                <FeaturePoint 
                    icon={<UserCheck className="h-7 w-7" />} 
                    title="For Landlords & Agents"
                    description="Our AI analyzes tenant profiles to highlight strengths, potential risks, and compatibility with your properties, helping you find the perfect match."
                />
                <FeaturePoint 
                    icon={<Search className="h-7 w-7" />} 
                    title="For Tenants"
                    description="Get personalized feedback on your rental profile. Our AI provides suggestions to improve your profile and suggests landlords who are looking for tenants just like you."
                />
                <FeaturePoint 
                    icon={<Sparkles className="h-7 w-7" />} 
                    title="Data-Driven Recommendations"
                    description="Move beyond guesswork. Receive objective, data-driven recommendations to support your decision-making process."
                />
            </div>
        </section>
        
        <section className="bg-muted/50 py-12 md:py-20">
            <div className="container mx-auto text-center max-w-4xl space-y-6">
                 <div className="flex justify-center mb-4">
                    <Bot className="h-16 w-16 text-primary" />
                </div>
                <h2 className="text-3xl font-bold font-headline">Your Smart Assistant for the Rental Market</h2>
                <p className="text-muted-foreground text-lg">
                   The AI Insights feature is like having a personal data analyst working for you. By processing thousands of data points, it uncovers trends and connections that aren't visible at a glance, giving you a competitive edge.
                </p>
                <Button variant="secondary" asChild>
                    <Link href="/pricing">Available on Pro Plans</Link>
                </Button>
            </div>
        </section>
    </div>
  );
}
