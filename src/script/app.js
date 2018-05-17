import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import ConfigureStore from './store'

import Redux from './routes/redux'
import Context from './routes/context'

const store = ConfigureStore()

render(
  <Provider store={store}>
    <React.Fragment>
      <Redux />
      <Context />
    </React.Fragment>
  </Provider>,
  document.getElementById('app')
)
