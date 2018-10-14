import React from 'react'
import PropTypes from 'prop-types'

import { incrementCount } from '../actions'
import xconnect from '../../../utils/redux-utils'

function ButtonIncrement({ onClick }) {
  return (
    <button onClick={onClick}>Increment</button>
  )
}

ButtonIncrement.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default xconnect(null, { onClick: incrementCount })(ButtonIncrement)
