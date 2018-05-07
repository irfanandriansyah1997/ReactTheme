import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './input.scss'

class Input extends PureComponent {
  getClassName () {
    const { theme } = this.props

    let response = 'input'
    response += ` input-${theme}`

    return response
  }

  render () {
    return <input className={this.getClassName()} />
  }
}

Input.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light'])
}

Input.defaultProps = {
  theme: 'light'
}

export default Input
