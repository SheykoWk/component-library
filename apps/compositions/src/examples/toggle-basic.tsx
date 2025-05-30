import { Button, Toggle } from "@sh3yk0-ui/react"
import { LuBold } from "react-icons/lu"

export const ToggleBasic = () => {
  return (
    <Toggle.Root px="0" asChild>
      <Button variant={{ base: "subtle", _pressed: "solid" }}>
        <LuBold />
      </Button>
    </Toggle.Root>
  )
}
