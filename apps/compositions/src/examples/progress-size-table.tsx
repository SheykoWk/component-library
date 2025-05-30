"use client"

import { For, Progress, Span, useSlotRecipe } from "@sh3yk0-ui/react"
import { colorPalettes } from "compositions/lib/color-palettes"
import { PlaygroundTable } from "compositions/lib/playground-table"

export const ProgressSizeTable = () => {
  const recipe = useSlotRecipe({ key: "progress" })
  return (
    <PlaygroundTable>
      <thead>
        <tr>
          <td />
          <For each={recipe.variantMap.size}>{(v) => <td>{v}</td>}</For>
        </tr>
      </thead>
      <tbody>
        <For each={colorPalettes}>
          {(c) => (
            <tr>
              <td>
                <Span fontSize="sm" color="fg.muted" minW="8ch">
                  {c}
                </Span>
              </td>
              <For each={recipe.variantMap.size}>
                {(v) => (
                  <td>
                    <Progress.Root
                      minW="200px"
                      colorPalette={c}
                      size={v}
                      value={65}
                    >
                      <Progress.Track>
                        <Progress.Range />
                      </Progress.Track>
                    </Progress.Root>
                  </td>
                )}
              </For>
            </tr>
          )}
        </For>
      </tbody>
    </PlaygroundTable>
  )
}
