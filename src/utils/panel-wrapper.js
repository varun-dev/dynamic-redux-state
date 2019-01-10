import React from 'react'
import PropTypes from 'prop-types'
import { uniqueId } from 'lodash'
import { Provider } from 'react-redux'

import panelReducer from '../panels/counter/reducers'
import { addPanelReducer } from './reducer-utils'

export const { Provider: PanelProvider, Consumer } = React.createContext('panelId')

// - wraps the golden layout callback for react panels
// - generates a unique id for every panel for dynamic states
// - initialised reducers
export default function (Component, store) {
  class PanelWrapper extends React.Component {
    constructor(props) {
      super(props)
      const id = `instance-${uniqueId()}`
      const { panelName } = this.props
      this.panelId = `${panelName}.${id}`
      const reducer = addPanelReducer(panelName, id, panelReducer)
      if (reducer) store.replaceReducer(reducer)
    }

    render() {
      return (
        <Provider store={store}>
          <PanelProvider value={this.panelId}>
            <Component />
          </PanelProvider>
        </Provider>
      )
    }
  }

  PanelWrapper.propTypes = {
    panelName: PropTypes.string,
  }

  return PanelWrapper
}
