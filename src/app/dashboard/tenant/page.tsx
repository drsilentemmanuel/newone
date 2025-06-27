"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { GaugeCircle, Receipt, TrendingUp, PiggyBank, Smile, ArrowUpCircle } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const ScoreGauge = dynamic(() => import('@/components/score-gauge').then(mod => mod.ScoreGauge), {
  ssr: false,
  loading: () => <Skeleton className="h-[120px] w-[240px]" />,
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
        <Card className="col-span-1 flex flex-col">
          <CardHeader className="bg-gradient-to-br from-primary/90 to-primary/80 text-primary-foreground rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <GaugeCircle className="w-6 h-6" />
              <span>Score Report</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col justify-center items-center p-6 space-y-4">
            <Badge variant="outline" className="py-1 px-3 text-base border-primary/50 border-2 bg-primary/10 text-primary">
              <Smile className="w-5 h-5 mr-2" />
              <span className="font-semibold">VERY GOOD</span>
            </Badge>
            <ScoreGauge score={648} maxScore={999} />
          </CardContent>
        </Card>

        {/* Voucher Payments Card */}
        <Card className="col-span-1 flex flex-col">
          <CardHeader className="bg-gradient-to-br from-primary/90 to-primary/80 text-primary-foreground rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Receipt className="w-6 h-6" />
              <span>Voucher Payments</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4 flex-grow">
            <div className="flex justify-between items-center">
              <div className="text-sm">
                <span className="text-muted-foreground">Voucher status:</span>
                <span className="font-semibold text-primary ml-2">ACTIVE</span>
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
             <div className="space-y-2">
              <Progress value={25} />
              <div className="flex justify-between text-sm font-medium">
                <span>Paid <span className="text-primary">R300</span></span>
                <span>Goal <span className="text-muted-foreground">R1200</span></span>
              </div>
            </div>
          </CardContent>
           <CardFooter className="p-6 border-t flex-col items-stretch space-y-2">
             <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Monthly contribution:</span>
                <span className="font-semibold">R 100</span>
              </div>
              <Button variant="outline" className="w-full">View Payments</Button>
           </CardFooter>
        </Card>

        {/* Score Improvement Card */}
        <Card className="col-span-1 flex flex-col">
           <CardHeader className="bg-gradient-to-br from-primary/90 to-primary/80 text-primary-foreground rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              <span>Score Improvement</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 flex flex-col justify-between flex-grow">
             <div className="flex items-center gap-2 text-primary mb-2">
                <ArrowUpCircle className="w-7 h-7"/>
                <div>
                    <p className="text-xl font-bold">UP 0 POINTS</p>
                    <p className="text-xs text-muted-foreground -mt-1">this month</p>
                </div>
            </div>
            <ScoreImprovementChart />
          </CardContent>
        </Card>
        
        {/* Savings Available Card */}
        <Card className="col-span-1 flex flex-col">
          <CardHeader className="bg-gradient-to-br from-primary/90 to-primary/80 text-primary-foreground rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
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
