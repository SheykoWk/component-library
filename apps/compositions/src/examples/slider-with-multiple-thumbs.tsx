import { Slider } from "@sh3yk0-ui/react"

export const SliderWithMultipleThumbs = () => {
  return (
    <Slider.Root width="200px" defaultValue={[30, 60]}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}
