"use client"

import { AreaChart, Area, XAxis, ResponsiveContainer, CartesianGrid, ReferenceDot } from 'recharts';

const data = [
  { name: 'Apr', value: 420 },
  { name: 'May', value: 580 },
  { name: 'Jun', value: 648 },
];

export function ScoreImprovementChart() {
  return (
    <div className="h-40 relative">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
           <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.05}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="name" 
            tickLine={false} 
            axisLine={false} 
            tick={{ fontSize: 12 }} 
            interval="preserveStartEnd"
            padding={{ left: 10, right: 10 }}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="hsl(var(--primary))" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#chartGradient)" 
            dot={false}
          />
          <ReferenceDot 
            x="Jun" 
            y={648} 
            r={8} 
            fill="hsl(var(--primary))" 
            stroke="hsl(var(--background))" 
            strokeWidth={3} 
          />
        </AreaChart>
      </ResponsiveContainer>
       <div className="absolute top-0 right-4 text-right">
        <p className="text-xl font-bold">Today</p>
      </div>
    </div>
  );
}
