"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, ArrowUpCircle } from 'lucide-react';
import { AreaChart, Area, XAxis, ResponsiveContainer, ReferenceDot, YAxis, CartesianGrid } from 'recharts';
import { Skeleton } from "@/components/ui/skeleton";

const data = [
  { name: 'Apr', value: 420 },
  { name: 'May', value: 580 },
  { name: 'Jun', value: 648 },
];

export function ScoreImprovementChart() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Card className="overflow-hidden shadow-md text-white bg-gradient-to-br from-primary to-accent">
      <CardHeader className="flex flex-row items-center gap-3 p-4">
        <TrendingUp className="h-6 w-6" />
        <CardTitle className="!text-xl font-semibold">Score Improvement</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center gap-2 mb-4">
          <ArrowUpCircle className="h-6 w-6" />
          <div>
            <p className="text-lg font-bold">UP 0 POINTS</p>
            <p className="text-xs opacity-80">this month</p>
          </div>
          <p className="ml-auto text-lg font-semibold">Today</p>
        </div>
        <div className="h-32 -ml-4 -mr-4 -mb-4">
          {isMounted ? (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                <YAxis hide={true} domain={['dataMin - 100', 'dataMax + 50']} />
                <XAxis 
                  dataKey="name" 
                  tickLine={false} 
                  axisLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 12 }} 
                  interval={0}
                  padding={{ left: 20, right: 20 }}
                />
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke="rgba(255, 255, 255, 0.2)" 
                  vertical={true}
                  horizontal={false}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#FFFFFF" 
                  strokeWidth={3}
                  fillOpacity={0.2}
                  fill="#FFFFFF"
                  dot={false}
                  activeDot={false}
                />
                 <ReferenceDot 
                  x="Jun" 
                  y={648} 
                  r={8}
                  fill="white"
                  stroke="none"
                />
                 <ReferenceDot 
                  x="Jun" 
                  y={648} 
                  r={4}
                  fill="#3b82f6"
                  stroke="none"
                />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <Skeleton className="h-32 w-full bg-white/10" />
          )}
        </div>
      </CardContent>
    </Card>
  )
}
