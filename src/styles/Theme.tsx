import { ReactNode } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    white: '#FFFFFF',
    blue: '#132043',
  },
}

interface ThemeProps {
  children: ReactNode
}

function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
