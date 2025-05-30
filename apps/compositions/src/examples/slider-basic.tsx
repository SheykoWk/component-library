import { Slider } from "@sh3yk0-ui/react"

export const SliderBasic = () => {
  return (
    <Slider.Root width="200px" defaultValue={[40]}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}
