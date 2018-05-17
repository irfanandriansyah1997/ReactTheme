import { SET_THEME } from '../store/theme'

export function setTheme (theme) {
  return {
    type: SET_THEME,
    payload: {
      theme
    }
  }
}
