import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
const breakpoints = createBreakpoints({
    sm: "320px",
    m:"560px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
})
extendTheme({ breakpoints })