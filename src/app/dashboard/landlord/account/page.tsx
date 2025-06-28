
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useUser } from "@/context/user-context";
import { Info, Landmark, Home, PenSquare, BarChart3, Settings, Pencil, Building2, Wallet, ShoppingCart } from "lucide-react";

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

export default function AccountPage() {
  const { userName, userEmail } = useUser();

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
          <TabsTrigger value="financials" disabled className="rounded-none bg-transparent">
            <Landmark className="mr-2 h-4 w-4" /> Financials
          </TabsTrigger>
          <TabsTrigger value="properties" disabled className="rounded-none bg-transparent">
            <Home className="mr-2 h-4 w-4" /> Properties
          </TabsTrigger>
          <TabsTrigger value="notes" disabled className="rounded-none bg-transparent">
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
      </Tabs>
    </div>
  );
}
