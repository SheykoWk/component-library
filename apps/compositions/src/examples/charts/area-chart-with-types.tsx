"use client"

import { Chart, useChart } from "@sh3yk0-ui/charts"
import { For, SimpleGrid, Stack, Text } from "@sh3yk0-ui/react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

const curveTypes = [
  "linear",
  "bump",
  "basis",
  "step",
  "stepBefore",
  "stepAfter",
  "natural",
  "monotone",
] as const

export const AreaChartWithTypes = () => {
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
      { name: "windows", color: "teal.solid" },
      { name: "mac", color: "orange.solid" },
      { name: "linux", color: "blue.solid" },
    ],
  })

  return (
    <SimpleGrid gap="10" minChildWidth="400px">
      <For each={curveTypes}>
        {(type) => (
          <Stack key={type.toString()} gap="4">
            <Text textStyle="sm" fontWeight="semibold" ms="8">
              {`<Area type="${type}" />`}
            </Text>
            <Chart.Root maxH="sm" chart={chart}>
              <AreaChart accessibilityLayer data={chart.data}>
                <CartesianGrid
                  stroke={chart.color("border")}
                  vertical={false}
                />
                <XAxis
                  dataKey={chart.key("month")}
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis tickLine={false} axisLine={false} />
                {chart.series.map((item) => (
                  <Area
                    type={type}
                    key={item.name}
                    isAnimationActive={false}
                    dataKey={chart.key(item.name)}
                    fill={chart.color(item.color)}
                    fillOpacity={0.8}
                    activeDot={{ fill: chart.color(item.color) }}
                    stroke={chart.color("white")}
                    strokeWidth={3}
                    stackId="a"
                  />
                ))}
              </AreaChart>
            </Chart.Root>
          </Stack>
        )}
      </For>
    </SimpleGrid>
  )
}
