
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useUser } from "@/context/user-context";
import { Info, Landmark, Home, PenSquare, BarChart3, Settings, Pencil, Building2, Wallet, ShoppingCart, CheckCircle, ChevronDown, Banknote, X, AlertTriangle, Search, User, PlayCircle, Plus, Ruler } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


// Mock data based on the screenshot
const accountInfo = {
  reference: "ONR000001",
  state: "Active",
  mobile: "0840333667",
};

const propertyStats = {
  occupied: 0,
  vacant: 2,
  inactive: 0,
};

const incomeStats = {
  outstanding: "R 0.00",
  prepaidHeld: "R 0.00",
};

const expenseStats = {
  unpaidBills: "R 0.00",
  availableToPay: "R 0.00",
};

const financialsData = {
    unpaidRent: "R 0.00",
    unpaidBills: "R 0.00",
    inBank: "R 0.00",
    surplus: "R 0.00",
    netIncome: {
        apr: "R 0.00",
        may: "R 0.00",
        jun: "R 0.00",
        total: "R 0.00",
    },
    deposits: {
        held: "R 0.00",
        byLandlord: "R 0.00",
        outstanding: "R 0.00",
    }
}

const propertiesData = [
  {
    id: "PRO000001",
    name: "34A Bainslodge",
    type: "Apartment",
    size: "0.5",
    address: "34A 69 Bainslodge, Bainsvlei Bloemfontein Free State",
    state: "Vacant",
  },
  {
    id: "PRO000002",
    name: "Hawaii St",
    type: "Apartment",
    size: "3.0",
    address: "Hawaii St Germiston Ekurhuleni Gauteng",
    state: "Vacant",
  },
];


