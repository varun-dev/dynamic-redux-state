import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  includes, isEmpty, isFunction, isObject,
} from 'lodash'
import { assign, flowRight } from 'lodash/fp'

/**
 * This function is an extension of redux connect, has the same signature.
 * - adds the panelId to the ownProps for the component
 * - adds panelIds to the dispatched actions for handling the dynamic states
 */
export const xconnect = (mapStateToProps, mapDispatchToProps = {}) => (Component) => {
  class WrapperComponent extends React.Component {
    constructor(props, context) {
      super(props, context)
      if (isFunction(mapDispatchToProps)) {
        this.dispatchProps = mapDispatchToProps(getDispatchWithPanel(context), assign(props, context))
      } else if (isObject(mapDispatchToProps) && !isEmpty(mapDispatchToProps)) {
        this.dispatchProps = xbindActionCreators(mapDispatchToProps, context)
      }
    }

    render() {
      const newProps = assign(this.props, { panelId: this.context.panelId })
      const stateProps = isFunction(mapStateToProps) ? mapStateToProps(this.props.state, newProps) : {}
      return <Component {...assign(this.dispatchProps, stateProps, newProps)} />
    }

    shouldComponentUpdate(nextProps) {
      const skipProps = isFunction(mapStateToProps)
        ? ['panelId', 'store']
        : ['panelId', 'store', 'state']
      return !isShallowEqual(nextProps, this.props, skipProps)
    }
  }

  WrapperComponent.propTypes = {
    panelId: PropTypes.string,
    store: PropTypes.object,
    state: PropTypes.object,
  }

  WrapperComponent.contextTypes = {
    panelId: PropTypes.string,
    store: PropTypes.object,
  }

  return connect(state => ({ state }))(WrapperComponent)
}

// Adds panelIds to the actions from the context for dynamic states
function xbindActionCreators(actionCreators, props) {
  return bindActionCreators(actionCreators, getDispatchWithPanel(props))
}

function getDispatchWithPanel(props) {
  return flowRight(props.store.dispatch, apendPanelIdToAction(props.panelId))
}

function apendPanelIdToAction(panelId) {
  return action => assign(action, { meta: assign(action.meta, { panelId }) })
}

function isShallowEqual(source, target, skip) {
  for (const key in source) {
    if (includes(skip, key)) continue
    if (!(key in target) || source[key] !== target[key]) return false
  }
  return true
}
