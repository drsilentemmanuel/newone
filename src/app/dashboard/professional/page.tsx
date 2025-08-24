
"use client";

import { useUser } from "@/context/user-context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { 
  Building, 
  Users, 
  UserSearch, 
  CalendarCheck2,
  FileText,
  ClipboardCheck,
  PenSquare,
  Wrench,
  Plus,
  ChevronRight,
  LineChart,
  Send,
  FilePlus,
  FileSignature,
  Download,
  PlusCircle,
  MessageSquare,
  HelpCircle
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const StatCard = ({ icon, value, label }: { icon: React.ReactNode, value: string | number, label: string }) => (
    <div className="flex flex-col items-center gap-2 p-2 rounded-lg text-center">
        <div className="text-muted-foreground">{icon}</div>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
    </div>
);

const ActionItem = ({ icon, text, href = "#" }: { icon: React.ReactNode, text: string, href?: string }) => (
  <Link href={href} className="flex items-center p-3 -mx-3 rounded-lg hover:bg-muted transition-colors">
      <div className="mr-4 text-primary">{icon}</div>
      <span className="flex-grow text-sm font-medium">{text}</span>
      <ChevronRight className="h-5 w-5 text-muted-foreground" />
  </Link>
);


export default function ProfessionalDashboardPage() {
    const { userName } = useUser();

    return (
        <div className="space-y-6 relative">
             <div className="space-y-2">
                <h1 className="text-3xl font-bold font-headline">Hello, {userName}, Welcome back! You look nice today.</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardContent className="p-4 flex flex-col md:flex-row items-center gap-4">
                      <div className="flex-grow">
                          <p className="font-semibold">Finish adding your rentals</p>
                          <Progress value={1/7 * 100} className="h-2 mt-2" />
                          <p className="text-xs text-muted-foreground mt-1">1 of 7 units added.</p>
                      </div>
                      <Button>ADD A RENTAL</Button>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm font-semibold uppercase text-muted-foreground tracking-wider">Vacancy</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <StatCard icon={<Building className="h-6 w-6"/>} value="0" label="Marketing On" />
                      <StatCard icon={<Users className="h-6 w-6"/>} value="0" label="Leads" />
                      <StatCard icon={<UserSearch className="h-6 w-6"/>} value="0" label="Applicants" />
                      <StatCard icon={<CalendarCheck2 className="h-6 w-6"/>} value="0" label="Showings" />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                       <CardTitle className="text-sm font-semibold uppercase text-muted-foreground tracking-wider">Residency</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border rounded-lg p-4 space-y-4">
                          <div className="flex justify-between items-center">
                              <h3 className="font-semibold">July Payments</h3>
                              <div className="flex items-center gap-1">
                                  <Button variant="secondary" size="sm" className="bg-primary/10 text-primary">Month</Button>
                                  <Button variant="ghost" size="sm">Year</Button>
                              </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-center">
                              <div>
                                  <p className="text-muted-foreground text-sm">RENT COLLECTED</p>
                                  <p className="text-2xl font-bold text-emerald-600">$0</p>
                              </div>
                              <div>
                                  <p className="text-muted-foreground text-sm">PAST DUE</p>
                                  <p className="text-2xl font-bold text-destructive">$0</p>
                              </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                              <Button variant="outline">RECORD PAYMENT</Button>
                              <Button variant="outline">SET UP PAYMENTS</Button>
                          </div>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                        <StatCard icon={<Users className="h-6 w-6"/>} value="0" label="Tenants" />
                        <StatCard icon={<FileText className="h-6 w-6"/>} value="0" label="Leases" />
                        <StatCard icon={<ClipboardCheck className="h-6 w-6"/>} value="0" label="Condition Reports" />
                        <StatCard icon={<PenSquare className="h-6 w-6"/>} value="0" label="E-Sign" />
                        <StatCard icon={<Users className="h-6 w-6"/>} value="0" label="Login" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                      <CardHeader>
                          <CardTitle className="flex items-center gap-2"><Wrench className="h-5 w-5 text-primary" /> What's on your Maintenance to-do list?</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                          <div className="flex gap-2">
                              <Input placeholder="Add a task" />
                              <Button variant="outline" size="icon"><ChevronRight className="h-4 w-4" /></Button>
                          </div>
                          <div className="flex flex-wrap gap-2">
                              <Badge variant="outline" className="cursor-pointer"><Plus className="h-3 w-3 mr-1" />New</Badge>
                              <Badge variant="outline" className="cursor-pointer"><Plus className="h-3 w-3 mr-1" />Air Filters</Badge>
                              <Badge variant="outline" className="cursor-pointer"><Plus className="h-3 w-3 mr-1" />Landscaping</Badge>
                              <Badge variant="outline" className="cursor-pointer"><Plus className="h-3 w-3 mr-1" />Check Exterior</Badge>
                              <Badge variant="outline" className="cursor-pointer"><Plus className="h-3 w-3 mr-1" />HVAC Checkup</Badge>
                          </div>
                          <Button variant="outline" className="w-full">CREATE REQUEST</Button>
                      </CardContent>
                  </Card>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4">
                    <Carousel className="w-full max-w-xs mx-auto">
                        <CarouselContent>
                            <CarouselItem>
                                <div className="text-center p-4">
                                    <LineChart className="h-10 w-10 mx-auto text-primary mb-4" />
                                    <h3 className="font-semibold text-lg">Using spreadsheets to track your finances?</h3>
                                    <p className="text-sm text-muted-foreground mt-2">Automatically track revenue, expenses, loans, and more! Get insights on your rentals and turn tax season into relax season.</p>
                                    <Button variant="outline" className="mt-4">UPGRADE YOUR ACCOUNTING</Button>
                                </div>
                            </CarouselItem>
                             <CarouselItem>
                                <div className="text-center p-4">
                                    <FileSignature className="h-10 w-10 mx-auto text-primary mb-4" />
                                    <h3 className="font-semibold text-lg">Simplify Your Leases</h3>
                                    <p className="text-sm text-muted-foreground mt-2">Create, sign, and manage all your lease agreements in one place with our E-Sign tools.</p>
                                    <Button variant="outline" className="mt-4">MANAGE LEASES</Button>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="absolute -left-8 top-1/2 -translate-y-1/2" />
                        <CarouselNext className="absolute -right-8 top-1/2 -translate-y-1/2" />
                    </Carousel>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-3 space-y-1">
                      <ActionItem icon={<UserSearch className="h-5 w-5"/>} text="Screen a Tenant" />
                      <ActionItem icon={<Send className="h-5 w-5"/>} text="Invite to Apply" />
                      <ActionItem icon={<FilePlus className="h-5 w-5"/>} text="Get a Lease Agreement" />
                      <ActionItem icon={<FilePlus className="h-5 w-5"/>} text="Build a Lease Addendum" />
                      <ActionItem icon={<FileSignature className="h-5 w-5"/>} text="E-Sign a Document" />
                      <ActionItem icon={<FileText className="h-5 w-5"/>} text="Get Landlord Forms" />
                      <ActionItem icon={<PlusCircle className="h-5 w-5"/>} text="Record an Expense" />
                      <ActionItem icon={<Download className="h-5 w-5"/>} text="Download the App" />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Floating Action Buttons */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12 bg-background shadow-lg">
                    <MessageSquare className="h-6 w-6 text-primary" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12 bg-background shadow-lg">
                    <HelpCircle className="h-6 w-6 text-primary" />
                </Button>
            </div>
        </div>
    )
}
