export const SHOW_THEME = 'SHOW_THEME'
export const SET_THEME = 'SET_THEME'

const initial = {
  show: false,
  theme: 'light'
}

const ThemeReducers = (state = initial, action) => {
  switch (action.type) {
    case SHOW_THEME:
      return {
        ...state,
        show: action.payload.show
      }
    case SET_THEME:
      return {
        ...state,
        theme: action.payload.theme
      }
    default:
      return state
  }
}

export default ThemeReducers
