"use client"

import { createIcon } from "@sh3yk0-ui/react"

const HeartIcon = createIcon({
  displayName: "HeartIcon",
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        fill="currentColor"
        d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
      />
    </>
  ),
})

export const IconWithCreateIcon = () => {
  return <HeartIcon size="lg" color="blue.400" />
}
