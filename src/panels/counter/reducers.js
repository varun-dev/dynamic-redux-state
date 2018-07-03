import { combineReducers } from 'redux'

export const panelReducer = combineReducers({
  count: countReducer
})

function countReducer(state = 0, action) {
    switch(action.type) {
    case 'INCREMENT_COUNT':
        return state + 1
    case 'DECREMENT_COUNT':
        return state - 1
    }
    return state
}
