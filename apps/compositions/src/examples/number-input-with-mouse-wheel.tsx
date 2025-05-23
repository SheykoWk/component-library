import { NumberInput } from "@sh3yk0-ui/react"

export const NumberInputWithMouseWheel = () => {
  return (
    <NumberInput.Root defaultValue="10" width="200px" allowMouseWheel>
      <NumberInput.Control />
      <NumberInput.Input />
    </NumberInput.Root>
  )
}
