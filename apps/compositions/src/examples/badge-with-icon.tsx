import { Badge, Stack } from "@sh3yk0-ui/react"
import { HiAtSymbol, HiStar } from "react-icons/hi"

export const BadgeWithIcon = () => {
  return (
    <Stack align="flex-start">
      <Badge variant="solid" colorPalette="blue">
        <HiStar />
        New
      </Badge>
      <Badge variant="solid" colorPalette="green">
        New
        <HiAtSymbol />
      </Badge>
    </Stack>
  )
}
