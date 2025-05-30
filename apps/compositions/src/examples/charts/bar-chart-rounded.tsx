"use client"

import { Chart, useChart } from "@sh3yk0-ui/charts"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

export const BarChartRounded = () => {
  const chart = useChart({
    data: [
      { allocation: 60, type: "Stock" },
      { allocation: 45, type: "Crypto" },
      { allocation: 12, type: "ETF" },
      { allocation: 4, type: "Cash" },
    ],
    series: [{ name: "allocation", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <BarChart data={chart.data} barSize={40}>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <XAxis axisLine={false} tickLine={false} dataKey={chart.key("type")} />
        <YAxis
          axisLine={false}
          tickLine={false}
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
        />
        {chart.series.map((item) => (
          <Bar
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            radius={10}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}
