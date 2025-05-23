import { Slider } from "@sh3yk0-ui/react"

export const SliderVertical = () => {
  return (
    <Slider.Root height="200px" orientation="vertical" defaultValue={[40]}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}
