import { createMuiTheme, ThemeOptions } from '@material-ui/core'
import Check from '@material-ui/icons/Check'
import Color from 'color'

const BASE_FONT_SIZE = 16
const BORDER_RADIUS = 8
const BUTTON_UPPER_CASED = false
const REGULAR_FONT_FAMILY = '"Barlow"'
const HEADING_FONT_FAMILY = REGULAR_FONT_FAMILY
const PRIMARY_COLOR_MAIN = '#3554A1'
const PRIMARY_COLOR_LIGHT = Color(PRIMARY_COLOR_MAIN).lighten(0.2).string()
const PRIMARY_COLOR_DARK = Color(PRIMARY_COLOR_MAIN).darken(0.2).string()
const SECONDARY_COLOR_MAIN = '#C13C4F'
const SECONDARY_COLOR_LIGHT = Color(SECONDARY_COLOR_MAIN).lighten(0.2).string()
const SECONDARY_COLOR_DARK = Color(SECONDARY_COLOR_MAIN).darken(0.2).string()
const SPACING = 8

/** @see https://github.com/targeek/guru-erp/blob/master/packages/guru-ui-mui/src/themes/themes.tsx */
export const createZoanTheme = () => {
  const palette: ThemeOptions['palette'] = {
    primary: {
      main: PRIMARY_COLOR_MAIN,
      light: PRIMARY_COLOR_LIGHT,
      dark: PRIMARY_COLOR_DARK,
    },
    secondary: {
      main: SECONDARY_COLOR_MAIN,
      light: SECONDARY_COLOR_LIGHT,
      dark: SECONDARY_COLOR_DARK,
    },
    background: {
      paper: '#FFFFFF',
      default: '#F0F2F8',
    },
    semantic: {
      yellow: '#FFAB00',
      green: '#36B37E',
      red: '#FF5630',
      purple: '#6554C0',
      tale: '#00B8D9',
      smoke: '#CECECE',
      blue: '#0065FF',
      pale: '#1582C0',
    },
    divider: '#B6B7BC',
  }

  const shadows: ThemeOptions['shadows'] = [
    'none',
    '0px 0px 20px rgba(0, 0, 0, 0.1)',
    '0px 5px 20px rgba(0, 0, 0, 0.2)',
    '0px 10px 25px rgba(0, 0, 0, 0.3)',
    '0px 15px 30px rgba(0, 0, 0, 0.4)',
    '0px 20px 30px rgba(0, 0, 0, 0.4)',
    '0px 21px 31px rgba(0, 0, 0, 0.4)',
    '0px 22px 32px rgba(0, 0, 0, 0.4)',
    '0px 23px 33px rgba(0, 0, 0, 0.4)',
    '0px 24px 34px rgba(0, 0, 0, 0.4)',
    '0px 25px 35px rgba(0, 0, 0, 0.4)',
    '0px 25px 35px rgba(0, 0, 0, 0.4)',
    '0px 25px 35px rgba(0, 0, 0, 0.4)',
    '0px 25px 35px rgba(0, 0, 0, 0.4)',
    '0px 25px 35px rgba(0, 0, 0, 0.4)',
    '0px 25px 35px rgba(0, 0, 0, 0.4)',
    '0px 25px 35px rgba(0, 0, 0, 0.4)',
    '0px 25px 35px rgba(0, 0, 0, 0.4)',
    '0px 25px 35px rgba(0, 0, 0, 0.4)',
    '0px 25px 35px rgba(0, 0, 0, 0.4)',
    '0px 25px 35px rgba(0, 0, 0, 0.4)',
    '0px 25px 35px rgba(0, 0, 0, 0.4)',
    '0px 25px 35px rgba(0, 0, 0, 0.4)',
    '0px 25px 35px rgba(0, 0, 0, 0.4)',
    '0px 25px 35px rgba(0, 0, 0, 0.4)',
  ]

  const shape: ThemeOptions['shape'] = { borderRadius: BORDER_RADIUS }

  const regularFontFamily = `${REGULAR_FONT_FAMILY}, sans-serif`
  const headingFontFamily = regularFontFamily
  const headingFontOptions = { fontFamily: headingFontFamily }

  const typography: ThemeOptions['typography'] = {
    htmlFontSize: BASE_FONT_SIZE,
    body1: { fontFamily: regularFontFamily },
    body2: { fontFamily: regularFontFamily },
    caption: { fontFamily: regularFontFamily },
    h1: headingFontOptions,
    h2: headingFontOptions,
    h3: headingFontOptions,
    h4: headingFontOptions,
    h5: headingFontOptions,
    h6: headingFontOptions,
    subtitle1: headingFontOptions,
    subtitle2: headingFontOptions,
    button: {
      ...headingFontOptions,
      fontWeight: 'bold',
      textTransform: BUTTON_UPPER_CASED ? 'uppercase' : 'none',
      letterSpacing: 'normal',
    },
  }

  const muiTheme = createMuiTheme({
    palette,
    shape,
    shadows,
    typography,
    spacing: SPACING,
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            height: 44,
            marginTop: 0,
            letterSpacing: '0.05rem',
            textTransform: BUTTON_UPPER_CASED ? 'uppercase' : 'none',
          },
          label: {
            userSelect: 'none !important' as any,
          },
          sizeSmall: {
            height: 38,
          },
          sizeLarge: {
            height: 56,
          },
          text: {
            '&:active': {
              backgroundColor: Color('#FFF').darken(0.1).string(),
            },
          },
          textPrimary: {
            '&:active': {
              backgroundColor: Color(PRIMARY_COLOR_MAIN).alpha(0.1).string(),
            },
          },
          textSecondary: {
            '&:active': {
              backgroundColor: Color(SECONDARY_COLOR_MAIN).alpha(0.1).string(),
            },
          },
          contained: {
            boxShadow: shadows[1],
            backgroundColor: '#FFF',
            '&:hover': {
              boxShadow: shadows[2],
              backgroundColor: '#FFF',
            },
            '&:active': {
              boxShadow: shadows[3],
            },
          },
          containedPrimary: {
            '&:active': {
              backgroundColor: PRIMARY_COLOR_DARK,
            },
          },
          containedSecondary: {
            '&:active': {
              backgroundColor: SECONDARY_COLOR_DARK,
            },
          },
        },
      },
      MuiContainer: {
        defaultProps: { maxWidth: 'md' },
      },
      MuiPaper: {
        styleOverrides: {
          elevation1: {
            boxShadow: shadows[1],
          },
          elevation2: {
            boxShadow: shadows[2],
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            fontFamily: HEADING_FONT_FAMILY,
          },
        },
      },
      MuiFilledInput: {
        defaultProps: {
          disableUnderline: true,
        },
        styleOverrides: {
          root: {
            borderRadius: shape.borderRadius,
          },
        },
      },
      MuiCheckbox: {
        defaultProps: {
          disableRipple: true,
          disableFocusRipple: true,
          color: 'primary',
          icon: <span className="icon" />,
          checkedIcon: (
            <span className="icon checked">
              <Check />
            </span>
          ),
        },
        styleOverrides: {
          root: {
            backgroundColor: 'transparent !important',
            '& .icon': {
              borderRadius: 6,
              backgroundColor: '#F0F2F8',
              height: 18,
              width: 18,
              margin: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '& > svg': {
                padding: 4,
                stroke: 'currentColor',
                strokeWidth: 1.5,
              },

              '&.checked': {
                border: `solid 2px currentColor !important`,
              },
            },
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          fullWidth: true,
          variant: 'filled',
        },
      },
    },
  })

  return muiTheme
}

export const light = createZoanTheme()
