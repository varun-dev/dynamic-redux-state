import React from 'react'
import {uniqueId} from 'lodash'
import {Provider} from 'react-redux'

import {panelReducer} from '../reducers'
import {addPanelReducer} from './reducer-utils'
import {PanelProvider} from './react-utils'

export function wrapPanel(Component, store) {
  return class Wrapped extends React.Component {
    render() {
      const id = 'p' + uniqueId()
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