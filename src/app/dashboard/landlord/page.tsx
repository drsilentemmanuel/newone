
"use client";

import { useUser } from "@/context/user-context";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  Coins,
  ShoppingCart,
  PieChart,
  BookOpen,
  Newspaper,
  Info,
  Clapperboard,
  Landmark,
  Building2,
  FileText,
  Briefcase,
  Users,
  Settings,
  HelpCircle,
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


export default function LandlordDashboardPage() {
    const { userName } = useUser();

    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold font-headline">Welcome, {userName}!</h1>
                <p className="text-muted-foreground">Select an option below to get started.</p>
            </div>

             <div>
                <h2 className="text-2xl font-bold mb-4 font-headline text-primary">Key Services</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <ServiceCard icon={<Coins />} title="Credit Bureau" href="/dashboard/landlord/new-enquiry" />
                    <ServiceCard icon={<ShoppingCart />} title="Shop" href="/dashboard/landlord/shop" />
                    <ServiceCard icon={<PieChart />} title="Property Reports" href="/dashboard/landlord/reports" />
                    <ServiceCard icon={<BookOpen />} title="Rentbook" href="/dashboard/landlord/rentbook" />
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4 font-headline text-primary">Manage Your Portfolio</h2>
                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    <ServiceCard icon={<Landmark />} title="My Account" href="/dashboard/landlord/account" />
                    <ServiceCard icon={<Building2 />} title="Properties" href="/dashboard/landlord/properties" />
                    <ServiceCard icon={<FileText />} title="Leases" href="/dashboard/landlord/leases" />
                    <ServiceCard icon={<Briefcase />} title="Vendors" href="/dashboard/landlord/vendors" />
                    <ServiceCard icon={<Users />} title="Tenants" href="/dashboard/landlord/tenants" />
                    <ServiceCard icon={<Settings />} title="Settings" href="/dashboard/landlord/settings" />
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4 font-headline text-primary">Helpful Resources</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    <ServiceCard icon={<Newspaper />} title="Blog" href="/blog" />
                    <ServiceCard icon={<HelpCircle />} title="Help Topics" href="/dashboard/landlord/help" />
                    <ServiceCard icon={<Info />} title="Wiki/FAQ" />
                    <ServiceCard icon={<Clapperboard />} title="YouTube Channel" />
                </div>
            </div>
        </div>
    )
}
