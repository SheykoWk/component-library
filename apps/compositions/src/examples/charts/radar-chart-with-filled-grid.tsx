"use client"

import { Chart, useChart } from "@sh3yk0-ui/charts"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

export const RadarChartWithFilledGrid = () => {
  const chart = useChart({
    data: [
      { windows: 110, month: "January" },
      { windows: 130, month: "February" },
      { windows: 110, month: "March" },
      { windows: 90, month: "May" },
      { windows: 75, month: "June" },
    ],
    series: [{ name: "windows", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxW="sm" chart={chart} mx="auto">
      <RadarChart data={chart.data}>
        <PolarGrid
          stroke="none"
          style={{ fill: chart.color("teal.solid"), fillOpacity: 0.1 }}
        />
        <PolarAngleAxis dataKey={chart.key("month")} />
        {chart.series.map((item) => (
          <Radar
            dot={{ fillOpacity: 1 }}
            isAnimationActive={false}
            key={item.name}
            name={item.name}
            dataKey={chart.key(item.name)}
            stroke={chart.color(item.color)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
          />
        ))}
      </RadarChart>
    </Chart.Root>
  )
}
