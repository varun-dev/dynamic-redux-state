import { combineReducers } from 'redux'
import { assign } from 'lodash/fp'
import {
  omit, isEmpty, unset, reduce, get, set, size, mapValues,
} from 'lodash'

export const PANELS_PATH = 'panels'

const root = {
  shared: () => 'path',
}

let panelsRoot = {}

export const createRootReducer = (nextRoot = root) => combineReducers(nextRoot)

export const addPanelReducer = (panelType, panelId, reducer) => {
  if (!panelType || !panelId || !reducer) return null
  set(panelsRoot, `${panelType}.${panelId}`, reducer)
  return recombineReducers(assign(root, { [PANELS_PATH]: panelsRoot }))
}

export const deletePanelReducer = (panelType, panelId) => {
  if (!panelType || !panelId) return null

  unset(panelsRoot, `${panelType}.${panelId}`)
  if (isEmpty(panelsRoot[panelType])) {
    panelsRoot = omit(panelsRoot, panelType)
  }
  return recombineReducers(assign(root, { [PANELS_PATH]: panelsRoot }))
}

function recombineReducers(nextRoot) {
  if (isEmpty(nextRoot[PANELS_PATH])) return combineReducers(omit(nextRoot, PANELS_PATH))
  const nextPanelsRoot = reduce(nextRoot[PANELS_PATH], (acc, value, panelType) => {
    acc[panelType] = size(value) > 1
      ? multireducer(value, 'panelId')
      : combineReducers(value)
    return acc
  }, {})
  return createRootReducer(assign(nextRoot, { [PANELS_PATH]: combineReducers(nextPanelsRoot) }))
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
        return assign(state, { [actionReducerKey]: reducer(state[actionReducerKey], action) })
      }
    }

    return state
  }
}