export default function AccountPage() {
  const { userName, userEmail } = useUser();
  const [financialsView, setFinancialsView] = useState('statement');


  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl text-muted-foreground font-headline">
          <span className="font-bold text-foreground text-2xl">{accountInfo.reference}</span> &gt; {userName}
        </h1>
      </div>

      <Tabs defaultValue="my-info">
        <TabsList className="border-b bg-transparent p-0 rounded-none">
          <TabsTrigger value="my-info" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent">
            <Info className="mr-2 h-4 w-4" /> My Info
          </TabsTrigger>
          <TabsTrigger value="financials" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent">
            <Landmark className="mr-2 h-4 w-4" /> Financials
          </TabsTrigger>
          <TabsTrigger value="properties" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent">
            <Home className="mr-2 h-4 w-4" /> Properties
          </TabsTrigger>
          <TabsTrigger value="notes" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent">
            <PenSquare className="mr-2 h-4 w-4" /> Notes
          </TabsTrigger>
          <TabsTrigger value="reports" disabled className="rounded-none bg-transparent">
            <BarChart3 className="mr-2 h-4 w-4" /> Reports
          </TabsTrigger>
        </TabsList>

        <TabsContent value="my-info" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <div className="flex items-baseline justify-between border-b py-2">
                  <p className="text-sm text-muted-foreground">Reference</p>
                  <p className="font-medium">{accountInfo.reference}</p>
                </div>
                <div className="flex items-baseline justify-between border-b py-2">
                  <p className="text-sm text-muted-foreground">State</p>
                  <p className="font-medium text-emerald-600">{accountInfo.state}</p>
                </div>
                <div className="flex items-baseline justify-between border-b py-2">
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-medium">{userName}</p>
                </div>
                <div className="flex items-baseline justify-between border-b py-2">
                  <p className="text-sm text-muted-foreground">Mobile</p>
                  <p className="font-medium">{accountInfo.mobile}</p>
                </div>
                <div className="flex items-baseline justify-between border-b py-2 md:col-span-2">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{userEmail}</p>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <Button variant="outline"><Settings className="mr-2 h-4 w-4" /> Settings</Button>
                <Button variant="outline"><Pencil className="mr-2 h-4 w-4" /> Edit my details</Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base font-medium">Properties</CardTitle>
                <Building2 className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <Separator />
              <CardContent className="pt-4">
                <p className="text-primary">{propertyStats.occupied} occupied, {propertyStats.vacant} vacant</p>
                <p className="text-sm text-muted-foreground">{propertyStats.inactive} inactive</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base font-medium">Income</CardTitle>
                <Wallet className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <Separator />
              <CardContent className="pt-4">
                <p className="text-primary">{incomeStats.outstanding} outstanding</p>
                <p className="text-sm text-muted-foreground">Prepaid rental held: {incomeStats.prepaidHeld}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-base font-medium">Expenses</CardTitle>
                <ShoppingCart className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <Separator />
              <CardContent className="pt-4">
                <p className="text-primary">{expenseStats.unpaidBills} unpaid bills</p>
                <p className="text-sm text-muted-foreground">Available to pay: {expenseStats.availableToPay}</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="financials" className="mt-6 space-y-6">
            <Card>
                <CardContent className="p-4 space-y-4">
                    <div className="flex items-center space-x-4 text-sm font-medium">
                        <Button variant="link" className={financialsView === 'statement' ? "text-primary p-0 h-auto" : "text-muted-foreground p-0 h-auto"} onClick={() => setFinancialsView('statement')}>Statement</Button>
                        <Separator orientation="vertical" className="h-4" />
                        <Button variant="link" className={financialsView === 'unpaidBills' ? "text-primary p-0 h-auto" : "text-muted-foreground p-0 h-auto"} onClick={() => setFinancialsView('unpaidBills')}>Unpaid Bills</Button>
                        <Separator orientation="vertical" className="h-4" />
                        <Button variant="link" className={financialsView === 'arrears' ? "text-primary p-0 h-auto" : "text-muted-foreground p-0 h-auto"} onClick={() => setFinancialsView('arrears')}>Arrears</Button>
                        <Separator orientation="vertical" className="h-4" />
                        <Button variant="link" className={financialsView === 'bankAccount' ? "text-primary p-0 h-auto" : "text-muted-foreground p-0 h-auto"} onClick={() => setFinancialsView('bankAccount')}>Bank Account</Button>
                        <Separator orientation="vertical" className="h-4" />
                        <Button variant="link" className={financialsView === 'depositsHeld' ? "text-primary p-0 h-auto" : "text-muted-foreground p-0 h-auto"} onClick={() => setFinancialsView('depositsHeld')}>Deposits Held</Button>
                        <Separator orientation="vertical" className="h-4" />
                        <Button variant="link" className={financialsView === 'bankImport' ? "text-primary p-0 h-auto" : "text-muted-foreground p-0 h-auto"} onClick={() => setFinancialsView('bankImport')}>Bank Import</Button>
                    </div>

                    {financialsView === 'statement' && (
                        <div className="space-y-4">
                             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <Card className="shadow-none border">
                                    <CardContent className="p-3">
                                        <p className="text-lg font-semibold">{financialsData.unpaidRent}</p>
                                        <p className="text-xs text-muted-foreground flex items-center gap-1"><Banknote className="w-3 h-3"/>UNPAID RENT</p>
                                    </CardContent>
                                </Card>
                                 <Card className="shadow-none border">
                                    <CardContent className="p-3">
                                        <p className="text-lg font-semibold">{financialsData.unpaidBills}</p>
                                        <p className="text-xs text-muted-foreground flex items-center gap-1"><Wallet className="w-3 h-3"/>UNPAID BILLS</p>
                                    </CardContent>
                                </Card>
                                 <Card className="shadow-none border">
                                    <CardContent className="p-3">
                                        <p className="text-lg font-semibold">{financialsData.inBank}</p>
                                        <p className="text-xs text-muted-foreground flex items-center gap-1"><Landmark className="w-3 h-3"/>IN BANK</p>
                                    </CardContent>
                                </Card>
                                 <Card className="shadow-none border">
                                    <CardContent className="p-3">
                                        <p className="text-lg font-semibold">{financialsData.surplus}</p>
                                        <p className="text-xs text-emerald-600 font-medium flex items-center gap-1"><CheckCircle className="w-3 h-3"/>SURPLUS</p>
                                    </CardContent>
                                </Card>
                            </div>
                             <div className="flex items-center justify-between">
                                <Select defaultValue="3m">
                                    <SelectTrigger className="w-[200px]">
                                        <SelectValue placeholder="Select period" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="3m">Three months to date</SelectItem>
                                        <SelectItem value="6m">Six months to date</SelectItem>
                                        <SelectItem value="12m">Twelve months to date</SelectItem>
                                    </SelectContent>
                                </Select>
                                <div className="flex items-center gap-2">
                                    <Button variant="outline">Capture bill</Button>
                                    <Button variant="outline">Pay bill</Button>
                                    <Button variant="outline">Reverse payment</Button>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="outline">Landlord transfer <ChevronDown className="ml-2 h-4 w-4" /></Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>Transfer to Landlord</DropdownMenuItem>
                                            <DropdownMenuItem>Transfer from Landlord</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                            <Card className="border shadow-none">
                                <CardHeader>
                                    <CardTitle className="text-base font-bold bg-muted p-2 rounded-sm">LANDLORD INCOME STATEMENT</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-[200px]"></TableHead>
                                                <TableHead className="text-right">Apr 2025</TableHead>
                                                <TableHead className="text-right">May 2025</TableHead>
                                                <TableHead className="text-right">Jun 2025</TableHead>
                                                <TableHead className="text-right font-bold">Total</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="font-medium">Net income</TableCell>
                                                <TableCell className="text-right">{financialsData.netIncome.apr}</TableCell>
                                                <TableCell className="text-right">{financialsData.netIncome.may}</TableCell>
                                                <TableCell className="text-right">{financialsData.netIncome.jun}</TableCell>
                                                <TableCell className="text-right font-bold">{financialsData.netIncome.total}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {financialsView === 'unpaidBills' && (
                        <Card className="border shadow-none">
                            <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
                                <CardTitle className="text-base font-semibold">Select the account to pay:</CardTitle>
                                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setFinancialsView('statement')}>
                                    <X className="h-4 w-4" />
                                    <span className="sr-only">Close</span>
                                </Button>
                            </CardHeader>
                            <CardContent className="p-4 space-y-4">
                                <Alert className="bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-950 dark:border-amber-800 dark:text-amber-200">
                                    <AlertTriangle className="h-4 w-4 !text-amber-800 dark:!text-amber-200" />
                                    <AlertDescription>
                                        There are no funds available to pay towards the below expenses. By making payments at this time you will be paying the expenses out of your cashflow and will have to recover the money spent at a later date.
                                    </AlertDescription>
                                </Alert>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Property</TableHead>
                                            <TableHead>Account</TableHead>
                                            <TableHead>Due to</TableHead>
                                            <TableHead>Days outstanding</TableHead>
                                            <TableHead className="text-right">Amount still due</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                                                No data found
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <div className="text-right font-semibold">
                                    Total expenses not yet paid: R 0.00
                                </div>
                            </CardContent>
                            <CardFooter className="justify-end p-4 border-t">
                                <Button variant="outline" onClick={() => setFinancialsView('statement')}>Cancel</Button>
                            </CardFooter>
                        </Card>
                    )}

                    {financialsView === 'arrears' && (
                        <Card className="border shadow-none">
                            <CardContent className="p-0">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Lease</TableHead>
                                            <TableHead>Last debit</TableHead>
                                            <TableHead>Last credit</TableHead>
                                            <TableHead className="text-right">Outstanding</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                                                No data found
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    )}

                    {financialsView === 'bankAccount' && (
                        <Card className="border shadow-none">
                            <CardContent className="p-4 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Button variant="outline">Pay owner</Button>
                                        <Button variant="outline">Owner contribution</Button>
                                    </div>
                                    <div className="flex items-center gap-2 w-full max-w-sm">
                                        <div className="relative flex-grow">
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
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Date</TableHead>
                                            <TableHead className="w-1/2">Description</TableHead>
                                            <TableHead>To / From</TableHead>
                                            <TableHead className="text-right">Debit</TableHead>
                                            <TableHead className="text-right">Credit</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                                                No data found
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    )}

                    {financialsView === 'depositsHeld' && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <Card className="shadow-none border">
                                    <CardContent className="p-3">
                                        <p className="text-lg font-semibold">{financialsData.deposits.held}</p>
                                        <p className="text-xs text-muted-foreground flex items-center gap-1"><Wallet className="w-3 h-3"/>DEPOSIT HELD</p>
                                    </CardContent>
                                </Card>
                                <Card className="shadow-none border">
                                    <CardContent className="p-3">
                                        <p className="text-lg font-semibold">{financialsData.deposits.byLandlord}</p>
                                        <p className="text-xs text-muted-foreground flex items-center gap-1"><User className="w-3 h-3"/>BY LANDLORD</p>
                                    </CardContent>
                                </Card>
                                <Card className="shadow-none border">
                                    <CardContent className="p-3">
                                        <p className="text-lg font-semibold">{financialsData.deposits.outstanding}</p>
                                        <p className="text-xs text-muted-foreground flex items-center gap-1"><AlertTriangle className="w-3 h-3"/>OUTSTANDING</p>
                                    </CardContent>
                                </Card>
                            </div>

                            <Card className="border shadow-none">
                                <CardContent className="p-4 space-y-4">
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-bold text-primary">Deposit Summary</h2>
                                        <Separator className="bg-primary h-px" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 w-full max-w-sm">
                                            <div className="relative flex-grow">
                                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                <Input placeholder="Enter search text" className="pl-9" />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Select defaultValue="all">
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="(All leases)" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="all">(All leases)</SelectItem>
                                                </SelectContent>
                                            </Select>
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
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Property/Tenant</TableHead>
                                                <TableHead>State</TableHead>
                                                <TableHead>Held</TableHead>
                                                <TableHead>Still Due</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                                                    No data found
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </div>
                    )}
                    
                    {financialsView === 'bankImport' && (
                      <Card className="border shadow-none">
                        <CardContent className="p-4 space-y-4">
                            <h2 className="text-xl font-bold">Bank Account</h2>
                            <Alert className="bg-cyan-50 border-cyan-200 text-cyan-800 dark:bg-cyan-950 dark:border-cyan-800 dark:text-cyan-200">
                                <Info className="h-4 w-4 !text-cyan-800 dark:!text-cyan-200" />
                                <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-6 w-6 text-cyan-800 dark:text-cyan-200 hover:bg-cyan-100 dark:hover:bg-cyan-800">
                                    <X className="h-4 w-4" />
                                </Button>
                                <AlertDescription>
                                    <p>
                                        <strong>Tips:</strong> Select the required bank account. if you only have one bank account it will be selected by default.
                                    </p>
                                    <p className="mt-2">
                                        It is recommended to upload a <strong>full</strong> day, week or month at a time to ensure you upload all bank transactions. Once you have processed and <strong>categorised</strong> a transaction you can mark it as reviewed which will remove it from your active work list the next time you refresh or upload transactions.
                                    </p>
                                    <div className="flex justify-end mt-2">
                                        <a href="#" className="flex items-center gap-2 text-sm font-semibold text-cyan-900 dark:text-cyan-100 hover:underline">
                                            Watch our training video
                                            <PlayCircle className="h-5 w-5" />
                                        </a>
                                    </div>
                                </AlertDescription>
                            </Alert>

                            <div className="flex items-center gap-4">
                                <div className="flex-grow space-y-1">
                                    <Label htmlFor="bank-account-select">Select bank account</Label>
                                    <Select defaultValue="fnb">
                                        <SelectTrigger id="bank-account-select">
                                            <SelectValue placeholder="Select bank account" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="fnb">FNB, 63058501222</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button variant="outline" className="self-end"><Plus className="mr-2 h-4 w-4"/> Import Transactions</Button>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="relative flex-grow max-w-sm">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input placeholder="Enter search text" className="pl-9" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <Select defaultValue="new">
                                        <SelectTrigger className="w-[120px]">
                                            <SelectValue placeholder="New" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="new">New</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Select defaultValue="25">
                                        <SelectTrigger className="w-[80px]">
                                            <SelectValue placeholder="25" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="25">25</SelectItem>
                                            <SelectItem value="50">50</SelectItem>
                                            <SelectItem value="100">100</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Statement Reference</TableHead>
                                        <TableHead>Amount</TableHead>
                                        <TableHead>Action</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Note</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                                            No data found
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                      </Card>
                    )}


                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="properties" className="mt-6">
            <Card>
                <CardContent className="p-4 space-y-4">
                    <div className="flex items-center justify-between gap-4">
                        <div className="relative flex-grow max-w-sm">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Enter search text" className="pl-9" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Select defaultValue="all">
                                <SelectTrigger className="w-auto sm:w-[180px]">
                                    <SelectValue placeholder="All Properties" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Properties</SelectItem>
                                    <SelectItem value="vacant">Vacant</SelectItem>
                                    <SelectItem value="occupied">Occupied</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select defaultValue="25">
                                <SelectTrigger className="w-[80px]">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="10">10</SelectItem>
                                    <SelectItem value="25">25</SelectItem>
                                    <SelectItem value="50">50</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="border rounded-md">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-2/3">Property</TableHead>
                                    <TableHead>State</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {propertiesData.map((property) => (
                                    <TableRow key={property.id}>
                                        <TableCell className="py-2">
                                          <div className="flex gap-4 items-start">
                                              <div className="w-[100px] flex-shrink-0 pt-1">
                                                  <Link href="#" className="text-primary font-medium hover:underline">{property.id}</Link>
                                              </div>
                                              <div className="flex-grow">
                                                  <div className="text-sm">{property.name} <span className="text-muted-foreground font-normal">[{property.type}, {property.size}<Ruler className="inline-block ml-1 h-3 w-3" />]</span></div>
                                                  <div className="text-xs text-muted-foreground">{property.address}</div>
                                              </div>
                                          </div>
                                        </TableCell>
                                        <TableCell className="py-2">{property.state}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end text-sm text-muted-foreground p-4 border-t">
                    {propertiesData.length} items found.
                </CardFooter>
            </Card>
        </TabsContent>
        <TabsContent value="notes" className="mt-6">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center space-x-4 text-sm font-medium">
                <Button variant="link" className="text-primary p-0 h-auto">Notes</Button>
                <Separator orientation="vertical" className="h-4" />
                <Button variant="link" className="text-muted-foreground p-0 h-auto">Attachments</Button>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Associated notes</h2>
                <Separator />
                
                <div className="flex items-center justify-between">
                  <Button variant="outline"><Plus className="mr-2 h-4 w-4" /> Add a new note</Button>
                  <div className="flex items-center gap-2 w-full max-w-sm">
                    <div className="relative flex-grow">
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
                                <TableHead className="w-1/4">Date Added</TableHead>
                                <TableHead>Note</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={2} className="text-center text-muted-foreground py-8">
                                    No data found
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
