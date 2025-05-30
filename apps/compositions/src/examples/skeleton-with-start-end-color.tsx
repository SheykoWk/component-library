import { Skeleton } from "@sh3yk0-ui/react"

export const SkeletonWithStartEndColor = () => {
  return (
    <Skeleton
      variant="shine"
      width="full"
      height="5"
      css={{
        "--start-color": "colors.pink.500",
        "--end-color": "colors.orange.500",
      }}
    />
  )
}
