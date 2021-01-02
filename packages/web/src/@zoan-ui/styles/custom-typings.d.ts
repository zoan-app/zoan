export interface SemanticColor {
  yellow: string
  green: string
  red: string
  purple: string
  tale: string
  smoke: string
  blue: string
  pale: string
}

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    semantic: SemanticColor
  }
  interface Palette {
    semantic: SemanticColor
  }
  interface TypeBackground {
    dark: string
    grey: string
  }
}
