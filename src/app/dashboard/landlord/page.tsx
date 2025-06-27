
import {
    Activity,
    AlertCircle,
    Ban,
    Building2,
    ChevronRight,
    Coins,
    FileText,
    History,
    Mail,
    Search,
    ShieldCheck,
    Users,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PaymentBehaviorChart } from "@/components/payment-behavior-chart"
import { Separator } from "@/components/ui/separator"

const riskMonitorData = {
    overallScore: 83,
    accepted: 120,
    rejected: 5,
    good: 95,
    average: 25,
    poor: 5,
}

const countersData = {
    activeAccounts: 13,
    inactiveAccounts: 0,
    outstandingPayments: 6,
    blacklistings: 0,
}

const todoItems = [
    { text: "6 tenants with outstanding payments", icon: <AlertCircle className="text-destructive" />, link: "#" },
    { text: "1 payment profile not yet set", icon: <AlertCircle className="text-amber-500" />, link: "#" },
    { text: "4 partially paid accounts", icon: <AlertCircle className="text-amber-500" />, link: "#" },
    { text: "2 unpaid accounts", icon: <AlertCircle className="text-destructive" />, link: "#" },
    { text: "Letter of demand required for 3 tenants", icon: <FileText className="text-blue-500" />, link: "#" },
    { text: "Blacklisting required for 1 tenant", icon: <Ban className="text-destructive" />, link: "#" },
    { text: "1 account expiring within 90 days", icon: <History className="text-blue-500" />, link: "#" },
]

export default function LandlordDashboardPage() {
    return (
        <div className="grid gap-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold font-headline">Welcome, Landlord!</h1>
                <p className="text-muted-foreground">Here's an overview of your rental portfolio's health.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Coins className="text-primary" /> Enquiry Credits</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                        <div className="text-4xl font-bold">15</div>
                        <Button>Purchase More</Button>
                    </CardContent>
                </Card>
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><ShieldCheck className="text-primary" /> Tenant Risk Monitor</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap items-center justify-around gap-4 text-center">
                        <div>
                            <p className="text-3xl font-bold text-primary">{riskMonitorData.overallScore}</p>
                            <p className="text-sm text-muted-foreground">Overall Score</p>
                        </div>
                        <Separator orientation="vertical" className="h-12 hidden sm:block" />
                        <div className="flex gap-4">
                            <div>
                                <p className="text-xl font-bold">{riskMonitorData.accepted}</p>
                                <p className="text-sm text-muted-foreground">Accepted</p>
                            </div>
                            <div>
                                <p className="text-xl font-bold">{riskMonitorData.rejected}</p>
                                <p className="text-sm text-muted-foreground">Rejected</p>
                            </div>
                        </div>
                         <Separator orientation="vertical" className="h-12 hidden md:block" />
                        <div className="flex gap-4">
                             <div>
                                <p className="text-xl font-bold text-emerald-500">{riskMonitorData.good}</p>
                                <p className="text-sm text-muted-foreground">Good</p>
                            </div>
                            <div>
                                <p className="text-xl font-bold text-amber-500">{riskMonitorData.average}</p>
                                <p className="text-sm text-muted-foreground">Average</p>
                            </div>
                            <div>
                                <p className="text-xl font-bold text-destructive">{riskMonitorData.poor}</p>
                                <p className="text-sm text-muted-foreground">Poor</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Payment Behavior Over Time</CardTitle>
                            <CardDescription>Monthly overview of tenant payment statuses.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <PaymentBehaviorChart />
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Counters</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Active accounts</span>
                                <span className="font-bold">{countersData.activeAccounts}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Inactive accounts</span>
                                <span className="font-bold">{countersData.inactiveAccounts}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Outstanding payments</span>
                                <span className="font-bold">{countersData.outstandingPayments}</span>
                            </div>
                             <Separator />
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Blacklistings</span>
                                <span className="font-bold">{countersData.blacklistings}</span>
                            </div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>To Do's</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                           {todoItems.map((item, index) => (
                               <Link key={index} href={item.link} className="flex items-center p-2 rounded-md hover:bg-muted -mx-2">
                                   <div className="w-6 shrink-0 mr-2">{item.icon}</div>
                                   <span className="flex-grow text-sm">{item.text}</span>
                                   <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
                               </Link>
                           ))}
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Quick Links</CardTitle>
                    <CardDescription>Access essential tools for managing your properties and tenants.</CardDescription>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <Button variant="outline" className="h-auto p-4 flex flex-col gap-2 items-start text-left justify-start">
                        <Users className="h-6 w-6 text-primary" />
                        <span className="font-semibold">Consumer Credit Checks</span>
                        <span className="text-xs text-muted-foreground">By ID, passport, name, etc.</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex flex-col gap-2 items-start text-left justify-start">
                        <Building2 className="h-6 w-6 text-primary" />
                        <span className="font-semibold">Business Credit Checks</span>
                        <span className="text-xs text-muted-foreground">Verify business credentials.</span>
                    </Button>
                     <Button variant="outline" className="h-auto p-4 flex flex-col gap-2 items-start text-left justify-start">
                        <Search className="h-6 w-6 text-primary" />
                        <span className="font-semibold">Trace Consumer</span>
                        <span className="text-xs text-muted-foreground">Locate previous tenants.</span>
                    </Button>
                     <Button variant="outline" className="h-auto p-4 flex flex-col gap-2 items-start text-left justify-start">
                        <History className="h-6 w-6 text-primary" />
                        <span className="font-semibold">Credit Check History</span>
                        <span className="text-xs text-muted-foreground">View past enquiries.</span>
                    </Button>
                     <Button variant="outline" className="h-auto p-4 flex flex-col gap-2 items-start text-left justify-start">
                        <Mail className="h-6 w-6 text-primary" />
                        <span className="font-semibold">View Mailbox</span>
                        <span className="text-xs text-muted-foreground">Check your TPN messages.</span>
                    </Button>
                </CardContent>
            </Card>

        </div>
    )
}
