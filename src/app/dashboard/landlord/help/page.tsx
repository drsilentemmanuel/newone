
"use client"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Search, Info, Video, FileText } from 'lucide-react';
import Link from 'next/link';

const helpTopics = [
    { section: "Properties", title: "How to add a property", icon: <Video className="h-4 w-4 text-muted-foreground" /> },
    { section: "Leases", title: "How to add a lease", icon: <Video className="h-4 w-4 text-muted-foreground" /> },
    { section: "Leases", title: "How to cancel a lease", icon: <Video className="h-4 w-4 text-muted-foreground" /> },
    { section: "Leases", title: "How to escalate or extend lease", icon: <Video className="h-4 w-4 text-muted-foreground" /> },
    { section: "Leases", title: "How to send a single invoice", icon: <Video className="h-4 w-4 text-muted-foreground" /> },
    { section: "Leases", title: "How to send bulk invoices", icon: <Video className="h-4 w-4 text-muted-foreground" /> },
    { section: "Leases", title: "How to use a deposit towards outstanding expenses", icon: <Video className="h-4 w-4 text-muted-foreground" /> },
    { section: "Leases", title: "How to add interest on a deposit", icon: <Video className="h-4 w-4 text-muted-foreground" /> },
    { section: "Leases", title: "MRIFLIX - Closing Off/ Finalising a Lease", icon: <FileText className="h-4 w-4 text-muted-foreground" /> },
    { section: "Leases", title: "MRIFLIX - Extending a Lease/ Increasing the Rental", icon: <FileText className="h-4 w-4 text-muted-foreground" /> },
    { section: "Tenants", title: "How to add a tenant", icon: <Video className="h-4 w-4 text-muted-foreground" /> },
    { section: "Tenants", title: "How to create your first invoice for tenant", icon: <Video className="h-4 w-4 text-muted-foreground" /> },
    { section: "Tenants", title: "How to capture a tenant payment", icon: <Video className="h-4 w-4 text-muted-foreground" /> },
    { section: "Tenants", title: "How to return a deposit to a tenant", icon: <Video className="h-4 w-4 text-muted-foreground" /> },
    { section: "Vendors", title: "How to add a vendor", icon: <Video className="h-4 w-4 text-muted-foreground" /> },
    { section: "Vendors", title: "How to add an expense for vendor", icon: <Video className="h-4 w-4 text-muted-foreground" /> },
    { section: "Vendors", title: "How to pay a vendor", icon: <Video className="h-4 w-4 text-muted-foreground" /> },
    { section: "Vendors", title: "How to reverse a payment on a vendor", icon: <Video className="h-4 w-4 text-muted-foreground" /> },
    { section: "Vendors", title: "How to reverse an expense on a vendor", icon: <Video className="h-4 w-4 text-muted-foreground" /> },
    { section: "General", title: "What browser am I using?", icon: <FileText className="h-4 w-4 text-muted-foreground" /> },
    { section: "General", title: "Contact TPN for support", icon: <FileText className="h-4 w-4 text-muted-foreground" /> },
];

export default function HelpPage() {
  return (
    <div className="space-y-4">
       <h1 className="text-xl text-muted-foreground">
        <Link href="/dashboard/landlord" className="text-primary hover:underline">Dashboard</Link>
        <span className="mx-2 text-muted-foreground/50">&gt;</span>
        <span>Help topics</span>
        <span className="mx-2 text-muted-foreground/50">&gt;</span>
        <span>List</span>
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Help topics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <Alert className="bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-950 dark:border-yellow-800 dark:text-yellow-200">
                <Info className="h-4 w-4 !text-yellow-800 dark:!text-yellow-200" />
                <AlertDescription>
                    Help: If you can&apos;t find the information you need below, <Link href="#" className="underline font-semibold">click here to schedule an online training session with our experts team</Link>.
                </AlertDescription>
            </Alert>

            <div className="flex justify-end items-center gap-4">
                <div className="relative flex-grow max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Enter search text" className="pl-9" />
                </div>
                <Select defaultValue="25">
                    <SelectTrigger className="w-[80px]">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="25">25</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                        <SelectItem value="100">100</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            
            <div className="border rounded-md">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px]">Section</TableHead>
                            <TableHead>Title</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {helpTopics.map((topic, index) => (
                            <TableRow key={index}>
                                <TableCell>{topic.section}</TableCell>
                                <TableCell>
                                    <Link href="#" className="flex items-center gap-2 text-primary hover:underline">
                                        {topic.icon}
                                        <span>{topic.title}</span>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </CardContent>
        <CardFooter className="flex justify-end text-sm text-muted-foreground p-4 border-t">
          {helpTopics.length} items found.
        </CardFooter>
      </Card>
    </div>
  );
}
