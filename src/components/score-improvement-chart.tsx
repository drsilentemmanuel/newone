"use client"

import { AreaChart, Area, XAxis, ResponsiveContainer, ReferenceDot, YAxis, CartesianGrid } from 'recharts';

const data = [
  { name: 'Apr', value: 420 },
  { name: 'May', value: 580 },
  { name: 'Jun', value: 648 },
];

const yellowColor = "#FBBF24"; // tailwind yellow-400

export function ScoreImprovementChart() {
  return (
    <div className="h-40 w-[calc(100%+3rem)] -ml-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
           <defs>
            <linearGradient id="chartGradientYellow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={yellowColor} stopOpacity={0.6}/>
              <stop offset="95%" stopColor={yellowColor} stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="rgba(107, 114, 128, 0.3)" 
            horizontal={false} 
            verticalPoints={[115, 205, 295]} // Manual points for grid lines
          />
          <XAxis 
            dataKey="name" 
            tickLine={false} 
            axisLine={false} 
            tick={{ fontSize: 12, fill: 'rgb(55 65 81)' }} 
            interval={0}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis hide={true} domain={['dataMin - 100', 'dataMax + 100']} />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke={yellowColor}
            strokeWidth={4}
            fillOpacity={1} 
            fill="url(#chartGradientYellow)" 
            dot={false}
          />
          <ReferenceDot 
            x="Jun" 
            y={648} 
            r={8} 
            fill={yellowColor}
            stroke="white" 
            strokeWidth={3} 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
