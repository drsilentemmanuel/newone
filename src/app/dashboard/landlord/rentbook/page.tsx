

import {
    AlertTriangle,
    Building2,
    FileText,
    Lock,
    RefreshCw,
    Settings,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function RentbookDashboardPage() {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold font-headline">Rentbook Dashboard</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Top Left Card */}
                    <Card>
                        <CardContent className="p-4 space-y-4">
                            {/* Invoices Due */}
                            <div className="flex items-start justify-between flex-wrap gap-y-2">
                                <div className="flex items-center gap-4">
                                    <AlertTriangle className="h-6 w-6 text-muted-foreground" />
                                    <div>
                                        <p className="text-2xl font-bold">0</p>
                                        <p className="text-sm text-muted-foreground">INVOICES DUE</p>
                                    </div>
                                </div>
                                <div className="text-xs text-muted-foreground flex flex-col items-end gap-2">
                                    <div className="flex items-center gap-x-4 gap-y-1 flex-wrap justify-end">
                                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-sky-500"></span> 0 SENT</span>
                                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-yellow-400"></span> 0 READY TO SEND (CURRENT PERIOD)</span>
                                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-red-500"></span> 0 DUE/MISSED</span>
                                    </div>
                                    <Link href="/dashboard/landlord/settings" className="text-primary hover:underline flex items-center gap-1">
                                        <Settings className="h-3 w-3" /> Settings
                                    </Link>
                                </div>
                            </div>
                            <Separator />
                            {/* Rent Due */}
                            <div>
                                <div className="flex items-center justify-between mb-2 flex-wrap gap-y-2">
                                    <div className="flex items-center gap-4">
                                        <p className="text-2xl font-bold">0</p>
                                        <p className="text-sm text-muted-foreground">RENT DUE</p>
                                    </div>
                                    <div className="text-xs text-muted-foreground flex items-center gap-4">
                                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-sky-500"></span> 0 COLLECTED</span>
                                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-yellow-400"></span> 0 OUTSTANDING</span>
                                    </div>
                                </div>
                                <div className="h-3 rounded-full bg-yellow-400 relative">
                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-medium text-yellow-900">0/0 collected</span>
                                </div>
                            </div>
                            <Separator />
                            {/* Bills Due */}
                            <div>
                                <div className="flex items-center justify-between mb-2 flex-wrap gap-y-2">
                                    <div className="flex items-center gap-4">
                                        <p className="text-2xl font-bold">0</p>
                                        <p className="text-sm text-muted-foreground">BILLS DUE</p>
                                    </div>
                                    <div className="text-xs text-muted-foreground flex items-center gap-4">
                                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-sky-500"></span> TO VENDORS</span>
                                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-yellow-400"></span> 0 WITH CASHFLOW</span>
                                    </div>
                                </div>
                                <div className="h-3 rounded-full bg-sky-500"></div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Bottom Left Card */}
                    <Card>
                        <CardContent className="p-4 space-y-4">
                            {/* Deposits Due */}
                            <div>
                                <div className="flex items-center justify-between mb-2 flex-wrap gap-y-2">
                                    <div className="flex items-center gap-4">
                                        <p className="text-2xl font-bold">0</p>
                                        <p className="text-sm text-muted-foreground">DEPOSITS DUE</p>
                                    </div>
                                    <div className="text-xs text-muted-foreground flex items-center gap-4">
                                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-sky-500"></span> 0 PARTIAL HELD</span>
                                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-yellow-400"></span> 0 WITH NO DEPOSIT</span>
                                    </div>
                                </div>
                                <div className="h-3 rounded-full bg-sky-500"></div>
                            </div>
                            <Separator />
                            {/* Deposits Held */}
                            <div>
                                <div className="flex items-center justify-between mb-2 flex-wrap gap-y-2">
                                    <div className="flex items-center gap-4">
                                        <Lock className="h-6 w-6 text-muted-foreground" />
                                        <div>
                                            <p className="text-2xl font-bold">0</p>
                                            <p className="text-sm text-muted-foreground">DEPOSITS HELD</p>
                                        </div>
                                    </div>
                                    <div className="text-xs text-muted-foreground flex items-center gap-4">
                                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-sky-500"></span> 0 BY LANDLORD</span>
                                    </div>
                                </div>
                                <div className="h-3 rounded-full bg-sky-500"></div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-1">
                    <Card>
                        <CardContent className="p-4 space-y-4">
                            {/* Properties */}
                            <div>
                                <div className="flex items-center justify-between mb-2 flex-wrap gap-y-2">
                                    <div className="flex items-center gap-4">
                                        <Building2 className="h-6 w-6 text-muted-foreground" />
                                        <div>
                                            <p className="text-2xl font-bold">2</p>
                                            <p className="text-sm text-muted-foreground">PROPERTIES</p>
                                        </div>
                                    </div>
                                    <div className="text-xs text-muted-foreground flex items-center gap-4">
                                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-sky-500"></span> 0 OCCUPIED</span>
                                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-yellow-400"></span> 2 VACANT</span>
                                    </div>
                                </div>
                                <div className="h-3 rounded-full bg-yellow-400 relative">
                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-medium text-yellow-900">0/2 occupied</span>
                                </div>
                            </div>
                            <Separator />
                            {/* Leases */}
                            <div>
                                <div className="flex items-center justify-between mb-2 flex-wrap gap-y-2">
                                    <div className="flex items-center gap-4">
                                        <FileText className="h-6 w-6 text-muted-foreground" />
                                        <div>
                                            <p className="text-2xl font-bold">0</p>
                                            <p className="text-sm text-muted-foreground">LEASES</p>
                                        </div>
                                    </div>
                                    <div className="text-xs text-muted-foreground flex items-center gap-4">
                                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-sky-500"></span> 0 ACTIVE</span>
                                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-red-500"></span> 0 EXPIRED</span>
                                    </div>
                                </div>
                                <div className="h-3 rounded-full bg-red-500"></div>
                            </div>
                            <Separator />
                            {/* Renewals */}
                            <div>
                                <div className="flex items-center justify-between mb-2 flex-wrap gap-y-2">
                                    <div className="flex items-center gap-4">
                                        <RefreshCw className="h-6 w-6 text-muted-foreground" />
                                        <div>
                                            <p className="text-2xl font-bold">0</p>
                                            <p className="text-sm text-muted-foreground">RENEWALS</p>
                                        </div>
                                    </div>
                                    <div className="text-xs text-muted-foreground flex items-center gap-x-3 gap-y-1 flex-wrap justify-end">
                                        <span>DUE IN</span>
                                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-sky-500"></span> 90 DAYS</span>
                                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-yellow-400"></span> 60 DAYS</span>
                                        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-red-500"></span> 30 DAYS</span>
                                    </div>
                                </div>
                                <div className="h-3 rounded-full bg-slate-200"></div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
