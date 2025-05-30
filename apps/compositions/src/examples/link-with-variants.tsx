import { Link, Stack } from "@sh3yk0-ui/react"

export const LinkWithVariants = () => {
  return (
    <Stack>
      <Link variant="underline" href="#">
        Link (Underline)
      </Link>
      <Link variant="plain" href="#">
        Link (Plain)
      </Link>
    </Stack>
  )
}
