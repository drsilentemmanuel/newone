
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd handle form submission (e.g., via an API)
        toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. We'll get back to you shortly.",
        });
        (e.target as HTMLFormElement).reset();
    };

    return (
        <div className="container mx-auto py-12 md:py-24">
            <div className="text-center space-y-4 mb-16">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Contact Us</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    We're here to help. Whether you have a question, feedback, or need support, please don't hesitate to get in touch.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                           <Mail className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Email</h3>
                            <p className="text-muted-foreground">For general inquiries, support, and partnerships.</p>
                            <a href="mailto:support@truststamp.co.zw" className="text-primary hover:underline">support@truststamp.co.zw</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                           <Phone className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Phone</h3>
                            <p className="text-muted-foreground">Our support team is available during business hours.</p>
                            <a href="tel:+263771501737" className="text-primary hover:underline">+263 771 501 737</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                           <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Our Office</h3>
                            <p className="text-muted-foreground">123 Fife Avenue, Harare, Zimbabwe</p>
                            <a href="#" className="text-primary hover:underline">Get Directions</a>
                        </div>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Send us a message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" placeholder="John Doe" required/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" placeholder="you@example.com" required/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input id="subject" placeholder="e.g., Support Request" required/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" rows={6} placeholder="How can we help you today?" required/>
                            </div>
                            <Button type="submit" className="w-full">Send Message</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
