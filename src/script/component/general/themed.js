import React from 'react'
import ThemeContext from '../../context/theme.context'

const getTheme = Component =>
  class ThemeComponent extends React.Component {
    render () {
      return (
        <ThemeContext.Consumer>
          {theme => (
            <React.Fragment>
              <Component {...this.props} theme={theme.theme} />
            </React.Fragment>
          )}
        </ThemeContext.Consumer>
      )
    }
  }

export default getTheme
