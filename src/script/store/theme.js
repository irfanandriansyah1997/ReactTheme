export const SET_THEME = 'SET_THEME'

const initial = {
  theme: 'light'
}

const ThemeReducers = (state = initial, action) => {
  switch (action.type) {
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
