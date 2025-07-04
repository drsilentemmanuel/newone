
"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";

export const TenantPortalGraphic = () => (
    <div className="mt-8 px-4 flex justify-center">
        <div className="relative max-w-xl w-full">
            <Card className="w-full text-left shadow-lg border-2">
                <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-2 pb-2 border-b bg-muted/50 p-3">
                    <div>
                        <p className="text-xs text-muted-foreground">DASHBOARD</p>
                        <p className="font-semibold text-sm">1234 Broadway St. #102</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <p className="text-xs text-muted-foreground">UNPAID CHARGES</p>
                            <div className="h-2 w-16 bg-gray-300 dark:bg-gray-600 rounded-full mt-1"></div>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-muted-foreground">PAST DUE</p>
                            <div className="h-2 w-16 bg-red-300 dark:bg-red-800 rounded-full mt-1"></div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-4">
                    <Tabs defaultValue="todo" className="w-full">
                        <TabsList className="grid w-full grid-cols-5 bg-transparent p-0 border-b rounded-none mb-4 text-xs h-auto -mx-1">
                            {['TO-DO', 'PAYMENTS', 'DOCUMENTS', 'MAINTENANCE (1)', 'INSURANCE'].map(tab => (
                                <TabsTrigger key={tab} value={tab.toLowerCase().split(' ')[0]} className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent p-1 h-auto text-muted-foreground text-[10px] sm:text-xs">
                                    {tab}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        <TabsContent value="todo" className="mt-0">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <Card className="p-3 bg-white dark:bg-card">
                                        <p className="font-semibold text-sm">Unpaid Charges</p>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
                                            <div className="h-5 w-14 bg-blue-400 rounded-full"></div>
                                        </div>
                                    </Card>
                                    <Card className="p-3 bg-white dark:bg-card">
                                        <p className="font-semibold text-sm">Signature Requested</p>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="h-3 w-28 bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
                                            <div className="h-5 w-14 bg-blue-400 rounded-full"></div>
                                        </div>
                                    </Card>
                                </div>
                                <div className="space-y-2">
                                    {['Make a Payment', 'Request Maintenance', 'Message Landlord'].map(action => (
                                        <Card key={action} className="p-2 bg-white dark:bg-card hover:bg-muted/50 cursor-pointer transition-colors">
                                            <div className="flex items-center justify-between text-sm">
                                                <span>{action}</span>
                                                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    </div>
);
