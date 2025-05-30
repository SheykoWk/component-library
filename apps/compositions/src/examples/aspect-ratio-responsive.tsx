import { AspectRatio } from "@sh3yk0-ui/react"
import { DecorativeBox } from "compositions/lib/decorative-box"

export const AspectRatioResponsive = () => (
  <AspectRatio maxWidth="300px" ratio={{ base: 1, md: 16 / 9 }}>
    <DecorativeBox>Box</DecorativeBox>
  </AspectRatio>
)
