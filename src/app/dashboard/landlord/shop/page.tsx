
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Download, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const products = [
  {
    name: "Residential Lease Pack",
    format: "PDF",
    price: "R 250.00",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "document contract",
    description: "Comprehensive residential lease agreement template. Legally vetted and easy to use."
  },
  {
    name: "Residential Lease Pack",
    format: "Word",
    price: "R 350.00",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "document paper",
    description: "A fully editable Word version of our comprehensive residential lease agreement."
  },
  {
    name: "Commercial Lease Pack",
    format: "PDF",
    price: "R 450.00",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "office building",
    description: "Detailed commercial lease agreement for your business property needs."
  },
  {
    name: "Company Enquiry Report",
    format: "Report",
    price: "R 150.00",
    imageUrl: "https://placehold.co/600x400.png",
    aiHint: "business report",
    description: "In-depth credit and background report for potential business tenants."
  },
];

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

export default function ShopPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
         <h1 className="text-3xl font-bold font-headline">Shop</h1>
      </div>

      <Tabs defaultValue="for-sale">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="for-sale">For Sale</TabsTrigger>
          <TabsTrigger value="my-purchases">My Purchases</TabsTrigger>
        </TabsList>
        <TabsContent value="for-sale" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                <Card key={`${product.name}-${product.format}`} className="flex flex-col">
                    <div className="overflow-hidden rounded-t-lg">
                    <Image
                        src={product.imageUrl}
                        width={600}
                        height={400}
                        alt={product.name}
                        className="aspect-[3/2] w-full object-cover transition-transform duration-300 hover:scale-105"
                        data-ai-hint={product.aiHint}
                    />
                    </div>
                    <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-sm font-semibold">{product.format}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                    <p className="text-lg font-bold text-primary">{product.price}</p>
                    <Button>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                    </Button>
                    </CardFooter>
                </Card>
                ))}
            </div>
        </TabsContent>
        <TabsContent value="my-purchases" className="mt-6">
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
        </TabsContent>
      </Tabs>
    </div>
  );
}
