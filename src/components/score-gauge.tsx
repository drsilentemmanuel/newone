"use client"

import { useState, useEffect } from "react"
import { PieChart, Pie, Cell } from "recharts"

const GAUGE_DATA = [
  { name: "Poor", value: 1, color: "#6ee7b7" }, // emerald-300
  { name: "Fair", value: 1, color: "#34d399" }, // emerald-400
  { name: "Good", value: 1, color: "#10b981" }, // emerald-500
  { name: "Very Good", value: 1, color: "#059669" }, // emerald-600
  { name: "Excellent", value: 1, color: "#047857" }, // emerald-700
]

interface ScoreGaugeProps {
  score: number
  maxScore: number
}

export function ScoreGauge({ score, maxScore }: ScoreGaugeProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="relative h-[100px] w-[200px]">
      {isMounted ? (
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
      ) : (
        <div className="h-[100px] w-[200px]" /> // Placeholder to prevent layout shift
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-end">
        <span className="text-3xl font-bold text-emerald-600">{score}</span>
        <span className="text-xs text-muted-foreground">Credit Score</span>
      </div>
      <div className="absolute bottom-1 left-3 text-xs font-medium text-muted-foreground">0</div>
      <div className="absolute bottom-1 right-3 text-xs font-medium text-muted-foreground">{maxScore}</div>
    </div>
  )
}
