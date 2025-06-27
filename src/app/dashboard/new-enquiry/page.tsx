"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

export default function NewEnquiryPage() {
    const [searchType, setSearchType] = useState("id_number");

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold font-headline">New Enquiry</h1>
            <p className="text-muted-foreground">Perform credit checks and trace consumers.</p>

            <Tabs defaultValue="consumer" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="consumer">Consumer Credit Check</TabsTrigger>
                    <TabsTrigger value="business">Business Credit Check</TabsTrigger>
                    <TabsTrigger value="trace">Trace Consumer</TabsTrigger>
                </TabsList>
                <TabsContent value="consumer" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Consumer Credit Check</CardTitle>
                            <CardDescription>Enter the consumer's details to perform a credit check. You must have their consent.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid sm:grid-cols-3 gap-4">
                                <div className="space-y-2 sm:col-span-1">
                                    <Label htmlFor="search-type">Search By</Label>
                                    <Select value={searchType} onValueChange={setSearchType}>
                                        <SelectTrigger id="search-type">
                                            <SelectValue placeholder="Select search type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="id_number">ID Number</SelectItem>
                                            <SelectItem value="passport">Passport &amp; Surname</SelectItem>
                                            <SelectItem value="name">Name &amp; DOB</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2 sm:col-span-2">
                                    {searchType === 'id_number' && (
                                        <>
                                            <Label htmlFor="id-number">ID Number</Label>
                                            <Input id="id-number" placeholder="Enter national ID number" />
                                        </>
                                    )}
                                    {searchType === 'passport' && (
                                        <div className="grid grid-cols-2 gap-4">
                                             <div className="space-y-2">
                                                <Label htmlFor="passport-number">Passport Number</Label>
                                                <Input id="passport-number" placeholder="Enter passport number" />
                                            </div>
                                             <div className="space-y-2">
                                                <Label htmlFor="surname">Surname</Label>
                                                <Input id="surname" placeholder="Enter surname" />
                                            </div>
                                        </div>
                                    )}
                                     {searchType === 'name' && (
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">First Name</Label>
                                                <Input id="name" placeholder="Enter first name" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="dob">Date of Birth</Label>
                                                <Input id="dob" type="date" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="reference">Your Reference (Optional)</Label>
                                <Input id="reference" placeholder="e.g., Property Address" />
                            </div>
                            <Button><Search className="mr-2" /> Search</Button>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="business" className="mt-6">
                     <Card>
                        <CardHeader>
                            <CardTitle>Business Credit Check</CardTitle>
                            <CardDescription>Enter the business details to perform a credit check.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                             <div className="space-y-2">
                                <Label htmlFor="business-name">Business Name</Label>
                                <Input id="business-name" placeholder="Enter business name" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="reg-number">Registration Number</Label>
                                <Input id="reg-number" placeholder="Enter registration number" />
                            </div>
                            <Button><Search className="mr-2" /> Search</Button>
                        </CardContent>
                    </Card>
                </TabsContent>
                 <TabsContent value="trace" className="mt-6">
                     <Card>
                        <CardHeader>
                            <CardTitle>Trace Consumer</CardTitle>
                            <CardDescription>Locate previous tenants or debtors.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                             <div className="space-y-2">
                                <Label htmlFor="trace-id">ID or Passport Number</Label>
                                <Input id="trace-id" placeholder="Enter ID or Passport Number" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="trace-name">Last Known Full Name</Label>
                                <Input id="trace-name" placeholder="Enter full name" />
                            </div>
                            <Button><Search className="mr-2" /> Search</Button>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
