
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Star } from "lucide-react";

export default function LeasesPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold font-headline">Leases</h1>
                <Button variant="outline">ADD NEW LEASE</Button>
            </div>
            
            <Card className="bg-cyan-50 border-cyan-200 dark:bg-cyan-950/50 dark:border-cyan-800">
                <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
                    <div className="relative">
                        <div className="p-3 bg-white rounded-full border-4 border-cyan-100 dark:bg-cyan-900 dark:border-cyan-700">
                           <FileText className="h-8 w-8 text-cyan-700 dark:text-cyan-300" />
                        </div>
                         <div className="absolute -top-1 -right-1 bg-primary p-1 rounded-full text-primary-foreground">
                            <Star className="h-3 w-3" />
                         </div>
                    </div>
                    <div className="flex-grow text-center md:text-left">
                        <h3 className="text-lg font-semibold">Build Your Own State-Specific Lease Agreements</h3>
                        <p className="text-sm text-muted-foreground">Our lease agreements were drafted by legal professionals to keep you compliant and covered.</p>
                    </div>
                    <Button>GET A LEASE AGREEMENT</Button>
                </CardContent>
            </Card>
            
            <Tabs defaultValue="active">
                <TabsList>
                    <TabsTrigger value="active">Active</TabsTrigger>
                    <TabsTrigger value="past">Past</TabsTrigger>
                </TabsList>
                <TabsContent value="active" className="mt-4">
                    <Card>
                        <CardContent className="p-4 grid md:grid-cols-3 items-center gap-4">
                            <div className="md:col-span-2">
                                <p className="text-xs font-semibold text-muted-foreground uppercase">DRAFT LEASE</p>
                                <p className="font-bold text-lg">117 thurston avenue - June 2025</p>
                                <p className="text-sm text-muted-foreground">117 thurston avenue</p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-muted-foreground uppercase">LEASE TERM</p>
                                <p className="text-sm text-muted-foreground">No lease term added yet</p>
                            </div>
                        </CardContent>
                         <CardFooter className="bg-muted/50 p-4 flex justify-between items-center">
                            <Button variant="link" className="text-destructive p-0 h-auto hover:no-underline">DELETE DRAFT LEASE</Button>
                            <Button variant="link" className="p-0 h-auto hover:no-underline">FINISH LEASE SETUP</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="past" className="mt-4">
                   <Card className="flex items-center justify-center h-32">
                        <p className="text-muted-foreground">No past leases found.</p>
                   </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}

