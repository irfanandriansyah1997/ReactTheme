import { SHOW_THEME, SET_THEME } from '../store/theme'

export function showTheme (show) {
  return {
    type: SHOW_THEME,
    payload: {
      show
    }
  }
}

export function setTheme (theme) {
  return {
    type: SET_THEME,
    payload: {
      theme
    }
  }
}
