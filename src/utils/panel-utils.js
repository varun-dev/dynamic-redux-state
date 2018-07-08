import React from 'react'
import {uniqueId} from 'lodash'
import {Provider} from 'react-redux'

import {panelReducer} from '../panels/counter/reducers'
import {addPanelReducer} from './reducer-utils'
import {PanelProvider} from './react-utils'

// - wraps the golden layout callback for react panels
// - generates a unique id for every panel for dynamic states
// - initialised reducers
export function wrapPanel(Component, store) {
  return class Wrapped extends React.Component {
    render() {
      const id = 'p-' + uniqueId()
      const { panelName } = this.props
      const panelId = panelName + '.' + id
      store.replaceReducer(addPanelReducer(panelName, id, panelReducer))
      return (
        <Provider store={store}>
          <PanelProvider panelId={panelId}>
            <Component {...this.props}/>
          </PanelProvider>
        </Provider>
      )
    }
  }
}
