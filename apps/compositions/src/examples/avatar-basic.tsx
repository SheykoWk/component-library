import { Avatar } from "@sh3yk0-ui/react"

export const AvatarBasic = () => {
  return (
    <Avatar.Root>
      <Avatar.Fallback name="Segun Adebayo" />
      <Avatar.Image src="https://bit.ly/sage-adebayo" />
    </Avatar.Root>
  )
}
