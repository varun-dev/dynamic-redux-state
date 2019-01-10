import { createStore as reduxCreateStore } from 'redux'
import { addPanelReducer, createRootReducer, deletePanelReducer } from './reducer-utils'

// eslint-disable-next-line
const devToolEnahncer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export const createStore = () => {
  const store = reduxCreateStore(createRootReducer(), devToolEnahncer)
  const SyntheticStore = {
    dispatch: store.dispatch,
    subscribe: store.subscribe,
    getState: store.getState,
    addPanelReducer: (id, reducer) => store.replaceReducer(addPanelReducer(id, reducer)),
    removePanelReducer: (id) => store.replaceReducer(deletePanelReducer(id))
  }
  return SyntheticStore
}
