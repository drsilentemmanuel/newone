
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function GlobalReportsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-xl text-muted-foreground">
                <span className="font-bold text-foreground text-2xl">Reports</span> &gt; Global
            </h1>
            <Card>
                <CardHeader className="border-b border-primary">
                    <CardTitle className="text-lg font-semibold text-primary">Select the report from the list below</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {/* Column 1 */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-semibold text-muted-foreground mb-3">Accounting reports</h3>
                                <ul className="space-y-2">
                                    <li><Link href="#" className="text-sm text-primary hover:underline">Bank account</Link></li>
                                    <li><Link href="#" className="text-sm text-primary hover:underline">Bank Recon Report</Link></li>
                                    <li><Link href="#" className="text-sm text-primary hover:underline">General ledger</Link></li>
                                    <li><Link href="#" className="text-sm text-primary hover:underline">Trial balance</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-muted-foreground mb-3">Property reports</h3>
                                <ul className="space-y-2">
                                    <li><Link href="#" className="text-sm text-primary hover:underline">Summary report</Link></li>
                                    <li><Link href="#" className="text-sm text-primary hover:underline">Vacancy report</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* Column 2 */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-semibold text-muted-foreground mb-3">Deposit reports</h3>
                                <ul className="space-y-2">
                                    <li><Link href="#" className="text-sm text-primary hover:underline">Deposit arrears</Link></li>
                                    <li><Link href="#" className="text-sm text-primary hover:underline">Deposit ledger</Link></li>
                                    <li><Link href="#" className="text-sm text-primary hover:underline">Deposit summary</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-muted-foreground mb-3">System reports</h3>
                                <ul className="space-y-2">
                                    <li><Link href="#" className="text-sm text-primary hover:underline">Export contacts</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* Column 3 */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-semibold text-muted-foreground mb-3">Lease reports</h3>
                                <ul className="space-y-2">
                                    <li><Link href="#" className="text-sm text-primary hover:underline">Expiry report</Link></li>
                                    <li><Link href="#" className="text-sm text-primary hover:underline">Occupancy report</Link></li>
                                    <li><Link href="#" className="text-sm text-primary hover:underline">Rent roll</Link></li>
                                    <li><Link href="#" className="text-sm text-primary hover:underline">Tenant arrears</Link></li>
                                </ul>
                            </div>
                             <div>
                                <h3 className="font-semibold text-muted-foreground mb-3">Vendor reports</h3>
                                <ul className="space-y-2">
                                    <li><Link href="#" className="text-sm text-primary hover:underline">Arrears report</Link></li>
                                    <li><Link href="#" className="text-sm text-primary hover:underline">Payments report</Link></li>
                                    <li><Link href="#" className="text-sm text-primary hover:underline">Vendor ledger</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
