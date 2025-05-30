"use client"

import { Chart, useChart } from "@sh3yk0-ui/charts"
import {
  Bar,
  BarChart,
  CartesianGrid,
  ReferenceArea,
  ReferenceLine,
  Tooltip,
  XAxis,
} from "recharts"

export const BarChartWithReferenceLines = () => {
  const chart = useChart({
    data: [
      { sales: 63000, month: "June" },
      { sales: 72000, month: "July" },
      { sales: 85000, month: "August" },
      { sales: 79000, month: "September" },
      { sales: 90000, month: "October" },
      { sales: 95000, month: "November" },
      { sales: 88000, month: "December" },
    ],
    series: [{ name: "sales", color: "blue.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <BarChart data={chart.data}>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        <ReferenceArea
          y1={76000}
          y2={90000}
          fill={chart.color("red.muted")}
          fillOpacity={0.4}
          label={{
            value: "top line",
            position: "insideTopLeft",
            fill: chart.color("red.fg"),
          }}
        />
        <ReferenceLine
          y={80000}
          stroke={chart.color("red.fg")}
          strokeDasharray="3 3"
        />
        {chart.series.map((item) => (
          <Bar
            isAnimationActive={false}
            key={item.name}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.64}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}
