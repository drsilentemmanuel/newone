
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, DollarSign, PiggyBank, FileText } from "lucide-react";
import Link from "next/link";

const ReportCard = ({ title, description }: { title: string, description: string }) => (
    <Link href="#" className="block group">
        <Card className="hover:border-primary hover:shadow-md transition-all h-full">
            <CardContent className="p-4 flex items-start gap-4">
                <FileText className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0 group-hover:text-primary transition-colors" />
                <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{title}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </div>
            </CardContent>
        </Card>
    </Link>
);

export default function ProfessionalReportsPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline">Reports</h1>

            <Card className="bg-cyan-50 border-cyan-200 dark:bg-cyan-950/50 dark:border-cyan-800">
                <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0 p-3 bg-white rounded-lg border border-cyan-100 dark:bg-cyan-900 dark:border-cyan-700">
                        <Calculator className="h-8 w-8 text-cyan-700 dark:text-cyan-300" />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                        <h2 className="text-lg font-semibold">Spend less time burdened with accounting spreadsheets</h2>
                        <p className="text-sm text-muted-foreground mt-1">
                            Automatically track your expenses, income, and your rental's performance over time with TurboTenant accounting.
                        </p>
                    </div>
                    <Button variant="outline" className="bg-white hover:bg-muted dark:bg-cyan-900 dark:hover:bg-cyan-800 shrink-0 border-cyan-300 dark:border-cyan-700">
                        LEARN MORE
                    </Button>
                </CardContent>
            </Card>

            <div className="space-y-8">
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <DollarSign className="h-7 w-7 text-primary" />
                        <h2 className="text-2xl font-bold font-headline">Income</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ReportCard
                            title="Net Income (Profit & Loss)"
                            description="Revenue minus expenses, highlighting profitability."
                        />
                        <ReportCard
                            title="Net Income By Property"
                            description="Summary of your profitability for each property."
                        />
                        <ReportCard
                            title="Owner Statement"
                            description="Summarizes your rental property's income, expenses, and net profit."
                        />
                        <ReportCard
                            title="Rent Roll"
                            description="Lists all tenants, rental units, and lease details, providing a snapshot of rental income and occupancy status."
                        />
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <PiggyBank className="h-7 w-7 text-primary" />
                        <h2 className="text-2xl font-bold font-headline">Cash Flow</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ReportCard
                            title="Operating Cash Flow"
                            description="Tracks cash generated or used in daily operations."
                        />
                        <ReportCard
                            title="Operating Cash Flow By Property"
                            description="The cash generated or used for each property."
                        />
                        <ReportCard
                            title="Cash Flow Statement"
                            description="Shows all incoming and outgoing cash."
                        />
                         <ReportCard
                            title="Cash Flows By Property"
                            description="Shows all incoming and outgoing cash for each property."
                        />
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <Calculator className="h-7 w-7 text-primary" />
                        <h2 className="text-2xl font-bold font-headline">Taxes</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ReportCard
                            title="Tax Packet Export"
                            description="A comprehensive export of tax-related documents and data."
                        />
                        <ReportCard
                            title="Tax Review"
                            description="Reviews tax-related information for accuracy and compliance."
                        />
                        <ReportCard
                            title="Schedule E"
                            description="Details income and expenses for rental properties and real estate investments."
                        />
                         <ReportCard
                            title="Form 8825"
                            description="Reports income and expenses for rental real estate activities required by Form 8825."
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
