import { FormatNumber, Text } from "@sh3yk0-ui/react"

export const FormatNumberWithPercentage = () => {
  return (
    <Text textStyle="lg">
      <FormatNumber
        value={0.145}
        style="percent"
        maximumFractionDigits={2}
        minimumFractionDigits={2}
      />
    </Text>
  )
}
