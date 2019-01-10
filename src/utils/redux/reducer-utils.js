import { combineReducers } from 'redux'
import { unset, omit } from 'lodash/fp'
import {
  isEmpty, reduce, get, set, size, mapValues, uniqueId,
} from 'lodash'

export const PANELS_PATH = 'panels'

const initialRoot = () => ({
  shared: () => 'path',
})

const root = initialRoot()

let panelsRoot = {}

export const createPanelId = name => `${name}.instance-${uniqueId()}`

export const createRootReducer = (nextRoot = initialRoot()) => combineReducers(nextRoot)

export const addPanelReducer = (panelId, reducer) => {
  if (!panelId || !reducer) return null
  set(panelsRoot, `${panelId}`, reducer)
  return recombineReducers({...root, [PANELS_PATH]: panelsRoot })
}

export const deletePanelReducer = (panelId) => {
  if (!panelId) return null
  panelsRoot = unset(`${panelId}`)(panelsRoot)
  const panelName = panelId.split('.')[0]
  if (isEmpty(panelsRoot[panelName])) {
    panelsRoot = omit(panelName)(panelsRoot)
  }
  return recombineReducers({...root, [PANELS_PATH]: panelsRoot})
}

function recombineReducers(nextRoot) {
  if (isEmpty(nextRoot[PANELS_PATH])) return combineReducers(omit(PANELS_PATH)(nextRoot))
  const nextPanelsRoot = reduce(nextRoot[PANELS_PATH], (acc, value, panelType) => {
    acc[panelType] = multireducer(value, 'panelId')
    return acc
  }, {})
  return createRootReducer({...nextRoot, [PANELS_PATH]: combineReducers(nextPanelsRoot) })
}

const initAction = { type: '@@multireducer/INIT' }

const getKeyFromAction = (action) => {
  const panelId = get(action, 'meta.panelId')
  return (panelId && panelId.split('.')[1]) || null
}

/**
 * Use instances of same reducers based on panelIds
 * https://github.com/erikras/multireducer
 */
function multireducer(reducers, reducerKey) {
  let isCustomMountPoint
  if (typeof reducers === 'function') {
    if (!reducerKey) {
      throw new Error('No key specified for custom mounting of reducer')
    } else {
      isCustomMountPoint = true
    }
  }

  const initialState = isCustomMountPoint
    ? reducers(undefined, initAction)
    : mapValues(reducers, reducer => reducer(undefined, initAction))

  return function multiCombination(state = initialState, action) {
    const actionReducerKey = getKeyFromAction(action)
    if (actionReducerKey) {
      // custom mount point
      if (isCustomMountPoint && reducerKey === actionReducerKey) {
        return reducers(state, action)
      }

      // usual multireducer mounting
      const reducer = reducers[actionReducerKey]

      if (reducer) {
        return {...state, [actionReducerKey]: reducer(state[actionReducerKey], action)}
      }
    }

    return state
  }
}
