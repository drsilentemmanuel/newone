
"use client";

import { useState }from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { Mail, UserPlus, Gift, Copy, Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const HowItWorksStep = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <li className="flex items-start gap-4">
        <div className="flex-shrink-0 text-primary pt-1">{icon}</div>
        <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    </li>
);

export default function GivePage() {
    const { toast } = useToast();
    const referralLink = "https://www.truststamp.com/r/U4s3r-1d"; // Mock link
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);
        toast({
            title: "Link Copied!",
            description: "Your referral link has been copied to the clipboard.",
        });
    };
    
    const handleSendInvite = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock send invite
        toast({
            title: "Invite Sent!",
            description: `An invitation has been sent to ${email}.`,
        });
        setEmail("");
        setMessage("");
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold font-headline">Give $5, Get $5</h1>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="overflow-hidden">
                        <Image
                            src="https://placehold.co/600x375.png"
                            width={600}
                            height={375}
                            alt="Gift Card"
                            className="w-full object-cover"
                            data-ai-hint="gift card"
                        />
                        <CardContent className="p-6 text-center space-y-4">
                            <h2 className="text-2xl font-bold">Help another landlord streamline their rental process!</h2>
                             <blockquote className="border-l-4 border-border pl-4 italic text-muted-foreground text-left">
                                "Love your website! I told all of my coworkers about it and most of them are using your site as well now."
                                <cite className="block not-italic mt-2 font-semibold">- Alex from Illinois</cite>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>How it works:</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <ul className="space-y-6">
                                <HowItWorksStep
                                    icon={<Mail className="h-8 w-8" />}
                                    title="1. Invite Them to Trust Stamp"
                                    description="Share your link or enter their email."
                                />
                                <HowItWorksStep
                                    icon={<UserPlus className="h-8 w-8" />}
                                    title="2. They Sign Up for Free"
                                    description="And do one of the following: Receive a screening report or application, Become a Premium Member, or Purchase a lease agreement."
                                />
                                <HowItWorksStep
                                    icon={<Gift className="h-8 w-8" />}
                                    title="3. You both get $5!"
                                    description="We'll send you both an Amazon gift card by email."
                                />
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                {/* Right Column */}
                <div className="lg:col-span-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Share Your Referral Link</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <Label htmlFor="referral-link">Copy Your Link</Label>
                                <div className="flex space-x-2 mt-1">
                                    <Input id="referral-link" value={referralLink} readOnly />
                                    <Button onClick={handleCopy}><Copy className="mr-2 h-4 w-4" /> Copy Link</Button>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                               <p className="text-sm font-medium">Share your link on:</p>
                               <div className="flex gap-2">
                                    <Button asChild variant="outline" size="icon">
                                        <Link href="#"><Facebook className="h-5 w-5 text-[#1877F2]" /></Link>
                                    </Button>
                                     <Button asChild variant="outline" size="icon">
                                        <Link href="#"><Linkedin className="h-5 w-5 text-[#0A66C2]" /></Link>
                                    </Button>
                                     <Button asChild variant="outline" size="icon">
                                        <Link href="#"><Twitter className="h-5 w-5 text-[#1DA1F2]" /></Link>
                                    </Button>
                               </div>
                            </div>
                             <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-background px-2 text-muted-foreground">
                                    OR
                                    </span>
                                </div>
                            </div>
                             <form onSubmit={handleSendInvite} className="space-y-4">
                                <div>
                                    <Label htmlFor="email" className="font-semibold">Invite Landlords by Email</Label>
                                    <p className="text-sm text-muted-foreground mb-2">We'll send them an email inviting them to sign up for Trust Stamp.</p>
                                    <Input 
                                        id="email" 
                                        type="email" 
                                        placeholder="Email" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="custom-message">Custom Message (Optional)</Label>
                                    <Textarea 
                                        id="custom-message" 
                                        placeholder="Add a personal touch to your invite..."
                                        maxLength={500}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows={5}
                                    />
                                    <p className="text-xs text-muted-foreground text-right mt-1">{message.length}/500 characters used</p>
                                </div>
                                <Button type="submit" className="w-full">Send Invite</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
