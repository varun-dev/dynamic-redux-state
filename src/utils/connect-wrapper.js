import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  includes, isEmpty, isFunction, isObject,
} from 'lodash'
import { assign, flowRight, set } from 'lodash/fp'

import { Consumer } from './panel-wrapper'

/**
 * This function is an extension of redux connect, has the same signature.
 * - adds the panelId to the ownProps for the component
 * - adds panelIds to the dispatched actions for handling the dynamic states
 */
export default (mapStateToProps, mapDispatchToProps) => (Component) => {
  class ConnectWrapper extends React.Component {
    constructor(props) {
      super(props)
      const { state, panelId, dispatch, ...ownProps } = props

      this.dispatchProps = getDispatchProps(
        mapDispatchToProps,
        dispatch,
        panelId,
        ownProps,
      )
    }

    // avoid re-renders if mapStateToProps is not defined
    shouldComponentUpdate(nextProps) {
      const skipProps = isFunction(mapStateToProps)
        ? ['panelId', 'dispatch']
        : ['panelId', 'dispatch', 'state']
      return !isShallowEqual(nextProps, this.props, skipProps)
    }

    render() {
      const { state, ...ownProps } = this.props
      const stateProps = isFunction(mapStateToProps)
        ? mapStateToProps(state, ownProps)
        : {}
      const props = assign(this.dispatchProps, stateProps, ownProps)
      return <Component {...props} />
    }
  }

  ConnectWrapper.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    state: PropTypes.object.isRequired,
    panelId: PropTypes.string.isRequired,
    dispatch: PropTypes.func,
  }

  const PanelIdWrapper = props => (
    <Consumer>{ panelId => <ConnectWrapper {...{ ...props, panelId }} />}</Consumer>
  )

  return connect(state => ({ state }))(PanelIdWrapper)
}

function getDispatchProps (mapDispatchToProps, dispatch, panelId, ownProps){
  if (isFunction(mapDispatchToProps)) {
    return mapDispatchToProps(
      dispatchWithPanelId(dispatch, panelId),
      ownProps,
    )
  }
  if (isObject(mapDispatchToProps) && !isEmpty(mapDispatchToProps)) {
    return bindActionCreators(mapDispatchToProps, dispatchWithPanelId(dispatch, panelId))
  }
  return {}
}

function dispatchWithPanelId(dispatch, panelId) {
  const appendPanelId = action => set('meta.panelId', panelId)(action)
  return flowRight(dispatch, appendPanelId)
}

/* eslint-disable */
function isShallowEqual(source, target, skip) {
  for (const key in source) {
    if (includes(skip, key)) continue
    if (!(key in target) || source[key] !== target[key]) return false
  }
  return true
}
