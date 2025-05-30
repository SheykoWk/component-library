import { Button, ButtonGroup, Stack, Steps } from "@sh3yk0-ui/react"

export const StepsVertical = () => {
  return (
    <Steps.Root
      orientation="vertical"
      height="400px"
      defaultStep={1}
      count={steps.length}
    >
      <Steps.List>
        {steps.map((step, index) => (
          <Steps.Item key={index} index={index} title={step.title}>
            <Steps.Indicator />
            <Steps.Title>{step.title}</Steps.Title>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      <Stack>
        {steps.map((step, index) => (
          <Steps.Content key={index} index={index}>
            {step.description}
          </Steps.Content>
        ))}
        <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

        <ButtonGroup size="sm" variant="outline">
          <Steps.PrevTrigger asChild>
            <Button>Prev</Button>
          </Steps.PrevTrigger>
          <Steps.NextTrigger asChild>
            <Button>Next</Button>
          </Steps.NextTrigger>
        </ButtonGroup>
      </Stack>
    </Steps.Root>
  )
}

const steps = [
  {
    title: "Step 1",
    description: "Step 1 description",
  },
  {
    title: "Step 2",
    description: "Step 2 description",
  },
  {
    title: "Step 3",
    description: "Step 3 description",
  },
]
