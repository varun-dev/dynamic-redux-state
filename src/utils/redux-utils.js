import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty, isFunction, isObject } from 'lodash'
import { assign, flowRight } from 'lodash/fp'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { isShallowEqual } from './toolkit'

// Adds panelIds to the actions from the context for dynamic states
function xbindActionCreators (actionCreators, props) {
  return bindActionCreators(actionCreators, getDispatchWithPanel(props))
}

function getDispatchWithPanel (props) {
  return flowRight(props.store.dispatch, apendPanelIdToAction(props.panelId))
}

const apendPanelIdToAction = panelId => action => {
  return assign(action, { meta: assign(action.meta, {panelId})})
}

/**
 * This function is an extension of redux connect, has the same signature.
 * - adds the panelId to the ownProps for the component
 * - adds panelIds to the dispatched actions for handling our dynamic states
 */
export const xconnect = (mapStateToProps, mapDispatchToProps = {}) => Component => {
  class WrapperComponent extends React.Component {
    constructor (props, context) {
      super(props, context)
      if (isFunction(mapDispatchToProps)) {
        this.dispatchProps = mapDispatchToProps(getDispatchWithPanel(context), assign(props, context))
      } else if (isObject(mapDispatchToProps) && !isEmpty(mapDispatchToProps)) {
        this.dispatchProps = xbindActionCreators(mapDispatchToProps, context)
      }
    }
    render () {
      const newProps = assign(this.props, {panelId: this.context.panelId})
      const stateProps = isFunction(mapStateToProps) ? mapStateToProps(this.props.state, newProps) : {}
      return <Component {...assign(this.dispatchProps, stateProps, newProps)} />
    }
    shouldComponentUpdate (nextProps) {
      const skipProps = isFunction(mapStateToProps)
        ? ['panelId', 'store']
        : ['panelId', 'store', 'state']
      return !isShallowEqual(nextProps, this.props, skipProps)
    }
  }

  WrapperComponent.propTypes = {
    panelId: PropTypes.string,
    store: PropTypes.object,
    state: PropTypes.object
  }

  WrapperComponent.contextTypes = {
    panelId: PropTypes.string,
    store: PropTypes.object
  }

  return connect(state => ({state}))(WrapperComponent)
}