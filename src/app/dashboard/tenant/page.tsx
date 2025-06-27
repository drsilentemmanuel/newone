"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Receipt, TrendingUp, PiggyBank, ArrowUpCircle, Smile } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const ScoreGauge = dynamic(() => import('@/components/score-gauge').then(mod => mod.ScoreGauge), {
  ssr: false,
  loading: () => <Skeleton className="h-[100px] w-[200px]" />,
});

const ScoreImprovementChart = dynamic(() => import('@/components/score-improvement-chart').then(mod => mod.ScoreImprovementChart), {
  ssr: false,
  loading: () => <Skeleton className="h-40 w-full" />,
});


export default function TenantDashboardPage() {
  return (
    <div className="space-y-6">
       <div className="space-y-2">
        <h1 className="text-3xl font-bold font-headline">My Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here is your financial overview.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Score Report Card */}
        <Card className="col-span-1 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-4">
                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
                    <span>Score Report</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center p-6 space-y-6 bg-card">
                <ScoreGauge score={648} maxScore={999} />
                <Badge variant="outline" className="py-2 px-4 text-base font-semibold border-gray-200 shadow-sm bg-white hover:bg-gray-50 text-green-600">
                    <Smile className="w-6 h-6 mr-2" />
                    VERY GOOD
                </Badge>
            </CardContent>
        </Card>

        {/* Voucher Payments Card */}
        <Card className="col-span-1 flex flex-col">
          <CardHeader className="bg-gradient-to-r from-red-500 to-orange-400 text-white p-4">
            <CardTitle className="flex items-center gap-2 text-base font-semibold">
              <Receipt className="w-6 h-6" />
              <span>Voucher Payments</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4 flex-grow">
            <div className="flex justify-between items-center">
              <div className="text-sm">
                <span className="text-muted-foreground">Voucher status:</span>
                <span className="font-semibold ml-2">ACTIVE</span>
              </div>
              <Button variant="destructive" size="sm">Pay Now</Button>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last payment:</span>
                <span className="font-medium">2025-05-28</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Next payment:</span>
                <span className="font-medium">2025-06-28</span>
              </div>
            </div>
            <div className="relative pt-8 pb-10 mt-4">
                <div className="absolute top-0 right-0 text-right">
                    <p className="text-xs text-muted-foreground">Goal</p>
                    <p className="font-bold text-2xl">R1200</p>
                </div>
                <div className="flex items-center gap-1">
                    {Array.from({ length: 18 }).map((_, i) => (
                        <div key={i} className={`h-2.5 flex-1 rounded-sm ${i < 3 ? 'bg-orange-400' : 'bg-gray-200 dark:bg-gray-700'}`} />
                    ))}
                </div>
                <div className="absolute bottom-0 left-0">
                    <p className="text-xs text-orange-500 font-semibold">Paid</p>
                    <p className="font-bold text-2xl text-orange-500">R300</p>
                </div>
            </div>
          </CardContent>
           <CardFooter className="p-6 border-t flex-col items-stretch space-y-2">
             <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Monthly contribution:</span>
                <span className="font-semibold">R 100</span>
              </div>
              <Button className="w-full bg-orange-500 text-primary-foreground hover:bg-orange-600">View Payments</Button>
           </CardFooter>
        </Card>

        {/* Score Improvement Card */}
        <Card className="col-span-1 flex flex-col overflow-hidden">
           <CardHeader className="bg-gradient-to-r from-red-500 to-orange-400 text-white p-4">
            <CardTitle className="flex items-center gap-2 text-base font-semibold">
              <TrendingUp className="w-6 h-6" />
              <span>Score Improvement</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 flex flex-col justify-between flex-grow bg-gradient-to-b from-orange-300 via-yellow-200 to-yellow-300 relative">
             <div className="flex items-center gap-2 text-red-600 mb-2">
                <ArrowUpCircle className="w-7 h-7"/>
                <div>
                    <p className="text-xl font-bold">UP 0 POINTS</p>
                    <p className="text-xs text-gray-700 font-medium -mt-1">this month</p>
                </div>
            </div>
            <div className="absolute top-6 right-6 text-right">
                <p className="text-xl font-bold text-gray-800">Today</p>
            </div>
            <ScoreImprovementChart />
          </CardContent>
        </Card>
        
        {/* Savings Available Card */}
        <Card className="col-span-1 flex flex-col">
          <CardHeader className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-4">
            <CardTitle className="flex items-center gap-2 text-base font-semibold">
              <PiggyBank className="w-6 h-6" />
              <span>Savings Available</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow items-center justify-center p-6 space-y-4">
            <p className="text-5xl font-bold tracking-tight">R286.22</p>
            <Button variant="destructive" className="w-full max-w-xs">Cash Out</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
