
"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Plus } from "lucide-react";
import { TenantPortalGraphic } from "@/components/tenant-portal-graphic";

export default function TenantsPage() {
    const basePath = "/dashboard/professional";

    return (
        <div className="space-y-6">
            <header className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
                <Tabs defaultValue="tenants" className="w-auto">
                    <TabsList className="bg-transparent p-0">
                        <TabsTrigger value="leads" className="bg-transparent text-base font-semibold text-muted-foreground p-0 h-auto" asChild>
                           <Link href={`${basePath}/leads`}>LEADS (0)</Link>
                        </TabsTrigger>
                        <span className="mx-2 text-muted-foreground">&gt;</span>
                        <TabsTrigger value="applicants" className="bg-transparent text-base font-semibold text-muted-foreground p-0 h-auto" asChild>
                            <Link href={`${basePath}/applicants`}>APPLICANTS (0)</Link>
                        </TabsTrigger>
                         <span className="mx-2 text-muted-foreground">&gt;</span>
                        <TabsTrigger value="tenants" className="bg-transparent text-base font-semibold data-[state=active]:text-primary p-0 h-auto">TENANTS (0)</TabsTrigger>
                    </TabsList>
                </Tabs>
                <div className="flex items-center gap-2">
                    <Button variant="outline">SCREEN A TENANT</Button>
                    <Button>INVITE TO APPLY</Button>
                </div>
            </header>

            <div className="flex items-center justify-between flex-wrap gap-4">
                <h1 className="text-2xl font-bold font-headline">Active Tenants (0)</h1>
                <div className="flex items-center gap-2 flex-wrap">
                    <Tabs defaultValue="active" className="w-auto">
                        <TabsList className="h-9">
                            <TabsTrigger value="active">Active</TabsTrigger>
                            <TabsTrigger value="past">Past</TabsTrigger>
                            <TabsTrigger value="archived">Archived</TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <Button variant="outline" className="h-9">
                        <Plus className="mr-2 h-4 w-4" />
                        Add New
                    </Button>
                </div>
            </div>

            <div className="text-center space-y-4 py-12 bg-muted/30 rounded-lg">
                <h2 className="text-2xl font-bold font-headline">Set Up Their Tenant Portal</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    Add your renters to TurboTenant so they have a one-stop-shop to pay you rent online, sign your important documents, and even request maintenance. <Link href="#" className="text-primary hover:underline">Learn more about the Tenant Portal.</Link>
                </p>
                
                <TenantPortalGraphic />
            </div>
        </div>
    );
}
