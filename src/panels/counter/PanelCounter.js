import React from 'react'
import PropTypes from 'prop-types'

import ButtonIncrement from './components/ButtonIncrement'
import ButtonDecrement from './components/ButtonDecrement'
import LabelCounter from './components/LabelCounter'
import { incrementCountAction } from './actions'
import connect from '../../utils/connect-wrapper'

class PanelCounter extends React.Component {
  componentDidMount() {
    const { incrementCount } = this.props
    // TODO: investigate - Redux 4 not initialising reducer after replaceReducer API
    incrementCount()
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
}

PanelCounter.propTypes = {
  incrementCount: PropTypes.func,
}

export default connect(null, { incrementCount: incrementCountAction })(PanelCounter)
