
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const rentalHistory = [
    { address: "123 Fife Avenue, Harare", landlord: "John Properties", period: "Aug 2022 - Present", rent: "$800", status: "Active" },
    { address: "45 Baines Avenue, Harare", landlord: "Sunshine Rentals", period: "Jul 2020 - Jul 2022", rent: "$650", status: "Ended" },
    { address: "88 Milton Park, Harare", landlord: "Prime Living", period: "Jan 2019 - Jun 2020", rent: "$500", status: "Ended" },
];

export default function RentalHistoryPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold font-headline">My Rental History</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Previous and Current Leases</CardTitle>
                    <CardDescription>A log of your rental agreements.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Property Address</TableHead>
                                <TableHead>Landlord/Agent</TableHead>
                                <TableHead>Period</TableHead>
                                <TableHead>Rent</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {rentalHistory.map((item) => (
                                <TableRow key={item.address}>
                                    <TableCell className="font-medium">{item.address}</TableCell>
                                    <TableCell>{item.landlord}</TableCell>
                                    <TableCell>{item.period}</TableCell>
                                    <TableCell>{item.rent}</TableCell>
                                    <TableCell>
                                        <Badge variant={item.status === 'Active' ? 'default' : 'secondary'}>{item.status}</Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
