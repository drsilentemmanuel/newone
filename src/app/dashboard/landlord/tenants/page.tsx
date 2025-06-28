
import {
  Card,
  CardContent,
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
import { Plus, Search } from 'lucide-react';

export default function TenantsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl text-muted-foreground">
        <span className="font-bold text-foreground text-2xl">Tenants</span> &gt; List
      </h1>

      <Card>
        <CardHeader className="border-b">
          <CardTitle className="text-xl">List of tenants and applicants</CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add a tenant
            </Button>
            <div className="flex flex-1 items-center justify-end gap-2 w-full">
              <div className="relative flex-grow max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Enter search text" className="pl-9" />
              </div>
              <Select defaultValue="active">
                <SelectTrigger className="w-auto sm:w-[180px]">
                  <SelectValue placeholder="Active Tenants" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active Tenants</SelectItem>
                  <SelectItem value="inactive">Inactive Tenants</SelectItem>
                  <SelectItem value="all">All Tenants</SelectItem>
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
                  <TableHead>Description</TableHead>
                  <TableHead>State</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={2} className="text-center text-muted-foreground py-8">
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
