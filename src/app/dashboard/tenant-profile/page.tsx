
"use client";

import { AiInsights } from "@/components/ai-insights";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, CheckCircle, AlertTriangle, User, Briefcase, DollarSign, Home, Phone, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Mock data for the tenant report
const tenantReportData = {
    personalInfo: {
        fullName: "Jane Tenant",
        occupation: "Graphic Designer",
        monthlyIncome: 3200,
        familySize: 2,
        phone: "+263 77 123 4567",
        email: "tenant@example.com",
    },
    tpnScore: 850,
    scoreCategory: "Excellent",
    paymentHistory: [
        { month: "July 2024", status: "On-time" },
        { month: "June 2024", status: "On-time" },
        { month: "May 2024", status: "On-time" },
        { month: "April 2024", status: "5 days late" },
        { month: "March 2024", status: "On-time" },
    ],
    rentalHistory: [
        { address: "123 Fife Avenue, Harare", period: "2022 - Present", landlord: "John Properties" },
        { address: "45 Baines Avenue, Harare", period: "2020 - 2022", landlord: "Sunshine Rentals" },
    ],
    alerts: [
        { type: "Positive", message: "Consistent on-time payments for the last 3 months." },
        { type: "Neutral", message: "One late payment recorded in the last 6 months." },
    ],
    aiProfileData: { // for the AI insights tab
        personalStatement: "I'm a quiet and reliable graphic designer looking for a modern 1-2 bedroom apartment. I value a good relationship with my landlord.",
        landlordPreferences: "Looking for a professional landlord who is responsive to maintenance requests and communicates clearly. Preferably in the northern suburbs.",
        fullName: "Jane Tenant",
        occupation: "Graphic Designer",
        monthlyIncome: 3200,
        familySize: 2,
    }
};

const TenantTpnReport = () => (
    <div className="space-y-6">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>My Profile Report</CardTitle>
                    <CardDescription>A summary of your rental and credit history.</CardDescription>
                </div>
                <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Download PDF</Button>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 space-y-6">
                        <Card>
                             <CardHeader>
                                <CardTitle className="text-lg">Smart Score</CardTitle>
                            </CardHeader>
                             <CardContent className="text-center">
                                <p className="text-6xl font-bold text-emerald-600">{tenantReportData.tpnScore}</p>
                                <Badge variant="outline" className="mt-2 text-emerald-600 border-emerald-300">{tenantReportData.scoreCategory}</Badge>
                            </CardContent>
                        </Card>
                        <Card>
                             <CardHeader>
                                <CardTitle className="text-lg">Personal Details</CardTitle>
                            </CardHeader>
                             <CardContent className="space-y-3 text-sm">
                                <div className="flex items-center gap-3"><User className="h-4 w-4 text-muted-foreground" /> <span>{tenantReportData.personalInfo.fullName}</span></div>
                                <div className="flex items-center gap-3"><Briefcase className="h-4 w-4 text-muted-foreground" /> <span>{tenantReportData.personalInfo.occupation}</span></div>
                                <div className="flex items-center gap-3"><DollarSign className="h-4 w-4 text-muted-foreground" /> <span>${tenantReportData.personalInfo.monthlyIncome}/month</span></div>
                                <div className="flex items-center gap-3"><Home className="h-4 w-4 text-muted-foreground" /> <span>Family size: {tenantReportData.personalInfo.familySize}</span></div>
                                 <Separator />
                                <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-muted-foreground" /> <span>{tenantReportData.personalInfo.phone}</span></div>
                                <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-muted-foreground" /> <span>{tenantReportData.personalInfo.email}</span></div>
                            </CardContent>
                        </Card>

                    </div>
                    <div className="md:col-span-2 space-y-6">
                         <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Payment History (Last 5 Months)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {tenantReportData.paymentHistory.map(p => (
                                        <li key={p.month} className="flex justify-between items-center text-sm">
                                            <span>{p.month}</span>
                                            {p.status === 'On-time' ? (
                                                <span className="flex items-center gap-2 text-green-600"><CheckCircle className="h-4 w-4" /> {p.status}</span>
                                            ) : (
                                                 <span className="flex items-center gap-2 text-amber-600"><AlertTriangle className="h-4 w-4" /> {p.status}</span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Rental History</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {tenantReportData.rentalHistory.map(r => (
                                     <div key={r.address} className="text-sm">
                                        <p className="font-semibold">{r.address}</p>
                                        <p className="text-muted-foreground">{r.period} | Landlord: {r.landlord}</p>
                                     </div>
                                ))}
                            </CardContent>
                        </Card>
                          <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Profile Alerts</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {tenantReportData.alerts.map(a => (
                                     <div key={a.message} className={`flex items-start gap-3 text-sm p-3 rounded-md ${a.type === 'Positive' ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}`}>
                                        {a.type === 'Positive' ? <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" /> : <AlertTriangle className="h-4 w-4 mt-0.5 text-amber-600" />}
                                        <p>{a.message}</p>
                                     </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
);


export default function TenantProfilePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 font-headline">My Profile</h1>
      <Tabs defaultValue="report">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="report">My Report</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
        </TabsList>
        <TabsContent value="report" className="mt-6">
          <TenantTpnReport />
        </TabsContent>
        <TabsContent value="insights" className="mt-6">
          <AiInsights profileType="tenant" data={tenantReportData.aiProfileData as any} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
