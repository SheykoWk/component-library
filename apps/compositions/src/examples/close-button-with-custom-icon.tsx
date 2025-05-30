import { CloseButton } from "@sh3yy0-ui/react"
import { HiX } from "react-icons/hi"

export const CloseButtonWithCustomIcon = () => {
  return (
    <CloseButton variant="ghost" aria-label="Close">
      <HiX />
    </CloseButton>
  )
}
