import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import GoldenLayoutWrapper from './GoldenLayoutWrapper'
import { createRootReducer } from './utils/reducer-utils'

import './index.css'

// eslint-disable-next-line
const devToolEnahncer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(createRootReducer(), devToolEnahncer)

ReactDOM.render(
  <Provider store={store}>
    <GoldenLayoutWrapper />
  </Provider>,
  document.getElementById('wrapper'),
)
