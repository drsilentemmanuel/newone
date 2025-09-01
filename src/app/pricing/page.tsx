
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Star, Building, Briefcase } from "lucide-react";
import Link from "next/link";

const PlanFeature = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-center gap-2">
        <Check className="h-4 w-4 text-primary" />
        <span className="text-muted-foreground">{children}</span>
    </li>
);

const pricingPlans = [
    {
        icon: <Building className="h-8 w-8 text-primary" />,
        title: "Landlord",
        price: "$10",
        priceDescription: "per month",
        description: "For independent landlords managing their own properties.",
        features: [
            "Up to 5 Properties",
            "Tenant Screening",
            "Online Rent Collection (ACH)",
            "Lease Agreement Templates",
            "Maintenance Tracking",
            "Standard Support",
        ],
        ctaText: "Choose Landlord",
        ctaLink: "/signup?plan=landlord"
    },
    {
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        title: "Landlord Pro",
        price: "$25",
        priceDescription: "per month",
        description: "For serious investors with a growing portfolio.",
        isFeatured: true,
        features: [
            "Up to 20 Properties",
            "Everything in Landlord, plus:",
            "Advanced Reporting & Analytics",
            "AI Profile Insights & Matching",
            "E-Signatures for Leases",
            "Priority Support",
        ],
        ctaText: "Choose Pro",
        ctaLink: "/signup?plan=pro"
    },
    {
        icon: <Building className="h-8 w-8 text-primary" />,
        title: "Agent",
        price: "$50",
        priceDescription: "per month",
        description: "For property managers and real estate agents.",
        features: [
            "Unlimited Properties",
            "Everything in Pro, plus:",
            "Agent-level dashboard",
            "Client & Vendor Management",
            "Custom Branding on Reports",
            "Dedicated Account Manager",
        ],
        ctaText: "Choose Agent",
        ctaLink: "/signup?plan=agent"
    }
];

const faqs = [
    {
        question: "Can I try the platform before committing to a plan?",
        answer: "Yes, all new accounts start with a 14-day free trial of our Landlord Pro plan, no credit card required. This allows you to explore all our features and see which plan is right for you."
    },
    {
        question: "What happens if I need to manage more properties than my plan allows?",
        answer: "You can easily upgrade your plan at any time from your dashboard settings. Your billing will be pro-rated for the current cycle."
    },
    {
        question: "Is there a discount for paying annually?",
        answer: "Yes! We offer a 20% discount on all plans if you choose to pay annually. You can select this option during checkout."
    },
    {
        question: "What types of payment do you accept?",
        answer: "We accept all major credit and debit cards, including Visa, Mastercard, and American Express."
    }
];


export default function PricingPage() {
  return (
    <div className="space-y-16 py-12 md:py-24">
        <section className="container mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
                Find the Right Plan for You
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                Simple, transparent pricing. No hidden fees. Choose the plan that best fits your needs and start managing your properties with confidence.
            </p>
        </section>

        <section className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {pricingPlans.map((plan) => (
                    <Card key={plan.title} className={`flex flex-col ${plan.isFeatured ? 'border-primary shadow-lg' : ''}`}>
                         {plan.isFeatured && (
                            <div className="relative">
                                <div className="absolute top-0 right-4 -mt-4">
                                    <div className="flex items-center gap-1 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                                        <Star className="h-3 w-3"/>
                                        Most Popular
                                    </div>
                                </div>
                            </div>
                        )}
                        <CardHeader className="text-center">
                            <div className="flex justify-center mb-4">{plan.icon}</div>
                            <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                            <div className="flex items-baseline justify-center gap-1">
                                <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                                <span className="text-muted-foreground">{plan.priceDescription}</span>
                            </div>
                            <CardDescription>{plan.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                             <ul className="space-y-3">
                                {plan.features.map((feature, index) => (
                                    <PlanFeature key={index}>{feature}</PlanFeature>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full" size="lg" variant={plan.isFeatured ? 'default' : 'outline'}>
                                <Link href={plan.ctaLink}>{plan.ctaText}</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>

        <section className="container mx-auto max-w-3xl">
            <div className="text-center space-y-3 mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                    Frequently Asked Questions
                </h2>
            </div>
             <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    </div>
  );
}
