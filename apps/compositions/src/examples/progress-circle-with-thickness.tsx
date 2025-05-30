import { ProgressCircle } from "@sh3yk0-ui/react"

export const ProgressCircleWithThickness = () => {
  return (
    <ProgressCircle.Root value={75}>
      <ProgressCircle.Circle css={{ "--thickness": "2px" }}>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
  )
}
