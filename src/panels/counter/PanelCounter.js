import React from 'react'
import PropTypes from 'prop-types'

import ButtonIncrement from './components/ButtonIncrement'
import ButtonDecrement from './components/ButtonDecrement'
import LabelCounter from './components/LabelCounter'
import panelRootRuducer from './reducers'

export default class PanelCounter extends React.Component {
  constructor (props, {store}) {
    super(props)
    store.addPanelReducer(props.panelId, panelRootRuducer)
  }

  render() {
    return (
       <div>
        <LabelCounter />
        <ButtonIncrement />
        <ButtonDecrement />
       </div>
    )
  }

  componentWillUnmount () {
    this.context.store.removePanelReducer(this.props.panelId)
  }
}

PanelCounter.contextTypes = {
  store: PropTypes.object
}

PanelCounter.propTypes = {
  panelId: PropTypes.string
}
