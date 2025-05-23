import { DataList } from "@sh3yk0-ui/react"
import { InfoTip } from "compositions/ui/toggle-tip"

const stats = [
  { label: "New Users", value: "234", diff: -12, helpText: "Till date" },
  { label: "Sales", value: "£12,340", diff: 12, helpText: "Last 30 days" },
  { label: "Revenue", value: "3,450", diff: 4.5, helpText: "Last 30 days" },
]

export const DataListWithInfo = () => {
  return (
    <DataList.Root orientation="horizontal">
      {stats.map((item) => (
        <DataList.Item key={item.label}>
          <DataList.ItemLabel>
            {item.label}
            <InfoTip>This is some info</InfoTip>
          </DataList.ItemLabel>
          <DataList.ItemValue>{item.value}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList.Root>
  )
}
