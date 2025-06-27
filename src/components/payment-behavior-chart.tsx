
"use client"

import { useState, useEffect } from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Skeleton } from "@/components/ui/skeleton"

const chartData = [
  { month: "January", paidOnTime: 186, gracePeriod: 80, paidLate: 40, didNotPay: 20 },
  { month: "February", paidOnTime: 305, gracePeriod: 200, paidLate: 25, didNotPay: 10 },
  { month: "March", paidOnTime: 237, gracePeriod: 120, paidLate: 50, didNotPay: 5 },
  { month: "April", paidOnTime: 273, gracePeriod: 190, paidLate: 35, didNotPay: 15 },
  { month: "May", paidOnTime: 209, gracePeriod: 130, paidLate: 60, didNotPay: 8 },
  { month: "June", paidOnTime: 214, gracePeriod: 140, paidLate: 45, didNotPay: 12 },
]

const chartConfig = {
  paidOnTime: {
    label: "Paid on Time",
    color: "#10b981", // emerald-500
  },
  gracePeriod: {
    label: "Grace Period",
    color: "#f59e0b", // amber-500
  },
  paidLate: {
    label: "Paid Late",
    color: "#8b5cf6", // violet-500
  },
  didNotPay: {
    label: "Did Not Pay",
    color: "#ef4444", // red-500
  },
} satisfies ChartConfig

export function PaymentBehaviorChart() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <Skeleton className="h-[350px] w-full" />;
    }

  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
        <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis />
          <Tooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <Legend content={({ payload }) => (
              <div className="flex justify-center gap-4 mt-4 text-sm">
                {payload?.map((entry, index) => (
                  <div key={`item-${index}`} className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }}></span>
                    {entry.value}
                  </div>
                ))}
              </div>
            )} 
          />
          <Bar dataKey="paidOnTime" stackId="a" fill="var(--color-paidOnTime)" radius={[0, 0, 0, 0]} />
          <Bar dataKey="gracePeriod" stackId="a" fill="var(--color-gracePeriod)" radius={[0, 0, 0, 0]} />
          <Bar dataKey="paidLate" stackId="a" fill="var(--color-paidLate)" radius={[0, 0, 0, 0]} />
          <Bar dataKey="didNotPay" stackId="a" fill="var(--color-didNotPay)" radius={[4, 4, 0, 0]} />
        </BarChart>
    </ChartContainer>
  )
}
