import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './button.scss'

class Button extends PureComponent {
  getClassName () {
    const { theme } = this.props

    let response = 'btn'
    response += ` btn-${theme}`

    return response
  }

  render () {
    return (
      <button className={this.getClassName()} onClick={() => this.props.onClick()}>
        {this.props.children}
      </button>
    )
  }
}

Button.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func
}

Button.defaultProps = {
  theme: 'light',
  children: null,
  onClick: () => {}
}

export default Button
