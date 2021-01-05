import { FC } from 'react'

import {
  CssBaseline,
  makeStyles,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core'

import { light } from './theme'

const useGlobalCss = makeStyles(({ palette }) => ({
  '@global': {
    a: {
      color: palette.primary.main,
    },
  },
}))

const WithGlobalCSS: FC = ({ children }) => {
  useGlobalCss()

  return <>{children}</>
}

export type ThemeProviderProps = {}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children } = props

  return (
    <MuiThemeProvider theme={light}>
      <CssBaseline />
      <WithGlobalCSS>{children}</WithGlobalCSS>
    </MuiThemeProvider>
  )
}
