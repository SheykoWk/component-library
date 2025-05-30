import { Badge, Stack } from "@sh3yk0-ui/react"

export const BadgeWithVariants = () => {
  return (
    <Stack direction="row">
      <Badge variant="outline">Outline</Badge>
      <Badge variant="solid">Solid</Badge>
      <Badge variant="subtle">Subtle</Badge>
      <Badge variant="surface">Surface</Badge>
    </Stack>
  )
}
