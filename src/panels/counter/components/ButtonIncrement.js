import React from 'react'
import PropTypes from 'prop-types'

import { incrementCountAction } from '../actions'
import connect from '../../../utils/connect-wrapper'

function ButtonIncrement({ onClick }) {
  return (
    <button type="button" onClick={onClick}>Increment</button>
  )
}

ButtonIncrement.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default connect(null, { onClick: incrementCountAction })(ButtonIncrement)
