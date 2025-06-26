"use client"

import { PieChart, Pie, Cell } from "recharts"

interface ScoreGaugeProps {
  score: number
  maxScore: number
}

export function ScoreGauge({ score, maxScore }: ScoreGaugeProps) {
  const scoreRatio = score / maxScore
  const data = [
    { name: "score", value: scoreRatio },
    { name: "empty", value: 1 - scoreRatio },
  ]

  return (
    <div className="relative h-[120px] w-[240px] mx-auto">
      <PieChart width={240} height={120}>
        <Pie
          data={data}
          cx="50%"
          cy="100%"
          dataKey="value"
          innerRadius={70}
          outerRadius={90}
          startAngle={180}
          endAngle={0}
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={index === 0 ? 'hsl(var(--primary))' : 'hsl(var(--border))'} />
          ))}
        </Pie>
      </PieChart>
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-4">
        <span className="text-5xl font-bold text-foreground -mb-2">{score}</span>
        <span className="text-xs text-muted-foreground">Credit Score</span>
      </div>
      <div className="absolute bottom-0 left-4 text-sm font-medium text-muted-foreground">0</div>
      <div className="absolute bottom-0 right-4 text-sm font-medium text-muted-foreground">{maxScore}</div>
    </div>
  )
}
