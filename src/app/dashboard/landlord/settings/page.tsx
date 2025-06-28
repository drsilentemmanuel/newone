
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, Users, Settings, FileText, CreditCard, Percent, Plus, Search, CheckCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useUser } from "@/context/user-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";


export default function LandlordSettingsPage() {
    const { role } = useUser();

  return (
    <div className="space-y-6">
        <h1 className="text-xl text-muted-foreground">
            <Link href="/dashboard/landlord" className="text-primary hover:underline">Dashboard</Link>
            <span className="mx-2 text-muted-foreground/50">&gt;</span>
            <span>Settings</span>
        </h1>

        <h2 className="text-2xl font-semibold">Rentbook settings</h2>

        <Card>
            <Tabs defaultValue="users" className="w-full">
                <div className="p-4 border-b">
                    <TabsList className="bg-transparent p-0">
                        <TabsTrigger value="info" className="bg-transparent data-[state=active]:bg-muted rounded-md mr-2">
                            <Info className="mr-2 h-4 w-4" /> Info
                        </TabsTrigger>
                        <TabsTrigger value="users" className="bg-transparent data-[state=active]:bg-muted rounded-md mr-2">
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

                <TabsContent value="users" className="mt-0">
                    <CardContent className="p-0">
                        <div className="border-b border-primary p-4">
                            <h3 className="text-lg font-semibold">Associated users</h3>
                        </div>
                        <div className="p-4 space-y-4">
                            <div className="flex items-center justify-between gap-4">
                                <Button variant="outline"><Plus className="mr-2 h-4 w-4" /> Add a new user</Button>
                                <div className="flex items-center gap-2">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input placeholder="Enter search text" className="pl-9" />
                                    </div>
                                    <Select defaultValue="25">
                                        <SelectTrigger className="w-[80px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="25">25</SelectItem>
                                            <SelectItem value="50">50</SelectItem>
                                            <SelectItem value="100">100</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="border rounded-md">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Email</TableHead>
                                            <TableHead>FirstName</TableHead>
                                            <TableHead>LastName</TableHead>
                                            <TableHead className="w-12"></TableHead>
                                            <TableHead className="w-20"></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">dzikitisilent@gmail.com</TableCell>
                                            <TableCell>Silent</TableCell>
                                            <TableCell>Dzikiti</TableCell>
                                            <TableCell>
                                                <CheckCircle className="h-5 w-5 text-emerald-500" />
                                            </TableCell>
                                            <TableCell>
                                                <Button variant="link" className="p-0 h-auto text-primary">Edit</Button>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                        <div className="p-4 border-t flex justify-end text-sm text-muted-foreground">
                            1 items found.
                        </div>
                    </CardContent>
                </TabsContent>
            </Tabs>
        </Card>
    </div>
  );
}
