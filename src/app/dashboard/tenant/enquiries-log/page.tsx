
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const enquiryLog = [
    { date: "2024-07-28", enquirer: "Seef Properties", reason: "Rental Application", status: "Viewed" },
    { date: "2024-07-25", enquirer: "Rawson Property Group", reason: "Credit Check", status: "Viewed" },
    { date: "2024-07-20", enquirer: "Old Mutual", reason: "Tenant Screening", status: "Viewed" },
    { date: "2024-07-15", enquirer: "CABS", reason: "Credit Check", status: "Viewed" },
    { date: "2024-07-10", enquirer: "Knight Frank", reason: "Rental Application", status: "Viewed" },
];

export default function EnquiriesLogPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold font-headline">TPN Enquiries About Me</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Enquiry Log</CardTitle>
                    <CardDescription>A log of who has accessed your TPN profile and for what reason.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Enquirer</TableHead>
                                <TableHead>Reason</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {enquiryLog.map((item) => (
                                <TableRow key={item.date}>
                                    <TableCell>{item.date}</TableCell>
                                    <TableCell className="font-medium">{item.enquirer}</TableCell>
                                    <TableCell>{item.reason}</TableCell>
                                    <TableCell><Badge variant="outline">{item.status}</Badge></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
