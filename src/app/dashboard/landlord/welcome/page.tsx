"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useUser } from "@/context/user-context";
import { Building2, FileText, Users, Settings, Activity } from "lucide-react";

export default function WelcomePage() {
    const { userName } = useUser();

    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold font-headline">Welcome, {userName}!</h1>
                <p className="text-muted-foreground">This is your starting point for managing your rental portfolio on Zim TPN.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Getting Started</CardTitle>
                    <CardDescription>Here are some quick links to help you get started.</CardDescription>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                     <Button asChild variant="outline" className="h-auto p-4 flex flex-col gap-2 items-start text-left justify-start whitespace-normal">
                        <Link href="/dashboard/landlord/rentbook">
                            <Activity className="h-6 w-6 text-primary" />
                            <span className="font-semibold">Rentbook Dashboard</span>
                            <span className="text-xs text-muted-foreground">View your financial overview.</span>
                        </Link>
                    </Button>
                     <Button asChild variant="outline" className="h-auto p-4 flex flex-col gap-2 items-start text-left justify-start whitespace-normal">
                        <Link href="/dashboard/landlord/properties">
                            <Building2 className="h-6 w-6 text-primary" />
                            <span className="font-semibold">Manage Properties</span>
                            <span className="text-xs text-muted-foreground">Add, view, and edit your rental properties.</span>
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-auto p-4 flex flex-col gap-2 items-start text-left justify-start whitespace-normal">
                        <Link href="/dashboard/landlord/tenants">
                            <Users className="h-6 w-6 text-primary" />
                            <span className="font-semibold">Manage Tenants</span>
                            <span className="text-xs text-muted-foreground">Keep track of your tenants and applicants.</span>
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-auto p-4 flex flex-col gap-2 items-start text-left justify-start whitespace-normal">
                         <Link href="/dashboard/landlord/leases">
                            <FileText className="h-6 w-6 text-primary" />
                            <span className="font-semibold">Manage Leases</span>
                            <span className="text-xs text-muted-foreground">Create and manage your lease agreements.</span>
                         </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-auto p-4 flex flex-col gap-2 items-start text-left justify-start whitespace-normal">
                        <Link href="/dashboard/landlord/settings">
                            <Settings className="h-6 w-6 text-primary" />
                            <span className="font-semibold">Configure Settings</span>
                            <span className="text-xs text-muted-foreground">Set up your account and preferences.</span>
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
