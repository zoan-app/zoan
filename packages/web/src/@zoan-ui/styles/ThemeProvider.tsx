import { FC } from 'react'

import {
  CssBaseline,
  makeStyles,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core'

import { light } from './theme'

export type ThemeProviderProps = {}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  return (
    <MuiThemeProvider theme={light}>
      <CssBaseline />
      <WithGlobalCSS>{props.children}</WithGlobalCSS>
    </MuiThemeProvider>
  )
}

const WithGlobalCSS: FC = ({ children }) => {
  useGlobalCss()

  return <>{children}</>
}

const useGlobalCss = makeStyles(({ palette }) => ({
  '@global': {
    a: {
      color: palette.primary.main,
    },
  },
}))
