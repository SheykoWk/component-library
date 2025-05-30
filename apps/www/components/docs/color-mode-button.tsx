"use client"

import { ClientOnly, IconButton, Skeleton } from "@sh3yk0-ui/react"
import { useTheme } from "next-themes"
import { LuMoon, LuSun } from "react-icons/lu"

export const ColorModeButton = () => {
  const { theme, setTheme } = useTheme()
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <ClientOnly fallback={<Skeleton boxSize="9" />}>
      <IconButton
        onClick={handleClick}
        variant="ghost"
        size="sm"
        colorPalette="gray"
      >
        {theme === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </ClientOnly>
  )
}
