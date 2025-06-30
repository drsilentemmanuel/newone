
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

const purchasedReports = [
    {
        name: "Company Enquiry: ABC Corp",
        date: "2024-07-29",
    },
    {
        name: "Consumer Trace: John Smith",
        date: "2024-07-25",
    }
];

export default function GlobalReportsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-xl text-muted-foreground">
                <span className="font-bold text-foreground text-2xl">Reports</span> &gt; Global
            </h1>
            
            <Card>
                <CardHeader>
                    <CardTitle>My Purchased Reports</CardTitle>
                    <CardDescription>Reports you have purchased from the shop. <Link href="/dashboard/landlord/shop" className="text-primary underline">Visit the shop to purchase more.</Link></CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Item</TableHead>
                                <TableHead className="hidden sm:table-cell">Date Purchased</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {purchasedReports.length > 0 ? (
                                purchasedReports.map((report) => (
                                <TableRow key={report.name}>
                                    <TableCell className="font-medium flex items-center gap-2">
                                        <FileText className="h-4 w-4 text-muted-foreground" />
                                        {report.name}
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">{report.date}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="outline" size="sm">
                                            <Download className="mr-2 h-4 w-4" />
                                            Download
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={3} className="h-24 text-center">
                                        You have not purchased any reports yet.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="border-b border-primary">
                    <CardTitle className="text-lg font-semibold text-primary">Generate a New Report</CardTitle>
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
