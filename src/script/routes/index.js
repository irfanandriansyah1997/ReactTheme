import React, { PureComponent, Fragment } from 'react'

import './homepage.scss'

// Component
import Button from '../component/general/button'
import Input from '../component/general/input'
import Title from '../component/general/title'

class HomePage extends PureComponent {
  constructor () {
    super()
    this.changeTheme = this.changeTheme.bind(this)
  }

  componentWillMount () {
    this.setState({ theme: 'dark' })
  }

  getClassName () {
    const { theme } = this.state

    let response = 'container'
    response += ` container-${theme}`

    return response
  }

  changeTheme (theme) {
    this.setState({ theme })
  }

  render () {
    const { theme } = this.state

    return (
      <Fragment>
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
      </Fragment>
    )
  }
}

export default HomePage
