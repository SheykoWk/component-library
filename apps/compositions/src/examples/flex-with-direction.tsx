import { Flex } from "@sh3yk0-ui/react"
import { DecorativeBox } from "compositions/lib/decorative-box"

export const FlexWithDirection = () => {
  return (
    <Flex gap="4" direction="column">
      <DecorativeBox height="10" />
      <DecorativeBox height="10" />
      <DecorativeBox height="10" />
    </Flex>
  )
}
