
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, Users, Settings, FileText, CreditCard, Percent } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useUser } from "@/context/user-context";

export default function LandlordSettingsPage() {
    const { role } = useUser();

  return (
    <div className="space-y-6">
        <h1 className="text-xl text-muted-foreground">
            Dashboard / Settings
        </h1>

        <h2 className="text-2xl font-semibold">Rentbook settings</h2>

        <Card>
            <Tabs defaultValue="info" className="w-full">
                <div className="p-4 border-b">
                    <TabsList className="bg-transparent p-0">
                        <TabsTrigger value="info" className="bg-transparent data-[state=active]:bg-muted rounded-md mr-2">
                            <Info className="mr-2 h-4 w-4" /> Info
                        </TabsTrigger>
                        <TabsTrigger value="users" className="bg-transparent data-[state=active]:bg-muted rounded-md mr-2" disabled>
                            <Users className="mr-2 h-4 w-4" /> Users
                        </TabsTrigger>
                        <TabsTrigger value="general" className="bg-transparent data-[state=active]:bg-muted rounded-md mr-2" disabled>
                            <Settings className="mr-2 h-4 w-4" /> General
                        </TabsTrigger>
                        <TabsTrigger value="invoice" className="bg-transparent data-[state=active]:bg-muted rounded-md mr-2" disabled>
                            <FileText className="mr-2 h-4 w-4" /> Invoice
                        </TabsTrigger>
                        <TabsTrigger value="rpp" className="bg-transparent data-[state=active]:bg-muted rounded-md mr-2" disabled>
                            <CreditCard className="mr-2 h-4 w-4" /> RPP
                        </TabsTrigger>
                        <TabsTrigger value="tpn-account" className="bg-transparent data-[state=active]:bg-muted rounded-md" disabled>
                            <Percent className="mr-2 h-4 w-4" /> TPN Account
                        </TabsTrigger>
                    </TabsList>
                </div>
                
                <TabsContent value="info" className="mt-0">
                    <CardContent className="p-4 space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center border rounded-md">
                                <p className="px-3 py-2 text-sm font-medium text-muted-foreground w-32 bg-muted/50 rounded-l-md">Client No</p>
                                <p className="p-2 text-sm flex-1 border-l">17598</p>
                            </div>
                            <div className="flex items-center border rounded-md">
                                <p className="px-3 py-2 text-sm font-medium text-muted-foreground w-32 bg-muted/50 rounded-l-md">Client Type</p>
                                <p className="p-2 text-sm flex-1 border-l">{role.charAt(0).toUpperCase() + role.slice(1)}</p>
                            </div>
                        </div>
                         <div className="flex items-center border rounded-md">
                            <p className="px-3 py-2 text-sm font-medium text-muted-foreground w-32 bg-muted/50 rounded-l-md">Login Code</p>
                            <p className="p-2 text-sm flex-1 border-l">dzikitisilent@gmail.com</p>
                        </div>
                         <div className="flex items-center border rounded-md">
                            <p className="px-3 py-2 text-sm font-medium text-muted-foreground w-32 bg-muted/50 rounded-l-md">Active Logins</p>
                            <div className="flex-1 border-l">
                                <Select defaultValue="google">
                                    <SelectTrigger className="border-0 focus:ring-0 focus:ring-offset-0 w-full rounded-l-none">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="google">Google</SelectItem>
                                        <SelectItem value="email">Email</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                </TabsContent>
            </Tabs>
        </Card>
    </div>
  );
}

