import { For, HStack, Switch } from "@sh3yk0-ui/react"

export const SwitchWithSizes = () => {
  return (
    <HStack gap="8">
      <For each={["xs", "sm", "md", "lg"]}>
        {(size) => (
          <Switch.Root key={size} size={size}>
            <Switch.HiddenInput />
            <Switch.Control />
            <Switch.Label />
          </Switch.Root>
        )}
      </For>
    </HStack>
  )
}
