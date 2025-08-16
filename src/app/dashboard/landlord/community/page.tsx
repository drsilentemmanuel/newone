
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MessageSquare, Video, CheckSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ResourceCard = ({ icon, title, isNew }: { icon: React.ReactNode, title: string, isNew?: boolean }) => (
    <Link href="#" className="block group relative">
        <Card className="flex flex-col items-center justify-center p-6 gap-2 text-center h-full hover:shadow-lg transition-shadow">
            {icon}
            <p className="font-semibold">{title}</p>
        </Card>
        {isNew && <Badge className="absolute top-2 right-2">New</Badge>}
    </Link>
);

export default function CommunityPage() {
    return (
        <div className="space-y-12">
            <section className="text-center space-y-6">
                <div className="flex justify-center">
                    <Image
                        src="https://placehold.co/400x150.png"
                        width={400}
                        height={150}
                        alt="Community illustration"
                        data-ai-hint="community city illustration"
                    />
                </div>
                <h1 className="text-4xl font-bold font-headline">A community, built for landlords like you.</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Reach the next stage of your investing journey with a little help from your friends, and with the best free educational resources a landlord could ask for.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-4">
                    <ResourceCard icon={<MessageSquare className="h-8 w-8 text-primary" />} title="Forum" isNew />
                    <ResourceCard icon={<GraduationCap className="h-8 w-8 text-primary" />} title="Academy" />
                    <ResourceCard icon={<Video className="h-8 w-8 text-primary" />} title="Webinars" />
                </div>
            </section>

            <section className="py-12 bg-muted/50 rounded-lg">
                <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                         <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full border border-blue-200">
                           <span className="font-mono text-lg">#</span>better landlords
                        </div>
                        <p className="text-sm font-semibold text-muted-foreground">BETTER LANDLORDS FORUM</p>
                        <h2 className="text-3xl font-bold font-headline">A community built just for real estate investors.</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckSquare className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span>Connect with veteran landlords who have been there and done that.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckSquare className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span>Learn about new laws and how they'll affect your rental business.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckSquare className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span>Stay up to date on the latest education from Zimbabwe Rent Book and its partners.</span>
                            </li>
                        </ul>
                        <Button size="lg" asChild>
                            <Link href="#">VISIT FORUM</Link>
                        </Button>
                    </div>
                    <div>
                        <Image
                            src="https://placehold.co/600x450.png"
                            width={600}
                            height={450}
                            alt="Forum interface screenshot"
                            className="rounded-lg shadow-xl border"
                            data-ai-hint="forum ui"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
