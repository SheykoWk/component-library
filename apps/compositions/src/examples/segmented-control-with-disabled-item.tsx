import { SegmentGroup } from "@sh3yk0-ui/react"

export const SegmentedControlWithDisabledItem = () => {
  return (
    <SegmentGroup.Root defaultValue="React">
      <SegmentGroup.Indicator />
      <SegmentGroup.Items
        items={[
          { label: "React", value: "React" },
          { label: "Vue", value: "Vue", disabled: true },
          { label: "Solid", value: "Solid" },
        ]}
      />
    </SegmentGroup.Root>
  )
}
