
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FeatureListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
        </div>
        <span className="text-sm text-foreground">{children}</span>
    </li>
);


export default function ExpensesPage() {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold font-headline">How do you want to track your expenses?</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Automatic Card */}
                <Card className="flex flex-col">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Automatically import transactions</CardTitle>
                            <Badge variant="outline" className="border-orange-400 text-orange-600 bg-orange-100">Recommended</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between space-y-6">
                        <ul className="space-y-4">
                            <FeatureListItem>Track expenses <span className="font-semibold">and revenue</span> by property</FeatureListItem>
                            <FeatureListItem>Organize expenses by Schedule E categories</FeatureListItem>
                            <FeatureListItem>Attach receipts and documentation</FeatureListItem>
                            <FeatureListItem>Import transactions from linked bank and credit card accounts</FeatureListItem>
                            <FeatureListItem>Create rules to categorize automatically</FeatureListItem>
                            <FeatureListItem>Quick set up saves you hours later</FeatureListItem>
                        </ul>
                        <div>
                            <Button asChild className="w-full bg-slate-800 hover:bg-slate-900 text-white" size="lg">
                                <Link href="/dashboard/professional/accounting">GET STARTED</Link>
                            </Button>
                            <div className="relative aspect-[16/9] w-full mt-4">
                                <Image
                                    src="https://placehold.co/600x338.png"
                                    alt="Expense tracking report with charts"
                                    fill
                                    className="p-4 object-contain"
                                    data-ai-hint="chart report"
                                />
                            </div>
                            <div className="flex justify-center mt-2">
                               <p className="font-bold text-lg text-muted-foreground tracking-widest">REI<span className="text-primary">HUB</span></p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Manual Card */}
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-lg">Manually enter expenses</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between space-y-6">
                         <ul className="space-y-4">
                            <FeatureListItem>Track expenses by property</FeatureListItem>
                            <FeatureListItem>Organize expenses by Schedule E categories</FeatureListItem>
                            <FeatureListItem>Attach receipts and documentation</FeatureListItem>
                        </ul>
                        <div>
                            <Button variant="outline" className="w-full" size="lg">ADD EXPENSE</Button>
                            <div className="relative aspect-[16/9] w-full mt-4">
                                <Image
                                    src="https://placehold.co/600x338.png"
                                    alt="Manual expense entry form"
                                    fill
                                    className="p-4 object-contain"
                                    data-ai-hint="form ui"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
