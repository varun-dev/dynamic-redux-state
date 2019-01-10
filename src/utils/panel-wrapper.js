import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import { createPanelId } from './redux/reducer-utils'

export const { Provider: PanelProvider, Consumer } = React.createContext('panelId')

// - wraps the golden layout callback for react panels
// - generates a unique id for every panel for dynamic states
// - initialised reducers
export default function (Panel, store) {
  class PanelWrapper extends React.Component {
    constructor(props) {
      super(props)
      this.panelId = createPanelId(props.panelName)
    }

    render() {
      return (
        <Provider store={store}>
          <PanelProvider value={this.panelId}>
            <Panel panelId={this.panelId} />
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
