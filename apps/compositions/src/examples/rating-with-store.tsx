"use client"

import { RatingGroup, useRatingGroup } from "@sh3yk0-ui/react"

export const RatingWithStore = () => {
  const store = useRatingGroup({ count: 5, defaultValue: 3 })
  return (
    <RatingGroup.RootProvider value={store} size="sm">
      <RatingGroup.HiddenInput />
      <RatingGroup.Control />
    </RatingGroup.RootProvider>
  )
}
