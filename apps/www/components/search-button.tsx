import {
  Button,
  ButtonProps,
  Icon,
  IconButton,
  Kbd,
  Span,
} from "@sh3yk0-ui/react"
import { forwardRef } from "react"
import { LuSearch } from "react-icons/lu"

export const SearchButton = forwardRef<HTMLButtonElement, ButtonProps>(
  function SearchButton(props, ref) {
    return (
      <Button variant="subtle" color="fg.muted!" ref={ref} {...props}>
        <Icon ms="-1">
          <LuSearch />
        </Icon>
        <Span
          ms="1"
          fontWeight="normal"
          flex="1"
          minW="0"
          textAlign="start"
          textOverflow="ellipsis"
          overflow="hidden"
        >
          Search...
        </Span>
        <Kbd
          variant="outline"
          bg="bg"
          fontSize="0.8em"
          letterSpacing="widest"
          me="-1"
        >
          ⌘K
        </Kbd>
      </Button>
    )
  },
)

export const MobileSearchButton = forwardRef<HTMLButtonElement, ButtonProps>(
  function SearchButton(props, ref) {
    return (
      <IconButton variant="ghost" size="sm" ref={ref} {...props}>
        <LuSearch />
      </IconButton>
    )
  },
)
