
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  CalendarDays,
  Cigarette,
  Dog,
  Home,
  Landmark,
  PiggyBank,
  PlayCircle,
  ShieldX,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ApplicantsPage() {
    const basePath = "/dashboard/landlord";

    return (
        <div className="space-y-6">
            <header className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
                 <Tabs defaultValue="applicants" className="w-auto">
                    <TabsList className="bg-transparent p-0">
                        <TabsTrigger value="leads" className="bg-transparent text-base font-semibold text-muted-foreground p-0 h-auto" asChild>
                           <Link href={`${basePath}/leads`}>LEADS (0)</Link>
                        </TabsTrigger>
                        <span className="mx-2 text-muted-foreground">&gt;</span>
                        <TabsTrigger value="applicants" className="bg-transparent text-base font-semibold data-[state=active]:text-primary p-0 h-auto">APPLICANTS (0)</TabsTrigger>
                         <span className="mx-2 text-muted-foreground">&gt;</span>
                        <TabsTrigger value="tenants" className="bg-transparent text-base font-semibold text-muted-foreground p-0 h-auto" asChild>
                            <Link href={`${basePath}/tenants`}>TENANTS (0)</Link>
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
                <div className="flex items-center gap-2">
                    <Button variant="outline">SCREEN A TENANT</Button>
                    <Button>INVITE TO APPLY</Button>
                </div>
            </header>

            <div className="text-center space-y-4 py-8">
                <h1 className="text-3xl font-bold font-headline">Collect Rental Applications. Free for Landlords</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Invite renters to complete our online, industry-standard application. We'll send you their responses and a screening report in one easy-to-read profile. <Link href="#" className="text-primary hover:underline">Demo the application from the renter's perspective.</Link>
                </p>
                <Button size="lg">INVITE TO APPLY</Button>
            </div>

            <Card className="max-w-4xl mx-auto shadow-2xl overflow-hidden border-2 border-gray-100">
                <CardContent className="p-8 grid md:grid-cols-2 gap-8">
                    {/* Left side of report */}
                    <div className="space-y-6">
                        <div className="text-center space-y-2">
                            <p className="text-6xl font-bold text-gray-800">624</p>
                            <Badge variant="outline" className="font-semibold bg-yellow-100 text-yellow-800 border-yellow-300">FAIR SCORE</Badge>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 relative">
                                <div className="bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                                <div className="absolute top-0 h-full" style={{ left: '62.4%' }}>
                                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-700 -translate-x-1/2 -bottom-2.5 absolute"></div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <InfoCard icon={<ShieldX className="text-red-600 h-7 w-7"/>} label="Criminal History" value="1" />
                            <InfoCard icon={<Home className="text-green-600 h-7 w-7"/>} label="Evictions" value="0" />
                            <InfoCard icon={<PiggyBank className="text-red-600 h-7 w-7"/>} label="Collections" value="1" />
                            <InfoCard icon={<Landmark className="text-red-600 h-7 w-7"/>} label="Public Records" value="1" />
                        </div>
                            <Card className="relative overflow-hidden bg-gray-50 border">
                            <CardHeader><p className="font-semibold text-muted-foreground px-2">Landlord Reference</p></CardHeader>
                            <CardContent className="px-4 pb-4">
                                <div className="h-16 bg-gray-200 rounded-md blur-sm"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <PlayCircle className="h-16 w-16 text-primary/70 fill-white" />
                                </div>
                            </CardContent>
                        </Card>
                            <Card className="bg-gray-50 border">
                            <CardHeader><p className="font-semibold text-muted-foreground px-2">Income & Employment</p></CardHeader>
                            <CardContent className="px-4 pb-4">
                                <p className="text-3xl font-bold">$3,900 <span className="text-base font-normal text-muted-foreground">/MONTH</span></p>
                            </CardContent>
                        </Card>
                    </div>
                    {/* Right side of report */}
                    <div className="space-y-4">
                        <CompatibilityCard icon={<CalendarDays className="text-muted-foreground h-7 w-7" />} label="DESIRED MOVE-IN" />
                        <CompatibilityCard icon={<Dog className="text-muted-foreground h-7 w-7" />} label="PETS" />
                        <CompatibilityCard icon={<Users className="text-muted-foreground h-7 w-7" />} label="TOTAL OCCUPANTS" />
                        <CompatibilityCard icon={<Cigarette className="text-muted-foreground h-7 w-7" />} label="SMOKING" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

const InfoCard = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string | number }) => (
    <Card className="p-4 flex flex-col items-center justify-center gap-2">
        <div className="h-8 w-8 flex items-center justify-center">{icon}</div>
        <p className="text-muted-foreground text-sm font-medium">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
    </Card>
)

const CompatibilityCard = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <Card className="p-4 bg-gray-50 border">
        <div className="flex items-center gap-4">
            <div className="w-8 h-8 flex items-center justify-center">{icon}</div>
            <div>
                <p className="text-xs font-bold text-muted-foreground tracking-wider">{label}</p>
                <div className="h-4 w-24 bg-gray-200 rounded-sm mt-1"></div>
            </div>
        </div>
    </Card>
)
