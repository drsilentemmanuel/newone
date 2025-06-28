
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
import { Search } from 'lucide-react';

export default function BillsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl text-muted-foreground">
        <span className="font-bold text-foreground text-2xl">Vendors</span> &gt; Unpaid Bills
      </h1>

      <Card>
        <CardHeader className="border-b">
          <CardTitle className="text-lg font-normal text-primary">Select the bill to pay:</CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div className="relative flex-grow max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Enter search text" className="pl-9" />
            </div>
            <div className="flex items-center gap-2">
                <Select defaultValue="all">
                    <SelectTrigger className="w-auto sm:w-[180px]">
                        <SelectValue placeholder="All unpaid bills" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All unpaid bills</SelectItem>
                        <SelectItem value="due">Due</SelectItem>
                        <SelectItem value="overdue">Overdue</SelectItem>
                    </SelectContent>
                </Select>
                <Select defaultValue="25">
                    <SelectTrigger className="w-[80px]">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="25">25</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                </Select>
            </div>
          </div>

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/2">Vendor/Property</TableHead>
                  <TableHead>Days Outstanding</TableHead>
                  <TableHead>Amount due</TableHead>
                  <TableHead>Cashflow</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                    No data found
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
