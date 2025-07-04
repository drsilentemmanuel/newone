"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Upload, Calendar as CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const FeatureListItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
        </div>
        <span className="text-sm text-foreground">{children}</span>
    </li>
);


export default function ExpensesPage() {
    const { toast } = useToast();
    const [isManualAddOpen, setIsManualAddOpen] = useState(false);
    const [date, setDate] = useState<Date>();

    const handleSaveExpense = () => {
        // Mock save logic
        setIsManualAddOpen(false);
        toast({
            title: "Expense Added",
            description: "Your expense has been successfully saved.",
        });
        setDate(undefined);
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold font-headline">How do you want to track your expenses?</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Automatic Card */}
                <Card className="flex flex-col">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Automatically import transactions</CardTitle>
                            <Badge variant="outline" className="border-orange-400 text-orange-600 bg-orange-100">Recommended</Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between space-y-6">
                        <ul className="space-y-4">
                            <FeatureListItem>Track expenses <span className="font-semibold">and revenue</span> by property</FeatureListItem>
                            <FeatureListItem>Organize expenses by Schedule E categories</FeatureListItem>
                            <FeatureListItem>Attach receipts and documentation</FeatureListItem>
                            <FeatureListItem>Import transactions from linked bank and credit card accounts</FeatureListItem>
                            <FeatureListItem>Create rules to categorize automatically</FeatureListItem>
                            <FeatureListItem>Quick set up saves you hours later</FeatureListItem>
                        </ul>
                        <div>
                            <Button asChild className="w-full bg-slate-800 hover:bg-slate-900 text-white" size="lg">
                                <Link href="/dashboard/landlord/accounting">GET STARTED</Link>
                            </Button>
                            <div className="relative aspect-[16/9] w-full mt-4">
                                <Image
                                    src="https://placehold.co/600x338.png"
                                    alt="Expense tracking report with charts"
                                    fill
                                    className="p-4 object-contain"
                                    data-ai-hint="chart report"
                                />
                            </div>
                            <div className="flex justify-center mt-2">
                               <p className="font-bold text-lg text-muted-foreground tracking-widest">REI<span className="text-primary">HUB</span></p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Manual Card */}
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-lg">Manually enter expenses</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between space-y-6">
                         <ul className="space-y-4">
                            <FeatureListItem>Track expenses by property</FeatureListItem>
                            <FeatureListItem>Organize expenses by Schedule E categories</FeatureListItem>
                            <FeatureListItem>Attach receipts and documentation</FeatureListItem>
                        </ul>
                        <div>
                            <Dialog open={isManualAddOpen} onOpenChange={setIsManualAddOpen}>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="w-full" size="lg">ADD EXPENSE</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md">
                                    <DialogHeader>
                                        <DialogTitle>Add Expense</DialogTitle>
                                        <DialogDescription>
                                            Manually add an expense for one of your properties.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="property" className="text-right">Property</Label>
                                            <Select>
                                                <SelectTrigger className="col-span-3">
                                                    <SelectValue placeholder="Select a property" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="prop1">34A Bainslodge</SelectItem>
                                                    <SelectItem value="prop2">Hawaii St</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="date" className="text-right">Date</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "col-span-3 justify-start text-left font-normal",
                                                        !date && "text-muted-foreground"
                                                    )}
                                                    >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={setDate}
                                                    initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="category" className="text-right">Category</Label>
                                            <Select>
                                                <SelectTrigger className="col-span-3">
                                                    <SelectValue placeholder="Select a category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="repairs">Repairs</SelectItem>
                                                    <SelectItem value="utilities">Utilities</SelectItem>
                                                    <SelectItem value="insurance">Insurance</SelectItem>
                                                    <SelectItem value="taxes">Property Taxes</SelectItem>
                                                    <SelectItem value="management">Management Fees</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="amount" className="text-right">Amount</Label>
                                            <Input id="amount" type="number" placeholder="$0.00" className="col-span-3" />
                                        </div>
                                        <div className="grid grid-cols-4 items-start gap-4">
                                            <Label htmlFor="description" className="text-right pt-2">Description</Label>
                                            <Textarea id="description" placeholder="e.g., Replaced kitchen faucet" className="col-span-3" rows={3} />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="receipt" className="text-right">Receipt</Label>
                                            <Button asChild variant="outline" className="col-span-3 font-normal">
                                                <label htmlFor="receipt-upload" className="cursor-pointer flex items-center w-full">
                                                    <Upload className="mr-2 h-4 w-4" />
                                                    Upload File
                                                    <input id="receipt-upload" type="file" className="sr-only" />
                                                </label>
                                            </Button>
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="button" variant="outline" onClick={() => setIsManualAddOpen(false)}>Cancel</Button>
                                        <Button type="submit" onClick={handleSaveExpense}>Save Expense</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                            <div className="relative aspect-[16/9] w-full mt-4">
                                <Image
                                    src="https://placehold.co/600x338.png"
                                    alt="Manual expense entry form"
                                    fill
                                    className="p-4 object-contain"
                                    data-ai-hint="form ui"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
