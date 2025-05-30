import { NumberInput } from "@sh3yk0-ui/react"

export const NumberInputWithMinMax = () => {
  return (
    <NumberInput.Root width="200px" defaultValue="10" min={5} max={50}>
      <NumberInput.Control />
      <NumberInput.Input />
    </NumberInput.Root>
  )
}
