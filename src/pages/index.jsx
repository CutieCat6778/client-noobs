// 1. Import the utilities
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
})
// 3. Extend the theme
const theme = extendTheme({ breakpoints })

export { DashboardPage } from './DashboardPages/index.jsx';
export { LandingPage } from './LandingPages/index.jsx';