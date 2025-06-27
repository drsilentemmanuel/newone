
"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, FileClock, Handshake, DatabaseZap, Bell, BarChart, ShieldCheck } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { useUser } from "@/context/user-context"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

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
                <h1 className="text-3xl font-bold font-headline">Welcome, {userName}!</h1>
                <p className="text-muted-foreground">Here's your rental reputation at a glance.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>My TPN Profile Score</CardTitle>
                        <CardDescription>Your Smart Score reflects your reliability as a tenant.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row items-center gap-6">
                        <div className="relative h-32 w-32">
                            <svg className="h-full w-full" viewBox="0 0 36 36">
                                <path className="text-gray-200" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-emerald-500" strokeWidth="3" strokeDasharray="85, 100" strokeLinecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-3xl font-bold">850</span>
                                <span className="text-sm text-muted-foreground">Excellent</span>
                            </div>
                        </div>
                        <div className="flex-1 space-y-4">
                            <div className="space-y-1">
                                <div className="flex justify-between text-sm">
                                    <span>Payment Reliability</span>
                                    <span className="font-semibold">98%</span>
                                </div>
                                <Progress value={98} className="h-2" />
                            </div>
                             <div className="text-sm text-muted-foreground">
                                Based on your rental payment history. Keep up the great work!
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Bell className="h-5 w-5" /> Alerts</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col items-center justify-center text-center">
                        <p className="text-muted-foreground">No new notifications.</p>
                        <p className="text-xs text-muted-foreground mt-1">We'll let you know about any important actions or messages.</p>
                    </CardContent>
                    <CardFooter>
                         <Button variant="outline" className="w-full">View All</Button>
                    </CardFooter>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Button asChild variant="outline" className="h-auto p-4 flex flex-col gap-2 items-start text-left">
                        <Link href="/dashboard/tenant-profile">
                            <ShieldCheck className="h-6 w-6 text-primary" />
                            <span className="font-semibold">View My TPN Profile</span>
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
                            <span className="text-xs text-muted-foreground">Control who can see your TPN profile.</span>
                        </Link>
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Enquiries About Me</CardTitle>
                    <CardDescription>This is a log of recent credit and TPN checks performed on your profile.</CardDescription>
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
