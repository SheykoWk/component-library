"use client"

import { Chart, useChart } from "@sh3yk0-ui/charts"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
} from "recharts"

export const AreaChartWithDashedArea = () => {
  const chart = useChart({
    data: [
      { windows: 186, mac: 80, linux: 120, month: "January" },
      { windows: 165, mac: 95, linux: 110, month: "February" },
      { windows: 190, mac: 87, linux: 125, month: "March" },
      { windows: 195, mac: 88, linux: 130, month: "May" },
      { windows: 182, mac: 98, linux: 122, month: "June" },
      { windows: 175, mac: 90, linux: 115, month: "August" },
      { windows: 180, mac: 86, linux: 124, month: "October" },
      { windows: 185, mac: 91, linux: 126, month: "November" },
    ],
    series: [
      { name: "windows", color: "teal.solid", strokeDasharray: "5 3" },
      { name: "mac", color: "orange.solid" },
      { name: "linux", color: "blue.solid" },
    ],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <AreaChart data={chart.data}>
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
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Area
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            stroke={chart.color(item.color)}
            strokeWidth={2}
            strokeDasharray={item.strokeDasharray}
            stackId="a"
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}
