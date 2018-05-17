import React, { PureComponent } from 'react'
import ThemeContext, { AppProvider } from '../context/theme.context'

import './homepage.scss'

// Component
import ButtonChange from '../component/general/button'
import Button from '../component/general/button/button.themed'
import Input from '../component/general/input/input.themed'
import Title from '../component/general/title/title.themed'

class HomePage extends PureComponent {
  static getClassName (theme) {
    let response = 'container'
    response += ` container-${theme}`

    return response
  }

  render () {
    return (
      <AppProvider>
        <ThemeContext.Consumer>
          {theme => (
            <React.Fragment>
              <div className="redux-component">
                <h1>Context</h1>
                <div className={HomePage.getClassName(theme.theme)}>
                  <Button>Hai</Button>
                  <Input />
                  <Title />

                  <div className="button-group">
                    <ButtonChange onClick={() => theme.setTheme('dark')} theme="dark">
                      Dark
                    </ButtonChange>
                    <ButtonChange onClick={() => theme.setTheme('light')} theme="light">
                      Light
                    </ButtonChange>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </ThemeContext.Consumer>
      </AppProvider>
    )
  }
}

export default HomePage
