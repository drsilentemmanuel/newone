
"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageSquare, Phone, Star } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Does using Zimbabwe Rent Book cost money?",
    answer: "Zimbabwe Rent Book offers both free and premium features. Basic profile creation and searching is free for all users. Advanced features like detailed credit checks, e-signing, and premium support may require a subscription or a one-time fee.",
  },
  {
    question: "What is the timeline to receive a payment deposit?",
    answer: "Payment processing times can vary depending on the payment method and banking institutions involved. Typically, ACH transfers take 3-5 business days to appear in your account.",
  },
  {
    question: "How do I turn off marketing for my property?",
    answer: "You can manage your property listings from the 'Properties' section in your dashboard. Simply select the property and toggle the 'Marketing' status to off.",
  },
  {
    question: "How long does it take to post on 3rd party sites?",
    answer: "When you market a property through Zimbabwe Rent Book, it is typically syndicated to our partner sites within 24-48 hours. However, the exact time can vary depending on the third-party platform.",
  },
  {
    question: "What is included in Premium?",
    answer: "Our Premium plan includes advanced features such as unlimited tenant screening reports, state-specific lease agreements, e-signing capabilities, priority support, and detailed financial reporting tools.",
  },
];

const guides = [
    { title: "Rent Payments Guide", href: "#"},
    { title: "How to Create a Lease Agreement", href: "#"},
    { title: "Learn About Your Tenant's Portal", href: "#"},
    { title: "Maintenance Request Guide", href: "#"},
    { title: "Lead Management Guide", href: "#"},
];

const HelpOptionCard = ({ icon, title, description, buttonText, buttonLink, isFeatured }: { icon: React.ReactNode, title: string, description: string, buttonText: string, buttonLink: string, isFeatured?: boolean }) => (
    <Card className="flex flex-col text-center items-center p-6 relative">
        {isFeatured && <Star className="absolute top-3 right-3 h-5 w-5 text-yellow-400 fill-yellow-400" />}
        <div className="p-3 bg-muted rounded-full mb-4">
            {icon}
        </div>
        <CardHeader className="p-0">
            <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 mt-2 flex-grow">
            <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
        <div className="mt-4 w-full">
            <Button variant="outline" className="w-full" asChild>
                <Link href={buttonLink}>{buttonText}</Link>
            </Button>
        </div>
    </Card>
);

export default function HelpPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-headline">Need Help?</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HelpOptionCard
            icon={<HelpCircle className="h-7 w-7 text-primary" />}
            title="Visit The Help Center"
            description="Figure out the answer faster with helpful articles from our team."
            buttonText="VISIT HELP CENTER"
            buttonLink="/dashboard/support"
           />
          <HelpOptionCard
            icon={<MessageSquare className="h-7 w-7 text-primary" />}
            title="Send Us a Message"
            description="Our team is here to help! Start a chat or send us an email."
            buttonText="CHAT WITH US"
            buttonLink="/dashboard/support"
           />
           <HelpOptionCard
            icon={<Phone className="h-7 w-7 text-primary" />}
            title="Still Need Help? Call Us!"
            description="Upgrade to call our support team directly."
            buttonText="LEARN MORE"
            buttonLink="#"
            isFeatured={true}
           />
      </div>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 pt-8">
        <div>
            <h2 className="text-xl font-bold mb-4 font-headline">FAQs</h2>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
        <div>
            <h2 className="text-xl font-bold mb-4 font-headline">Guides</h2>
            <div className="space-y-3">
                {guides.map((guide, index) => (
                    <Link key={index} href={guide.href} className="block text-primary hover:underline">
                        {guide.title} &raquo;
                    </Link>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
