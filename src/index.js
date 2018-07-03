import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import GoldenLayoutWrapper from './panels/GoldenLayoutWrapper'
import { createRootReducer, initialRootState } from './utils/reducer-utils'

import './index.css'

const devToolEnahncer = window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(createRootReducer(), devToolEnahncer)

ReactDOM.render(
    <Provider store={store}>
        <GoldenLayoutWrapper/>
    </Provider>,
    document.getElementById('wrapper')
)
