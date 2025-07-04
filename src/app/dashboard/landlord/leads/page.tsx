
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Archive,
  Calendar,
  Check,
  Home,
  MessageSquare,
  MoreHorizontal,
  Pencil,
  Send,
  Star,
  ThumbsDown,
  ThumbsUp,
  ArrowUpDown,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const mockLeads = [
  { id: 1, status: 'CONTACTED', source: 'Trulia', activity: ['prescreened'], evaluation: 'none' },
  { id: 2, status: 'CONTACTED', source: 'Craigslist', activity: ['prescreened'], evaluation: 'good' },
  { id: 3, status: 'INVITED TO APPLY', source: 'Realtor.com', activity: ['prescreened', 'showing'], evaluation: 'great' },
  { id: 4, status: 'NEW LEAD', source: 'TurboTenant', activity: [], evaluation: 'none' },
];

const statusClasses: { [key: string]: string } = {
    'CONTACTED': 'border-green-300 text-green-800 bg-green-100',
    'INVITED TO APPLY': 'border-purple-300 text-purple-800 bg-purple-100',
    'NEW LEAD': 'border-yellow-300 text-yellow-800 bg-yellow-100',
};

const EvaluationIcon = ({ evaluation }: { evaluation: string }) => {
    switch (evaluation) {
        case 'good':
            return <ThumbsUp className="h-5 w-5 text-blue-500" />;
        case 'bad':
            return <ThumbsDown className="h-5 w-5 text-gray-400" />;
        case 'great':
            return <Star className="h-5 w-5 text-green-500 fill-green-500" />;
        default:
             return <ThumbsDown className="h-5 w-5 text-gray-400 -rotate-90" />;
    }
};

const ActivityIcons = ({ activity }: { activity: string[] }) => (
    <div className="flex items-center gap-2 text-gray-400">
        <Check className={`h-5 w-5 ${activity.includes('prescreened') ? '!text-gray-600' : ''}`} />
        <Calendar className={`h-5 w-5 ${activity.includes('showing') ? '!text-gray-600' : ''}`} />
    </div>
);

export default function LeadsPage() {
    return (
        <div className="space-y-4">
            <header className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
                 <Tabs defaultValue="leads" className="w-auto">
                    <TabsList className="bg-transparent p-0">
                        <TabsTrigger value="leads" className="bg-transparent text-base font-semibold data-[state=active]:text-primary p-0 h-auto">Leads (0)</TabsTrigger>
                        <span className="mx-2 text-muted-foreground">&gt;</span>
                        <TabsTrigger value="applicants" className="bg-transparent text-base font-semibold text-muted-foreground p-0 h-auto">Applicants (0)</TabsTrigger>
                         <span className="mx-2 text-muted-foreground">&gt;</span>
                        <TabsTrigger value="tenants" className="bg-transparent text-base font-semibold text-muted-foreground p-0 h-auto">Tenants (0)</TabsTrigger>
                    </TabsList>
                </Tabs>
                <div className="flex items-center gap-2">
                    <Button variant="outline">SCREEN A TENANT</Button>
                    <Button>INVITE TO APPLY</Button>
                </div>
            </header>

            <Card>
                <CardContent className="p-0">
                     <div className="p-4">
                        <Table>
                            <TableHeader>
                                <TableRow className="hover:bg-transparent">
                                    <TableHead className="w-[50px]">
                                        <Checkbox />
                                    </TableHead>
                                    <TableHead>
                                        <Button variant="ghost" size="sm" className="p-1 h-auto text-muted-foreground">
                                            DATE ADDED <ArrowUpDown className="ml-2 h-3 w-3" />
                                        </Button>
                                    </TableHead>
                                    <TableHead>
                                        <Button variant="ghost" size="sm" className="p-1 h-auto text-muted-foreground">
                                            SOURCE <ArrowUpDown className="ml-2 h-3 w-3" />
                                        </Button>
                                    </TableHead>
                                    <TableHead className="text-muted-foreground">ACTIVITY</TableHead>
                                    <TableHead className="text-muted-foreground">EVALUATION</TableHead>
                                    <TableHead className="text-muted-foreground">ACTIONS</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {mockLeads.map((lead) => (
                                    <TableRow key={lead.id} className="text-gray-400">
                                        <TableCell><Checkbox /></TableCell>
                                        <TableCell>
                                            <div className="flex flex-col gap-1">
                                                <Badge variant="outline" className={`w-fit font-bold ${statusClasses[lead.status]}`}>{lead.status}</Badge>
                                                <div className="h-4 w-32 bg-gray-200 rounded-sm mt-1"></div>
                                                <div className="h-3 w-20 bg-gray-200 rounded-sm"></div>
                                            </div>
                                        </TableCell>
                                        <TableCell>{lead.source}</TableCell>
                                        <TableCell>
                                            <ActivityIcons activity={lead.activity} />
                                        </TableCell>
                                        <TableCell>
                                            <EvaluationIcon evaluation={lead.evaluation} />
                                        </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon">
                                                        <MoreHorizontal className="h-5 w-5" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem><Pencil className="mr-2" /> Edit</DropdownMenuItem>
                                                    <DropdownMenuItem><FileText className="mr-2" /> Invite to Apply</DropdownMenuItem>
                                                    <DropdownMenuItem><MessageSquare className="mr-2" /> Message</DropdownMenuItem>
                                                    <DropdownMenuItem><Send className="mr-2" /> Send Pre-screener</DropdownMenuItem>
                                                    <DropdownMenuItem><Home className="mr-2" /> Invite to Showing</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem><Archive className="mr-2" /> Archive</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <div className="text-center py-10 border-t">
                        <h2 className="text-2xl font-bold font-headline">Leads at your fingertips!</h2>
                        <p className="mt-2 text-muted-foreground max-w-lg mx-auto">
                            Manage all your leads as they automatically start coming in. Easily sort, rank, and track the status of each one as they arrive. <Link href="#" className="text-primary hover:underline">Learn How</Link>
                        </p>
                        <div className="mt-6 flex justify-center gap-4">
                            <Button variant="outline">ADD MANUALLY</Button>
                            <Button>START MARKETING</Button>
                        </div>
                        <p className="mt-8 text-sm text-muted-foreground">
                            Want to experience the rental application for yourself? <Link href="#" className="text-primary hover:underline">Demo Application</Link>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
