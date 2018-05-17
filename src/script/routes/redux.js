import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setTheme } from '../action/theme'

import './homepage.scss'

// Component
import Button from '../component/general/button'
import Input from '../component/general/input'
import Title from '../component/general/title'

const mapsStateToProps = state => ({
  theme: state.ThemeReducers.theme
})

const mapDispatchToProps = dispatch => ({
  setTheme: theme => dispatch(setTheme(theme))
})

@connect(mapsStateToProps, mapDispatchToProps)
class HomePage extends PureComponent {
  constructor () {
    super()
    this.changeTheme = this.changeTheme.bind(this)
  }

  componentWillMount () {
    this.setState({ theme: this.props.theme })
  }

  componentWillReceiveProps ({ theme }) {
    this.setState({ theme })
  }

  getClassName () {
    const { theme } = this.state

    let response = 'container'
    response += ` container-${theme}`

    return response
  }

  changeTheme (theme) {
    this.props.setTheme(theme)
  }

  render () {
    const { theme } = this.state

    return (
      <Fragment>
        <div className="redux-component">
          <h1>Redux</h1>
          <div className={this.getClassName()}>
            <Button theme={theme}>Hai</Button>
            <Input theme={theme} />
            <Title theme={theme} />

            <div className="button-group">
              <Button onClick={() => this.changeTheme('dark')} theme="dark">
                Dark
              </Button>
              <Button onClick={() => this.changeTheme('light')} theme="light">
                Light
              </Button>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

HomePage.propTypes = {
  theme: PropTypes.bool,
  setTheme: PropTypes.func
}

HomePage.defaultProps = {
  theme: false,
  setTheme: () => {}
}

export default HomePage
