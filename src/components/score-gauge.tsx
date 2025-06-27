"use client"

import { PieChart, Pie, Cell } from "recharts"

const GAUGE_DATA = [
  { name: "Poor", value: 1, color: "#ef4444" }, // red-500
  { name: "Fair", value: 1, color: "#f97316" }, // orange-500
  { name: "Good", value: 1, color: "#facc15" }, // yellow-400
  { name: "Very Good", value: 1, color: "#a3e635" }, // lime-400
  { name: "Excellent", value: 1, color: "#22c55e" }, // green-500
]

interface ScoreGaugeProps {
  score: number
  maxScore: number
}

export function ScoreGauge({ score, maxScore }: ScoreGaugeProps) {
  return (
    <div className="relative h-[100px] w-[200px]">
      <PieChart width={200} height={100} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <Pie
          data={GAUGE_DATA}
          cx="50%"
          cy="100%"
          dataKey="value"
          innerRadius={60}
          outerRadius={80}
          startAngle={180}
          endAngle={0}
          paddingAngle={2}
          stroke="none"
        >
          {GAUGE_DATA.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
        <span className="text-4xl font-bold text-foreground -mb-1">{score}</span>
        <span className="text-xs text-muted-foreground">Credit Score</span>
      </div>
      <div className="absolute bottom-0 left-2 text-xs font-medium text-muted-foreground">0</div>
      <div className="absolute bottom-0 right-2 text-xs font-medium text-muted-foreground">{maxScore}</div>
    </div>
  )
}
