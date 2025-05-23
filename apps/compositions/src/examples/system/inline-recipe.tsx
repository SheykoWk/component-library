import type {
  HTMLChakraProps,
  RecipeVariantProps,
  UnstyledProp,
} from "@sh3yk0-ui/react"
import { createRecipeContext, defineRecipe } from "@sh3yk0-ui/react"

const buttonRecipe = defineRecipe({
  className: "button",
  base: {
    padding: "10px",
    borderRadius: "4px",
    backgroundColor: "red",
    color: "white",
  },
  variants: {
    bold: {
      true: {
        fontWeight: "bold",
      },
    },
  },
})

const { withContext } = createRecipeContext({
  recipe: buttonRecipe,
})

interface ButtonProps
  extends HTMLChakraProps<"button", RecipeVariantProps<typeof buttonRecipe>>,
    UnstyledProp {}

const Button = withContext<HTMLButtonElement, ButtonProps>("button")

export const SystemInlineRecipe = () => {
  return <Button bold>Welcome</Button>
}
