
"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, FileClock, Handshake, DatabaseZap, ShieldCheck, FileText, Smile } from "lucide-react"
import { useUser } from "@/context/user-context"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ScoreGauge } from "@/components/score-gauge"
import { ScoreImprovementChart } from "@/components/score-improvement-chart"


// Mock data
const recentEnquiries = [
    { enquirer: "Seef Properties", date: "2024-07-28", reason: "Rental Application" },
    { enquirer: "Rawson Property Group", date: "2024-07-25", reason: "Credit Check" },
    { enquirer: "Old Mutual", date: "2024-07-20", reason: "Tenant Screening" },
];

export default function TenantDashboardPage() {
    const { userName } = useUser();

    return (
        <div className="grid gap-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold font-headline">Hello, {userName}, Welcome back! You look nice today.</h1>
                <p className="text-muted-foreground">Here's your rental reputation at a glance.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <Card className="overflow-hidden shadow-md">
                    <CardHeader className="bg-gradient-to-r from-emerald-600 to-green-500 p-4 flex flex-row items-center gap-3">
                        <FileText className="h-6 w-6 text-white" />
                        <CardTitle className="text-white !text-xl">Score Report</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center gap-4 py-8 bg-card">
                        <Badge variant="outline" className="py-2 px-4 border-emerald-300 bg-emerald-50 text-emerald-600 shadow-sm rounded-full">
                            <Smile className="h-5 w-5 mr-2" />
                            <span className="font-semibold">VERY GOOD</span>
                        </Badge>
                        <ScoreGauge score={648} maxScore={999} />
                    </CardContent>
                </Card>
                <ScoreImprovementChart />
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Button asChild variant="outline" className="h-auto p-4 flex flex-col gap-2 items-start text-left">
                        <Link href="/dashboard/tenant-profile">
                            <ShieldCheck className="h-6 w-6 text-primary" />
                            <span className="font-semibold">View My Profile</span>
                            <span className="text-xs text-muted-foreground">See your detailed report and score.</span>
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-auto p-4 flex flex-col gap-2 items-start text-left">
                        <Link href="/dashboard/tenant/dispute">
                            <DatabaseZap className="h-6 w-6 text-primary" />
                            <span className="font-semibold">Dispute Data</span>
                            <span className="text-xs text-muted-foreground">Correct any inaccuracies on your profile.</span>
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-auto p-4 flex flex-col gap-2 items-start text-left">
                        <Link href="/dashboard/tenant/consent">
                            <Handshake className="h-6 w-6 text-primary" />
                            <span className="font-semibold">Manage Consent</span>
                            <span className="text-xs text-muted-foreground">Control who can see your profile.</span>
                        </Link>
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Enquiries About Me</CardTitle>
                    <CardDescription>This is a log of recent credit and profile checks performed on your profile.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Enquirer</TableHead>
                                <TableHead className="hidden md:table-cell">Date</TableHead>
                                <TableHead>Reason</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentEnquiries.map((enquiry) => (
                                <TableRow key={enquiry.enquirer}>
                                    <TableCell className="font-medium">{enquiry.enquirer}</TableCell>
                                    <TableCell className="hidden md:table-cell">{enquiry.date}</TableCell>
                                    <TableCell>{enquiry.reason}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                 <CardFooter>
                    <Button asChild variant="secondary">
                        <Link href="/dashboard/tenant/enquiries-log">View Full Log <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </CardFooter>
            </Card>

        </div>
    )
}
