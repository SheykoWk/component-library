import { HStack } from "@sh3yk0-ui/react"
import { DecorativeBox } from "compositions/lib/decorative-box"

export const BoxWithHideFrom = () => (
  <HStack>
    <DecorativeBox bg="green.300" hideFrom="md" height="40px" flex="1" />
    <DecorativeBox height="40px" flex="1" />
  </HStack>
)
