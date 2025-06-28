
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, Users, Settings, FileText, CreditCard, Percent, Plus, Search, CheckCircle, AlertTriangle, X, Minus, Ban } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useUser } from "@/context/user-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Slider } from "@/components/ui/slider";


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
            <Tabs defaultValue="tpn-account" className="w-full">
                <div className="p-4 border-b">
                    <TabsList className="bg-transparent p-0">
                        <TabsTrigger value="info" className="bg-transparent data-[state=active]:bg-muted rounded-md mr-2">
                            <Info className="mr-2 h-4 w-4" /> Info
                        </TabsTrigger>
                        <TabsTrigger value="users" className="bg-transparent data-[state=active]:bg-muted rounded-md mr-2">
                            <Users className="mr-2 h-4 w-4" /> Users
                        </TabsTrigger>
                        <TabsTrigger value="general" className="bg-transparent data-[state=active]:bg-muted rounded-md mr-2">
                            <Settings className="mr-2 h-4 w-4" /> General
                        </TabsTrigger>
                        <TabsTrigger value="invoice" className="bg-transparent data-[state=active]:bg-muted rounded-md mr-2">
                            <FileText className="mr-2 h-4 w-4" /> Invoice
                        </TabsTrigger>
                        <TabsTrigger value="rpp" className="bg-transparent data-[state=active]:bg-muted rounded-md mr-2">
                            <CreditCard className="mr-2 h-4 w-4" /> RPP
                        </TabsTrigger>
                        <TabsTrigger value="tpn-account" className="bg-transparent data-[state=active]:bg-muted rounded-md">
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
                        <div className="border-b p-4">
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

                <TabsContent value="general" className="mt-0">
                    <CardContent className="p-6 space-y-8">
                        <Alert className="bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950 dark:border-amber-800 dark:text-amber-200">
                            <AlertTriangle className="h-4 w-4 !text-amber-800 dark:!text-amber-200" />
                            <AlertDescription>
                                The dashboard screen makes use of an invoice due graphic and quick access to invoices in various states. This indicates which tenants have not yet been sent an invoice even though the account is due shortly as well as provide access to the invoices. You can edit the below parameters to change when tenants will be displayed in this list.
                            </AlertDescription>
                        </Alert>
                        
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-foreground pb-2 mb-4 border-b border-primary">Invoice due parameters</h3>
                                <div className="pl-6 border-l-2 border-border space-y-6">
                                    <div className="flex items-start space-x-3 pt-2">
                                        <Checkbox id="display-invoices-due" defaultChecked />
                                        <div className="grid gap-1.5 leading-none">
                                            <Label htmlFor="display-invoices-due" className="font-normal text-muted-foreground">Display invoices not yet sent within X days of the payment due date on the invoices due dashboard.</Label>
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-lg">
                                        <div className="space-y-1">
                                            <Label htmlFor="monthly-leases-due">For monthly leases</Label>
                                            <Select defaultValue="10">
                                                <SelectTrigger id="monthly-leases-due">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="10">10 days (default)</SelectItem>
                                                    <SelectItem value="5">5 days</SelectItem>
                                                    <SelectItem value="15">15 days</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="weekly-leases-due">For weekly leases</Label>
                                            <Select defaultValue="3">
                                                <SelectTrigger id="weekly-leases-due">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="3">3 days (default)</SelectItem>
                                                    <SelectItem value="1">1 day</SelectItem>
                                                    <SelectItem value="5">5 days</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button variant="outline">Cancel</Button>
                                <Button>Save</Button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-foreground pb-2 mb-4 border-b border-primary">Invoice period parameters</h3>
                                <div className="pl-6 border-l-2 border-border space-y-6">
                                    <div className="flex items-start space-x-3 pt-2">
                                        <Checkbox id="display-invoice-states" defaultChecked />
                                        <div className="grid gap-1.5 leading-none">
                                            <Label htmlFor="display-invoice-states" className="font-normal text-muted-foreground">Display invoices states within the current invoice due period on the dashboard.</Label>
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-lg">
                                        <div className="space-y-1">
                                            <Label htmlFor="start-period">Start period</Label>
                                            <Select defaultValue="10">
                                                <SelectTrigger id="start-period">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="10">10th</SelectItem>
                                                    <SelectItem value="1">1st</SelectItem>
                                                    <SelectItem value="15">15th</SelectItem>
                                                    <SelectItem value="25">25th</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="end-period">End period</Label>
                                            <Select defaultValue="7">
                                                <SelectTrigger id="end-period">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="7">7th</SelectItem>
                                                    <SelectItem value="1">1st</SelectItem>
                                                    <SelectItem value="15">15th</SelectItem>
                                                    <SelectItem value="25">25th</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button variant="outline">Cancel</Button>
                                <Button>Save</Button>
                            </div>
                        </div>
                    </CardContent>
                </TabsContent>

                <TabsContent value="invoice" className="mt-0">
                    <CardContent className="p-6 space-y-8">
                        <div className="space-y-4">
                            <Alert className="bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950 dark:border-amber-800 dark:text-amber-200 relative">
                                <AlertTriangle className="h-4 w-4 !text-amber-800 dark:!text-amber-200" />
                                <AlertDescription>
                                This section allows you to change the background colours that will be used on your reports generated by the Rentbook system.
                                </AlertDescription>
                                <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-6 w-6"><X className="h-4 w-4"/></Button>
                            </Alert>
                            <Card className="border shadow-none">
                                <CardHeader className="border-b">
                                <CardTitle className="text-base font-semibold">Report colours</CardTitle>
                                </CardHeader>
                                <CardContent className="p-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                                        <div>
                                            <Label htmlFor="primary-colour">Primary Colour</Label>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Input type="color" id="primary-colour" defaultValue="#5db2ff" className="p-1 h-10 w-12"/>
                                                <Input defaultValue="#5db2ff" />
                                            </div>
                                        </div>
                                        <div>
                                            <Label htmlFor="secondary-colour">Secondary Colour</Label>
                                             <div className="flex items-center gap-2 mt-1">
                                                <Input type="color" id="secondary-colour" defaultValue="#404040" className="p-1 h-10 w-12"/>
                                                <Input defaultValue="#404040" />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="justify-end gap-2 border-t p-4">
                                <Button variant="outline">Reset defaults</Button>
                                <Button>Save colours</Button>
                                </CardFooter>
                            </Card>
                        </div>

                        <div className="space-y-4">
                            <Alert className="bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950 dark:border-amber-800 dark:text-amber-200 relative">
                                <AlertTriangle className="h-4 w-4 !text-amber-800 dark:!text-amber-200" />
                                <AlertDescription>
                                This section allows you to change the logo that will appear on the top of all reports generated from the RentBook system. Images that are uploaded are resized to best fit the dimensions: 790x100
                                </AlertDescription>
                                <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-6 w-6"><X className="h-4 w-4"/></Button>
                            </Alert>
                            
                            <Card className="border shadow-none">
                                <CardHeader className="border-b">
                                <CardTitle className="text-base font-semibold">Current logo</CardTitle>
                                </CardHeader>
                                <CardContent className="p-4 space-y-2">
                                    <p className="text-sm text-muted-foreground">The logo below will be displayed on the top of all reports</p>
                                    <div className="border-2 border-dashed rounded-md p-4 flex justify-center items-center bg-muted/50">
                                        <Image src="https://placehold.co/790x100.png" alt="TPN RentBook Logo" width={790} height={100} data-ai-hint="company logo" />
                                    </div>
                                </CardContent>
                            </Card>

                             <Card className="border shadow-none">
                                <CardHeader className="border-b">
                                    <CardTitle className="text-base font-semibold">Change your logo</CardTitle>
                                </CardHeader>
                                <CardContent className="p-4">
                                    <div className="grid gap-2 max-w-md">
                                        <Label htmlFor="logo-upload">FileName</Label>
                                        <Input id="logo-upload" type="file" />
                                        <p className="text-xs text-muted-foreground">Only jpg, gif and png images are supported.</p>
                                    </div>
                                </CardContent>
                                <CardFooter className="justify-end gap-2 border-t p-4">
                                <Button variant="outline">Cancel</Button>
                                <Button variant="outline">Reset default</Button>
                                <Button>Upload File</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </CardContent>
                </TabsContent>
                <TabsContent value="rpp" className="mt-0">
                    <CardContent className="p-6 space-y-6">
                        <Alert className="bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950 dark:border-amber-800 dark:text-amber-200">
                            <AlertTriangle className="h-4 w-4 !text-amber-800 dark:!text-amber-200" />
                            <AlertDescription>
                                Rental payment information is exported from the TPN Rentbook database to the TPN Credit Bureau database for TPN members in order to reduce the amount of capturing required between the systems. The following parameters can be set in order to customize how you would like the payment information to display.
                            </AlertDescription>
                        </Alert>

                        <Card className="border shadow-none">
                            <CardHeader className="flex flex-row items-center justify-between border-b border-primary/20 pb-4">
                                <CardTitle className="text-base font-semibold text-primary">Rental payment profile parameters</CardTitle>
                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                    <X className="h-4 w-4" />
                                </Button>
                            </CardHeader>
                            <CardContent className="p-6 space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-2">
                                    <Label className="pt-2 font-semibold">Grace Amount</Label>
                                    <div className="md:col-span-2 space-y-2">
                                        <div className="flex items-center gap-2">
                                            <div className="relative">
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 font-semibold text-muted-foreground">R</span>
                                                <Input type="number" defaultValue={0} className="w-48 pl-8 pr-4 text-right" />
                                            </div>
                                            <Button variant="outline" size="icon" className="h-10 w-10 shrink-0"><Minus className="h-4 w-4" /></Button>
                                            <Button variant="outline" size="icon" className="h-10 w-10 shrink-0"><Plus className="h-4 w-4" /></Button>
                                        </div>
                                        <p className="text-xs text-muted-foreground max-w-md">
                                            Hint: Amount of money which can be outstanding by the tenant at the end of the period and the credit profile will still be updated as paid in full.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-2">
                                    <Label className="pt-2 font-semibold">Grace Days</Label>
                                    <div className="md:col-span-2 space-y-2">
                                        <div className="flex items-center gap-4">
                                           <Input type="number" defaultValue={4} className="w-16 text-center" readOnly />
                                           <Input type="number" defaultValue={7} className="w-16 text-center" readOnly />
                                        </div>
                                        <div className="relative pt-2">
                                            <Slider
                                                defaultValue={[4, 7]}
                                                max={21}
                                                step={1}
                                                className="my-2"
                                            />
                                            <div className="flex justify-between text-xs text-muted-foreground mt-2">
                                                <span>0</span>
                                                <span>3</span>
                                                <span>6</span>
                                                <span>9</span>
                                                <span>12</span>
                                                <span>15</span>
                                                <span>18</span>
                                                <span>21</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-muted-foreground max-w-md">
                                            Hint: Date range where payment will reflect as paid within the grace period. eg: Payments made on or before the 3rd will reflect as paid on time, payments between the 3rd and 7th as grace period payments, and payments in full after the 7th will reflect as paid late.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="justify-end gap-2 border-t p-4">
                                <Button>Save RPP Settings</Button>
                                <Button variant="outline">Cancel</Button>
                            </CardFooter>
                        </Card>
                    </CardContent>
                </TabsContent>
                <TabsContent value="tpn-account" className="mt-0">
                    <CardContent className="p-6 space-y-6">
                        <Alert className="bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950 dark:border-amber-800 dark:text-amber-200">
                            <Info className="h-4 w-4 !text-amber-800 dark:!text-amber-200" />
                            <AlertDescription>
                                If you are a member of TPN credit bureau, you can enter your TPN account details here so that they are automatically stored and applied when you perform a credit check or any other functions which integrate into the bureau.
                            </AlertDescription>
                        </Alert>
                        <Alert className="bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950 dark:border-amber-800 dark:text-amber-200">
                            <Info className="h-4 w-4 !text-amber-800 dark:!text-amber-200" />
                            <AlertDescription>
                                If not, please <a href="#" className="underline font-semibold">register</a> for your free TPN credit bureau account in order to perform credit checks and receive free tenant monitoring.
                            </AlertDescription>
                        </Alert>
                        <Alert variant="destructive">
                            <AlertTriangle className="h-4 w-4" />
                            <AlertTitle>TPN account link error: [32237] The user [sdzikit01] or company [31521] specified is not active</AlertTitle>
                        </Alert>
                        
                        <Card className="border shadow-none">
                            <CardHeader className="flex flex-row items-center justify-between border-b border-primary/20 pb-4">
                                <CardTitle className="text-base font-semibold text-primary">TPN account login details</CardTitle>
                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                    <X className="h-4 w-4" />
                                </Button>
                            </CardHeader>
                            <CardContent className="p-6 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                                    <Label htmlFor="login-code" className="text-right">Login code</Label>
                                    <div className="md:col-span-2">
                                        <Input id="login-code" defaultValue="sdzikit01" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                                    <Label htmlFor="password-tpn" className="text-right">Password</Label>
                                    <div className="md:col-span-2">
                                        <Input id="password-tpn" type="password" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
                                    <Label htmlFor="confirm-password-tpn" className="text-right">Confirm password</Label>
                                    <div className="md:col-span-2">
                                        <Input id="confirm-password-tpn" type="password" />
                                    </div>
                                </div>
                            </CardContent>
                             <CardFooter className="justify-end gap-2 border-t p-4">
                                <Button>Save</Button>
                                <Button variant="outline">Test</Button>
                                <Button variant="outline">Cancel</Button>
                            </CardFooter>
                        </Card>
                    </CardContent>
                </TabsContent>
            </Tabs>
        </Card>
    </div>
  );
}
