
"use client";

import { useUser } from "@/context/user-context";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  Coins,
  UserCheck,
  Webhook,
  ShoppingCart,
  Feather,
  Code,
  PieChart,
  BookOpen,
  Mails,
  Newspaper,
  Info,
  Clapperboard,
} from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const ServiceCard = ({ icon, title, subtitle, href = "#", disabled = false }: { icon: React.ReactNode, title: string, subtitle?: string, href?: string, disabled?: boolean }) => (
    <Link href={disabled ? "#" : href} className={cn("h-full", disabled && "pointer-events-none")}>
        <Card className={cn("hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full", disabled && "opacity-60 bg-muted/50 cursor-not-allowed")}>
        <CardContent className="flex flex-col items-center justify-center p-4 gap-3 text-center h-full">
            <div className="bg-primary/10 p-3 rounded-full text-primary">
                {React.cloneElement(icon as React.ReactElement, { className: "h-7 w-7" })}
            </div>
            <div className="flex-grow flex flex-col justify-center">
                <p className="font-semibold text-primary text-sm">{title}</p>
                {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
            </div>
        </CardContent>
        </Card>
    </Link>
);


export default function WelcomePage() {
    const { userName } = useUser();

    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold font-headline">Welcome, {userName}!</h1>
                <p className="text-muted-foreground">Select an option below to get started.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                <ServiceCard icon={<Coins />} title="Credit Bureau" href="/dashboard/landlord/new-enquiry" />
                <ServiceCard icon={<UserCheck />} title="Tenant Risk Monitor" />
                <ServiceCard icon={<Webhook />} title="Dataweb" />
                <ServiceCard icon={<ShoppingCart />} title="Shop" />
                <ServiceCard icon={<Feather />} title="eSign" />
                <ServiceCard icon={<Code />} title="POPI-Portal" subtitle="No Access" disabled />
                <ServiceCard icon={<PieChart />} title="Property Reports" href="/dashboard/landlord/reports" />
                <ServiceCard icon={<BookOpen />} title="Rentbook" href="/dashboard/landlord" />
                <ServiceCard icon={<Mails />} title="SafeSend" />
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4 font-headline text-primary">Helpful resources</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    <ServiceCard icon={<Newspaper />} title="Blog" href="/blog" />
                    <ServiceCard icon={<Info />} title="Wiki/FAQ" />
                    <ServiceCard icon={<Clapperboard />} title="YouTube Channel" />
                </div>
            </div>
        </div>
    )
}
