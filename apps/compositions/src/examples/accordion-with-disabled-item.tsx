import { Accordion, Span } from "@sh3yk0-ui/react"

export const AccordionWithDisabledItem = () => {
  return (
    <Accordion.Root collapsible defaultValue={["b"]}>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.value} disabled={item.disabled}>
          <Accordion.ItemTrigger>
            <Span flex="1">{item.title}</Span>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

const items = [
  { value: "a", title: "First Item", text: "Some value 1..." },
  { value: "b", title: "Second Item", text: "Some value 2..." },
  { value: "c", title: "Third Item", text: "Some value 3...", disabled: true },
]
