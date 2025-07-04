
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar, KeyRound, ListFilter, Star, Search, Wrench } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function MaintenancePage() {
    return (
        <div className="flex flex-col h-full bg-background">
            <header className="flex items-center justify-between pb-4 border-b mb-6 gap-4 flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
                    <Button variant="outline" className="font-normal">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" /> All Time
                    </Button>
                    <Button variant="outline" className="font-normal">
                        <KeyRound className="mr-2 h-4 w-4 text-muted-foreground" /> Rentals
                    </Button>
                    <Button variant="outline" className="font-normal">
                        <ListFilter className="mr-2 h-4 w-4 text-muted-foreground" /> All Status
                    </Button>
                    <Button variant="outline" className="font-normal">
                        <Star className="mr-2 h-4 w-4 text-muted-foreground" /> Starred
                    </Button>
                     <div className="relative flex-grow max-w-xs ml-2">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search" className="pl-9" />
                    </div>
                </div>
                <Button>
                    CREATE REQUEST
                </Button>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center text-center space-y-8 p-4">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-56 h-56 bg-cyan-200 rounded-full blur-3xl opacity-80"></div>
                    </div>
                    <Card className="relative w-full max-w-sm shadow-lg overflow-hidden border">
                        <CardHeader className="flex flex-row items-center gap-3 p-4">
                           <div className="p-2 bg-card rounded-full border">
                             <Wrench className="h-5 w-5 text-destructive" />
                           </div>
                           <div className="flex-grow text-left">
                                <p className="text-xs font-bold uppercase text-destructive tracking-wider">OPEN</p>
                                <CardTitle className="text-base font-bold">Leaky Faucet</CardTitle>
                                <p className="text-xs text-muted-foreground">12 Main St. Denver, CO 80230</p>
                           </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 space-y-3">
                             <div className="bg-muted/50 p-3 rounded-lg border">
                                <h4 className="text-xs font-semibold text-left text-muted-foreground mb-1">Description:</h4>
                                <p className="text-sm text-left text-foreground">
                                    The sink in the kitchen is dripping. Not a lot of water is coming out but just a slow drip. Maybe once every 30 seconds.
                                </p>
                            </div>
                            <div className="border-t pt-3">
                                <h4 className="text-xs font-semibold text-left text-muted-foreground mb-2">REQUESTED BY</h4>
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-9 w-9">
                                        <AvatarFallback className="bg-pink-100 text-pink-800 font-semibold">SM</AvatarFallback>
                                    </Avatar>
                                    <span className="text-sm font-medium">Sarah Martinez</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                
                <div className="max-w-lg">
                    <h2 className="text-2xl font-bold font-headline">Keep Track of Maintenance Issues</h2>
                    <p className="text-muted-foreground mt-2">
                        Whether it is knowing when you last replaced the microwave or inputting a request a tenant told you about in person, have a clear history of maintenance issues at your rental.
                    </p>
                    <Button size="lg" className="mt-6">
                        CREATE REQUEST
                    </Button>
                </div>
            </main>
        </div>
    );
}
