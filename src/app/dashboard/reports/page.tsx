import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileDown, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";

const mockReports = [
  {
    date: "2024-07-29",
    type: "Consumer Credit Check",
    reference: "123 Fife Avenue, Harare",
    status: "Completed",
    id: "RPT-001"
  },
  {
    date: "2024-07-28",
    type: "Business Credit Check",
    reference: "ABC Holdings",
    status: "Completed",
    id: "RPT-002"
  },
  {
    date: "2024-07-25",
    type: "Trace Consumer",
    reference: "John Doe",
    status: "In Progress",
    id: "RPT-003"
  },
  {
    date: "2024-07-22",
    type: "Consumer Credit Check",
    reference: "45 Baines Avenue, Harare",
    status: "Completed",
    id: "RPT-004"
  },
    {
    date: "2024-07-20",
    type: "Consumer Credit Check",
    reference: "88 Milton Park, Harare",
    status: "Failed",
    id: "RPT-005"
  },
];

const statusVariant = {
    Completed: 'default',
    'In Progress': 'secondary',
    Failed: 'destructive',
}

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-headline">Reports</h1>
      <p className="text-muted-foreground">View your history of credit checks and other enquiries.</p>

      <Card>
        <CardHeader>
            <CardTitle>Enquiry History</CardTitle>
            <CardDescription>A log of all enquiries performed on your account.</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Reference</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mockReports.map((report) => (
                        <TableRow key={report.id}>
                            <TableCell>{report.date}</TableCell>
                            <TableCell className="font-medium">{report.type}</TableCell>
                            <TableCell>{report.reference}</TableCell>
                            <TableCell>
                                <Badge variant={statusVariant[report.status as keyof typeof statusVariant] || 'outline'}>
                                    {report.status}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right space-x-2">
                                <Button variant="ghost" size="icon">
                                    <Eye className="h-4 w-4" />
                                    <span className="sr-only">View Report</span>
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <FileDown className="h-4 w-4" />
                                    <span className="sr-only">Download Report</span>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
        <CardFooter className="justify-end">
            <Button variant="outline">
                Load More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
