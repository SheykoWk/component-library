"use client"

import { Chart, useChart } from "@sh3yk0-ui/charts"
import { Cell, Legend, RadialBar, RadialBarChart, Tooltip } from "recharts"

export const RadialChartWithLegend = () => {
  const chart = useChart({
    data: [
      { value: 165, month: "January", color: "teal.solid" },
      { value: 190, month: "February", color: "purple.solid" },
      { value: 195, month: "March", color: "blue.solid" },
      { value: 182, month: "May", color: "teal.solid" },
    ],
  })

  return (
    <Chart.Root maxW="sm" chart={chart} mx="auto">
      <RadialBarChart data={chart.data} barSize={20}>
        <Tooltip cursor={false} content={<Chart.Tooltip nameKey="month" />} />
        <Legend content={<Chart.Legend nameKey="month" />} />
        <RadialBar
          isAnimationActive={false}
          dataKey={chart.key("value")}
          background
          startAngle={90}
          endAngle={-270}
        >
          {chart.data.map(({ color }) => (
            <Cell key={color} fill={chart.color(color)} stroke="none" />
          ))}
        </RadialBar>
      </RadialBarChart>
    </Chart.Root>
  )
}
