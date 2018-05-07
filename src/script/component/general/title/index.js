import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './title.scss'

class Title extends PureComponent {
  getClassName () {
    const { theme } = this.props

    let response = 'title'
    response += ` title-${theme}`

    return response
  }

  render () {
    return (
      <div className={this.getClassName()}>
        <h1>Primary</h1>
        <h6>Secondary</h6>
      </div>
    )
  }
}

Title.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light'])
}

Title.defaultProps = {
  theme: 'light'
}

export default Title
