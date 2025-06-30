
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

export default function PurchasedReportsPage() {
    return (
        <div className="space-y-6">
             <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold font-headline">My Purchases</h1>
                <Button variant="outline" asChild>
                    <Link href="/dashboard/landlord/shop">Back to Shop</Link>
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>My Purchased Reports</CardTitle>
                    <CardDescription>Here you can find all the reports you have purchased.</CardDescription>
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
        </div>
    )
}
