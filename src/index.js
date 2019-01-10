import React from 'react'
import ReactDOM from 'react-dom'
import LayoutWrapper from './utils/layout-wrapper'
import { createStore } from './utils/redux/store-utils'

import './index.css'

ReactDOM.render(
  <LayoutWrapper store={createStore()} />,
  document.getElementById('wrapper'), // eslint-disable-line no-undef
)
