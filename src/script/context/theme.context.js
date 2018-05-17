import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = React.createContext({
  theme: 'light',
  setTheme: data => {
    console.log(data)
  }
})

export default ThemeContext

export class AppProvider extends Component {
  componentWillMount () {
    this.setState({
      theme: 'light',
      setTheme: theme => {
        this.setState({ theme })
      }
    })
  }

  render () {
    const { theme, setTheme } = this.state
    return (
      <React.Fragment>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          {this.props.children}
        </ThemeContext.Provider>
      </React.Fragment>
    )
  }
}

AppProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element])
}

AppProvider.defaultProps = {
  children: null
}
