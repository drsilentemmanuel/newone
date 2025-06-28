
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
import { Plus, Ruler, Search } from 'lucide-react';
import Link from 'next/link';

const propertiesData = [
  {
    id: 'PRO000001',
    name: '34A Bainslodge',
    type: 'Apartment',
    size: '0.5',
    address: '34A 69 Bainslodge, Bainsvlei Bloemfontein Free State',
    state: 'Vacant',
  },
  {
    id: 'PRO000002',
    name: 'Hawaii St',
    type: 'Apartment',
    size: '3.0',
    address: 'Hawaii St Germiston Ekurhuleni Gauteng',
    state: 'Vacant',
  },
];

export default function PropertiesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl text-muted-foreground">
        <span className="font-bold text-foreground text-2xl">Properties</span> &gt; List
      </h1>

      <Card>
        <CardHeader className="border-b">
          <CardTitle className="text-xl">List of properties</CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add a property
            </Button>
            <div className="flex flex-1 items-center justify-end gap-2 w-full">
              <div className="relative flex-grow max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Enter search text" className="pl-9" />
              </div>
              <Select defaultValue="active">
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Active"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
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
                  <TableHead className="w-[150px]"></TableHead>
                  <TableHead>Property</TableHead>
                  <TableHead className="w-[120px]">State</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {propertiesData.map(property => (
                  <TableRow key={property.id}>
                    <TableCell className="font-medium">
                      <Link
                        href="#"
                        className="text-primary hover:underline"
                      >
                        {property.id}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{property.name} <span className="text-muted-foreground font-normal text-sm">[{property.type}, {property.size}<Ruler className="inline-block ml-1 h-3 w-3" />]</span></div>
                      <div className="text-xs text-muted-foreground">
                        {property.address}
                      </div>
                    </TableCell>
                    <TableCell>{property.state}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end text-sm text-muted-foreground p-4 border-t">
          {propertiesData.length} items found.
        </CardFooter>
      </Card>
    </div>
  );
}
